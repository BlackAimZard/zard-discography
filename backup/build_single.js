const fs = require("node:fs");
const path = require("node:path");

// CONFIG

const DATA_PATH = path.join(__dirname, "single_data.js");
const TEMPLATE_PATH = path.join(__dirname, "single_template.html");
const OUTPUT_PATH = path.join(__dirname, "single.html");
const PLACEHOLDER = "{{SINGLE_ROWS}}";
const COVER_MAX_SIZE = 116;

const RECORD_FIELDS = [
    "type",
    "id",
    "order",
    "category",
    "title",
    "japaneseTitle",
    "releases",
    "cover",
    "tracks",
    "tieup",
    "related"
];

const COVER_FIELDS = [
    "src"
];

const TRACK_FIELDS = [
    "title",
    "japaneseTitle",
    "credit",
    "karaoke"
];

const RELEASE_FIELDS = [
    "format",
    "label",
    "catalog",
    "edition",
    "released"
];

const TIEUP_FIELDS = [
    "track",
    "text",
    "start",
    "end"
];

const RELATED_FIELDS = [
    "title",
    "href"
];

const UNRELEASED_VALUES = new Set([
    "unreleased",
    "Unreleased"
]);

const FIELD_GUIDE = RECORD_FIELDS.map((field, index) => {
    return `${index + 1}. ${field}`;
});

const VOID_ELEMENTS = new Set([
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
]);

const RAW_TEXT_ELEMENTS = new Set([
    "script",
    "style"
]);

const ALLOWED_HTML_ENTITIES = new Set([
    "amp",
    "apos",
    "gt",
    "lt",
    "nbsp",
    "quot"
]);

const FORBIDDEN_SOURCE_CONTROLS =
    /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F\u2028\u2029]/u;
const FORBIDDEN_INVISIBLE_CHARACTERS =
    /[\u00AD\u034F\u061C\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\uFEFF\uFFFD]/u;
const FORBIDDEN_STRING_CONTROLS =
    /[\u0000-\u001F\u007F-\u009F]/u;

// DATA PARSER

function readUtf8FileStrict(filePath, label) {
    const bytes = fs.readFileSync(filePath);

    if (
        bytes.length >= 3 &&
        bytes[0] === 0xEF &&
        bytes[1] === 0xBB &&
        bytes[2] === 0xBF
    ) {
        throw new Error(`${label} must not contain a UTF-8 BOM.`);
    }

    try {
        return new TextDecoder(
            "utf-8",
            {
                fatal: true
            }
        ).decode(bytes);
    } catch {
        throw new Error(
            `${label} is not valid UTF-8. Save the file as UTF-8 without BOM.`
        );
    }
}

function findUnicodeIssue(value) {
    const control = value.match(
        FORBIDDEN_SOURCE_CONTROLS
    );

    if (control) {
        return {
            index: control.index,
            message: "contains a forbidden control character"
        };
    }

    const invisible = value.match(
        FORBIDDEN_INVISIBLE_CHARACTERS
    );

    if (invisible) {
        return {
            index: invisible.index,
            message: "contains a forbidden invisible or replacement character"
        };
    }

    for (
        let index = 0;
        index < value.length;
        index += 1
    ) {
        const code = value.charCodeAt(index);

        if (
            code >= 0xD800 &&
            code <= 0xDBFF
        ) {
            const next = value.charCodeAt(index + 1);

            if (
                next < 0xDC00 ||
                next > 0xDFFF
            ) {
                return {
                    index,
                    message: "contains an unpaired Unicode surrogate"
                };
            }

            index += 1;
            continue;
        }

        if (
            code >= 0xDC00 &&
            code <= 0xDFFF
        ) {
            return {
                index,
                message: "contains an unpaired Unicode surrogate"
            };
        }
    }

    return null;
}

function getLocation(source, index) {
    const before = source.slice(0, index);
    const lines = before.match(/\r\n|\r|\n/g);
    const lastLineBreak = Math.max(
        before.lastIndexOf("\n"),
        before.lastIndexOf("\r")
    );

    return {
        line: (lines ? lines.length : 0) + 1,
        column: index - lastLineBreak
    };
}

function formatLocation(source, index) {
    const location = getLocation(source, index);
    return `line ${location.line}, column ${location.column}`;
}

function isIdentifierStart(character) {
    return (
        typeof character === "string" &&
        character.length === 1 &&
        /[A-Za-z_$]/.test(character)
    );
}

function isIdentifierPart(character) {
    return (
        typeof character === "string" &&
        character.length === 1 &&
        /[A-Za-z0-9_$]/.test(character)
    );
}

class DataSyntaxError extends Error {
    constructor(source, index, message) {
        super(`${message} (${formatLocation(source, index)}).`);
        this.name = "DataSyntaxError";
    }
}

class StrictDataParser {
    constructor(source) {
        this.source = source;
        this.index = 0;
        this.objectMetadata = new WeakMap();
        this.duplicateFields = [];
        this.valueLocations = new Map();
    }

    parse() {
        this.validateSourceHygiene();
        this.parseFieldGuide();
        this.skipWhitespace();
        this.expectKeyword("const");
        this.requireWhitespace(
            "A space is required after const"
        );
        this.skipWhitespace();

        const declaration = this.readIdentifier();

        if (declaration.value !== "SINGLE_DATA") {
            this.fail(
                declaration.start,
                'The only allowed declaration is "const SINGLE_DATA"'
            );
        }

        this.skipWhitespace();
        this.expectCharacter("=");
        const data = this.parseValue("SINGLE_DATA");

        if (!Array.isArray(data)) {
            this.fail(
                this.index,
                "SINGLE_DATA must be an array literal"
            );
        }

        this.skipWhitespace();
        this.expectCharacter(";");
        this.skipWhitespace();

        if (this.index !== this.source.length) {
            this.fail(
                this.index,
                "No code, export, comment, or other content is allowed after SINGLE_DATA"
            );
        }

        return {
            data,
            duplicateFields: this.duplicateFields,
            objectMetadata: this.objectMetadata,
            valueLocations: this.valueLocations
        };
    }

    validateSourceHygiene() {
        if (this.source.startsWith("\uFEFF")) {
            this.fail(0, "UTF-8 BOM is not allowed");
        }

        const unicodeIssue = findUnicodeIssue(this.source);

        if (unicodeIssue) {
            this.fail(
                unicodeIssue.index,
                `single_data.js ${unicodeIssue.message}`
            );
        }

        const withoutCrLf = this.source.replace(/\r\n/g, "");
        const hasCrLf = this.source.includes("\r\n");
        const hasStandaloneCr = withoutCrLf.includes("\r");
        const hasStandaloneLf = withoutCrLf.includes("\n");

        if (
            hasStandaloneCr ||
            (hasCrLf && hasStandaloneLf)
        ) {
            this.fail(
                0,
                "single_data.js must use one consistent line-ending style"
            );
        }

        const trailingWhitespace = /[ \t]+(?=\r?$)/m.exec(
            this.source
        );

        if (trailingWhitespace) {
            this.fail(
                trailingWhitespace.index,
                "Trailing spaces and tabs are not allowed"
            );
        }

        if (
            !this.source.endsWith("\n") &&
            !this.source.endsWith("\r")
        ) {
            this.fail(
                this.source.length,
                "single_data.js must end with one line break"
            );
        }
    }

    parseFieldGuide() {
        const eol = this.source.includes("\r\n")
            ? "\r\n"
            : "\n";
        const fieldGuideSource = createFieldGuideSource(eol);

        if (!this.source.startsWith(fieldGuideSource)) {
            this.fail(
                0,
                `single_data.js must begin with the exact fixed ${RECORD_FIELDS.length}-field guide`
            );
        }

        this.index = fieldGuideSource.length;
    }

    parseValue(pathLabel) {
        this.skipWhitespace();

        if (!this.valueLocations.has(pathLabel)) {
            this.valueLocations.set(
                pathLabel,
                this.index
            );
        }

        const character = this.source[this.index];

        if (character === "{") {
            return this.parseObject(pathLabel);
        }

        if (character === "[") {
            return this.parseArray(pathLabel);
        }

        if (character === "\"") {
            return this.parseString();
        }

        if (
            character === "'" ||
            character === "`"
        ) {
            this.fail(
                this.index,
                "String literals must use double quotes. Escape embedded double quotes as \\\"."
            );
        }

        if (
            character === "-" ||
            /[0-9]/.test(character)
        ) {
            return this.parseNumber();
        }

        if (isIdentifierStart(character)) {
            const token = this.readIdentifier();

            if (token.value === "null") {
                return null;
            }

            if (token.value === "true") {
                return true;
            }

            if (token.value === "false") {
                return false;
            }

            this.fail(
                token.start,
                `Identifier "${token.value}" is not literal data`
            );
        }

        this.fail(
            this.index,
            "Expected a literal object, array, string, number, boolean, or null"
        );
    }

    parseObject(pathLabel) {
        const objectIndex = this.index;
        this.expectCharacter("{");

        const object = Object.create(null);
        const keys = [];
        const fieldLocations = new Map();

        this.objectMetadata.set(object, {
            index: objectIndex,
            keys,
            fieldLocations,
            pathLabel
        });

        this.skipWhitespace();

        if (this.peekCharacter("}")) {
            this.index += 1;
            return object;
        }

        while (this.index < this.source.length) {
            this.skipWhitespace();

            if (!isIdentifierStart(this.source[this.index])) {
                this.fail(
                    this.index,
                    "Object fields must use plain unquoted names; computed, quoted, spread, shorthand, and method syntax are forbidden"
                );
            }

            const fieldToken = this.readIdentifier();
            const field = fieldToken.value;

            this.skipWhitespace();
            this.expectCharacter(":");

            const value = this.parseValue(
                `${pathLabel}.${field}`
            );

            keys.push(field);

            if (fieldLocations.has(field)) {
                this.duplicateFields.push({
                    object,
                    pathLabel,
                    field,
                    firstIndex: fieldLocations.get(field),
                    duplicateIndex: fieldToken.start
                });
            } else {
                fieldLocations.set(field, fieldToken.start);
                Object.defineProperty(object, field, {
                    value,
                    enumerable: true,
                    configurable: false,
                    writable: false
                });
            }

            this.skipWhitespace();

            if (this.peekCharacter("}")) {
                this.index += 1;
                return object;
            }

            this.expectCharacter(",");
            this.skipWhitespace();

            if (this.peekCharacter("}")) {
                this.fail(
                    this.index,
                    "Trailing commas are not allowed"
                );
            }
        }

        this.fail(this.index, "Object literal is not closed");
    }

    parseArray(pathLabel) {
        this.expectCharacter("[");

        const array = [];

        this.skipWhitespace();

        if (this.peekCharacter("]")) {
            this.index += 1;
            return array;
        }

        while (this.index < this.source.length) {
            const itemPath = `${pathLabel}[${array.length}]`;
            array.push(this.parseValue(itemPath));
            this.skipWhitespace();

            if (this.peekCharacter("]")) {
                this.index += 1;
                return array;
            }

            this.expectCharacter(",");
            this.skipWhitespace();

            if (this.peekCharacter("]")) {
                this.fail(
                    this.index,
                    "Trailing commas and empty array entries are not allowed"
                );
            }
        }

        this.fail(this.index, "Array literal is not closed");
    }

    parseString() {
        const start = this.index;
        let value = "";

        this.index += 1;

        while (this.index < this.source.length) {
            const character = this.source[this.index];

            if (character === "\"") {
                this.index += 1;
                return value;
            }

            if (
                character === "\n" ||
                character === "\r"
            ) {
                this.fail(
                    this.index,
                    "Raw line breaks are not allowed inside strings"
                );
            }

            if (character !== "\\") {
                value += character;
                this.index += 1;
                continue;
            }

            value += this.parseEscapeSequence();
        }

        this.fail(start, "String literal is not closed");
    }

    parseEscapeSequence() {
        const start = this.index;
        const escaped = this.source[this.index + 1];
        const simpleEscapes = {
            "\"": "\"",
            "'": "'",
            "`": "`",
            "\\": "\\",
            "/": "/",
            b: "\b",
            f: "\f",
            n: "\n",
            r: "\r",
            t: "\t",
            v: "\v",
            0: "\0"
        };

        if (escaped === undefined) {
            this.fail(start, "Incomplete escape sequence");
        }

        if (
            escaped === "\n" ||
            escaped === "\r"
        ) {
            this.fail(
                start,
                "Escaped line continuations are forbidden"
            );
        }

        if (Object.hasOwn(simpleEscapes, escaped)) {
            if (
                escaped === "0" &&
                /[0-9]/.test(this.source[this.index + 2])
            ) {
                this.fail(
                    start,
                    "Legacy numeric escape sequences are forbidden"
                );
            }

            this.index += 2;
            return simpleEscapes[escaped];
        }

        if (escaped === "x") {
            const hexadecimal = this.source.slice(
                this.index + 2,
                this.index + 4
            );

            if (!/^[0-9A-Fa-f]{2}$/.test(hexadecimal)) {
                this.fail(start, "Invalid hexadecimal escape");
            }

            this.index += 4;
            return String.fromCodePoint(
                Number.parseInt(hexadecimal, 16)
            );
        }

        if (escaped === "u") {
            return this.parseUnicodeEscape(start);
        }

        this.fail(
            start,
            `Unsupported escape sequence "\\${escaped}"`
        );
    }

    parseUnicodeEscape(start) {
        if (this.source[this.index + 2] === "{") {
            const closingBrace = this.source.indexOf(
                "}",
                this.index + 3
            );

            if (closingBrace === -1) {
                this.fail(start, "Invalid Unicode code-point escape");
            }

            const hexadecimal = this.source.slice(
                this.index + 3,
                closingBrace
            );

            if (
                !/^[0-9A-Fa-f]{1,6}$/.test(hexadecimal) ||
                Number.parseInt(hexadecimal, 16) > 0x10FFFF
            ) {
                this.fail(start, "Invalid Unicode code-point escape");
            }

            this.index = closingBrace + 1;
            return String.fromCodePoint(
                Number.parseInt(hexadecimal, 16)
            );
        }

        const hexadecimal = this.source.slice(
            this.index + 2,
            this.index + 6
        );

        if (!/^[0-9A-Fa-f]{4}$/.test(hexadecimal)) {
            this.fail(start, "Invalid Unicode escape");
        }

        this.index += 6;
        return String.fromCharCode(
            Number.parseInt(hexadecimal, 16)
        );
    }

    parseNumber() {
        const start = this.index;
        const match = this.source
            .slice(this.index)
            .match(/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]+)?(?:[eE][+-]?[0-9]+)?/);

        if (!match) {
            this.fail(start, "Invalid number literal");
        }

        this.index += match[0].length;

        if (
            isIdentifierPart(this.source[this.index]) ||
            this.source[this.index] === "."
        ) {
            this.fail(
                start,
                "Hexadecimal, binary, octal, BigInt, NaN, Infinity, and malformed numbers are forbidden"
            );
        }

        const value = Number(match[0]);

        if (!Number.isFinite(value)) {
            this.fail(start, "Number must be finite");
        }

        return value;
    }

    readIdentifier() {
        const start = this.index;

        if (!isIdentifierStart(this.source[this.index])) {
            this.fail(this.index, "Expected an identifier");
        }

        this.index += 1;

        while (isIdentifierPart(this.source[this.index])) {
            this.index += 1;
        }

        return {
            start,
            value: this.source.slice(start, this.index)
        };
    }

    expectKeyword(keyword) {
        const start = this.index;

        if (!this.source.startsWith(keyword, start)) {
            this.fail(start, `Expected "${keyword}"`);
        }

        const next = this.source[start + keyword.length];

        if (isIdentifierPart(next)) {
            this.fail(start, `Expected "${keyword}"`);
        }

        this.index += keyword.length;
    }

    expectCharacter(character) {
        if (this.source[this.index] !== character) {
            this.fail(
                this.index,
                `Expected "${character}"`
            );
        }

        this.index += 1;
    }

    peekCharacter(character) {
        return this.source[this.index] === character;
    }

    requireWhitespace(message) {
        if (!/[ \t\r\n]/.test(this.source[this.index])) {
            this.fail(this.index, message);
        }
    }

    skipWhitespace() {
        while (
            this.source[this.index] === " " ||
            this.source[this.index] === "\t" ||
            this.source[this.index] === "\r" ||
            this.source[this.index] === "\n"
        ) {
            this.index += 1;
        }
    }

    fail(index, message) {
        throw new DataSyntaxError(
            this.source,
            index,
            message
        );
    }
}

function formatDuplicateField(source, duplicate) {
    const objectId = (
        duplicate.object &&
        typeof duplicate.object.id === "string"
    )
        ? duplicate.object.id
        : null;
    const label = objectId
        ? `Record "${objectId}"`
        : duplicate.pathLabel;

    return (
        `${label}: duplicate field "${duplicate.field}" at ` +
        `${formatLocation(source, duplicate.duplicateIndex)}; ` +
        `first declared at ${formatLocation(source, duplicate.firstIndex)}`
    );
}

// DATA VALIDATION

function getValidationExample(pathLabel) {
    if (typeof pathLabel !== "string") {
        return null;
    }

    if (/^SINGLE_DATA\[[0-9]+\]$/.test(pathLabel)) {
        return (
            "A record with exactly these fields: " +
            RECORD_FIELDS.join(", ") + "."
        );
    }

    if (/\.cover$/.test(pathLabel)) {
        return (
            'cover: { src: "assets/cover.jpg" } ' +
            "or cover: null."
        );
    }

    if (/\.tracks$/.test(pathLabel)) {
        return "tracks: [ { title: \"Song\", japaneseTitle: null, credit: null, karaoke: false } ] or tracks: null.";
    }

    if (/\.tracks\[[0-9]+\]$/.test(pathLabel)) {
        return '{ title: "Song", japaneseTitle: null, credit: null, karaoke: false }';
    }

    if (/\.releases$/.test(pathLabel)) {
        return "releases: [ { format: null, label: \"B-Gram Records\", catalog: \"BGDH-1001\", edition: null, released: \"1993.01.27\" } ] or releases: null.";
    }

    if (/\.releases\[[0-9]+\]$/.test(pathLabel)) {
        return '{ format: null, label: "B-Gram Records", catalog: "BGDH-1001", edition: null, released: "1993.01.27" }';
    }

    if (/\.tieup$/.test(pathLabel)) {
        return 'tieup: [ { track: 1, text: "Theme Song", start: "1993", end: null } ] or tieup: null.';
    }

    if (/\.tieup\[[0-9]+\]$/.test(pathLabel)) {
        return '{ track: 1, text: "Theme Song", start: "1993", end: null }';
    }

    if (/\.related$/.test(pathLabel)) {
        return 'related: [ { title: "Wiki", href: "https://example.com" } ] or related: null.';
    }

    if (/\.related\[[0-9]+\]$/.test(pathLabel)) {
        return '{ title: "Wiki", href: "https://example.com" }';
    }

    const field = pathLabel.split(".").at(-1);
    const examples = {
        type: 'type: "single" or type: "promotional".',
        id: 'id: "sg01" or id: "pr01".',
        order: 'order: "1st", order: "2nd", order: "3rd", order: "4th", or order: null.',
        title: 'title: "Good-bye My Loneliness".',
        japaneseTitle: 'japaneseTitle: "負けないで" or japaneseTitle: null.',
        format: 'format: "Cassette" or format: null.',
        label: 'label: "B-Gram Records" or label: null.',
        catalog: 'catalog: "BGDH-1001" or catalog: null.',
        edition: 'edition: "30th Anniversary Edition" or edition: null.',
        released: 'released: "1993.01.27", released: "unreleased", released: "Unreleased", or released: null.',
        src: 'src: "assets/cover.jpg".',
        credit: 'credit: "Lyrics: Izumi Sakai" or credit: null.',
        karaoke: "karaoke: true or karaoke: false.",
        href: 'href: "https://example.com".',
        category: 'category: "Single Collection" or category: null.'
    };

    return examples[field] || null;
}

class ValidationErrors {
    constructor(source, valueLocations) {
        this.items = [];
        this.source = source;
        this.valueLocations = valueLocations;
    }

    add(
        message,
        group = "FIELD VALUES",
        details = {}
    ) {
        const pathLabel = details.path || null;
        const index = Number.isInteger(details.index)
            ? details.index
            : pathLabel !== null
                ? this.valueLocations.get(pathLabel)
                : undefined;
        const location = Number.isInteger(index)
            ? formatLocation(this.source, index)
            : null;
        const example = details.example === undefined
            ? getValidationExample(pathLabel)
            : details.example;
        const lines = [
            location === null
                ? `single_data.js — ${message}`
                : `single_data.js, ${location} — ${message}`
        ];

        if (pathLabel !== null) {
            lines.push(`Path: ${pathLabel}`);
        }

        if (example) {
            lines.push(`Correct example: ${example}`);
        }

        this.items.push({
            group,
            message: lines.join("\n   ")
        });
    }
}

function isObject(value) {
    return (
        value !== null &&
        typeof value === "object" &&
        !Array.isArray(value)
    );
}

function validateExactFields(
    value,
    expectedFields,
    label,
    errors,
    objectMetadata,
    pathLabel
) {
    if (!isObject(value)) {
        errors.add(
            `${label} must be an object.`,
            "DATA STRUCTURE",
            {
                path: pathLabel
            }
        );
        return false;
    }

    const metadata = objectMetadata.get(value);
    const objectPath = metadata
        ? metadata.pathLabel
        : pathLabel;
    const actualFields = Object.keys(value);
    const unsupported = actualFields.filter(field => {
        return !expectedFields.includes(field);
    });
    const missing = expectedFields.filter(field => {
        return !Object.hasOwn(value, field);
    });

    if (unsupported.length > 0) {
        unsupported.forEach(field => {
            errors.add(
                `${label} contains unsupported field "${field}".`,
                "DATA STRUCTURE",
                {
                    example: `Remove "${field}"; allowed fields are: ${expectedFields.join(", ")}.`,
                    index: metadata
                        ? metadata.fieldLocations.get(field)
                        : undefined,
                    path: `${objectPath}.${field}`
                }
            );
        });
    }

    if (missing.length > 0) {
        errors.add(
            `${label} is missing required field${missing.length === 1 ? "" : "s"}: ${missing.join(", ")}.`,
            "DATA STRUCTURE",
            {
                example: `Use exactly these fields in this order: ${expectedFields.join(", ")}.`,
                index: metadata
                    ? metadata.index
                    : undefined,
                path: objectPath
            }
        );
    }

    if (
        unsupported.length === 0 &&
        missing.length === 0
    ) {
        const sourceOrder = metadata
            ? metadata.keys
            : actualFields;
        const hasDuplicateField = (
            new Set(sourceOrder).size !==
            sourceOrder.length
        );

        if (
            (
                !hasDuplicateField &&
                (
                    sourceOrder.length !== expectedFields.length ||
                    sourceOrder.some((field, index) => {
                        return field !== expectedFields[index];
                    })
                )
            )
        ) {
            const mismatchIndex = sourceOrder.findIndex(
                (field, index) => {
                    return field !== expectedFields[index];
                }
            );
            const mismatchField = sourceOrder[mismatchIndex];

            errors.add(
                `${label} fields must appear exactly in this order: ${expectedFields.join(", ")}.`,
                "DATA STRUCTURE",
                {
                    example: expectedFields.join(", "),
                    index: (
                        metadata &&
                        mismatchField !== undefined
                    )
                        ? metadata.fieldLocations.get(
                            mismatchField
                        )
                        : metadata
                            ? metadata.index
                            : undefined,
                    path: objectPath
                }
            );
        }
    }

    return true;
}

function validateCleanString(
    value,
    label,
    errors,
    pathLabel
) {
    if (typeof value !== "string") {
        errors.add(
            `${label} must be a string.`,
            "FIELD VALUES",
            {
                path: pathLabel
            }
        );
        return false;
    }

    if (value.length === 0 || value.trim().length === 0) {
        errors.add(
            `${label} must not be empty; use null where null is allowed.`,
            "FIELD VALUES",
            {
                path: pathLabel
            }
        );
        return false;
    }

    let valid = true;

    if (value !== value.trim()) {
        errors.add(
            `${label} must not contain leading or trailing whitespace.`,
            "FIELD VALUES",
            {
                path: pathLabel
            }
        );
        valid = false;
    }

    const unicodeIssue = findUnicodeIssue(value);

    if (unicodeIssue) {
        errors.add(
            `${label} ${unicodeIssue.message}.`,
            "FIELD VALUES",
            {
                path: pathLabel
            }
        );
        valid = false;
    }

    if (
        !unicodeIssue &&
        FORBIDDEN_STRING_CONTROLS.test(value)
    ) {
        errors.add(
            `${label} contains a forbidden control character.`,
            "FIELD VALUES",
            {
                path: pathLabel
            }
        );
        valid = false;
    }

    return valid;
}

function validateNullableString(
    value,
    label,
    errors,
    pathLabel
) {
    if (value === null) {
        return;
    }

    validateCleanString(
        value,
        label,
        errors,
        pathLabel
    );
}

function getOrdinalSuffix(digits) {
    const lastTwoDigits = digits.slice(-2);

    if (
        lastTwoDigits === "11" ||
        lastTwoDigits === "12" ||
        lastTwoDigits === "13"
    ) {
        return "th";
    }

    const lastDigit = digits.slice(-1);

    if (lastDigit === "1") {
        return "st";
    }

    if (lastDigit === "2") {
        return "nd";
    }

    if (lastDigit === "3") {
        return "rd";
    }

    return "th";
}

function validateOrdinal(
    value,
    label,
    errors,
    pathLabel
) {
    if (value === null) {
        return;
    }

    if (
        !validateCleanString(
            value,
            label,
            errors,
            pathLabel
        )
    ) {
        return;
    }

    const match = value.match(
        /^([1-9][0-9]*)(st|nd|rd|th)$/
    );

    if (match === null) {
        errors.add(
            `${label} must be null or a positive English ordinal without leading zeroes.`,
            "FIELD VALUES",
            {
                example: 'Use "1st", "2nd", "3rd", "4th", "11th", "21st", or null.',
                path: pathLabel
            }
        );
        return;
    }

    const digits = match[1];
    const suffix = match[2];
    const expectedSuffix = getOrdinalSuffix(digits);

    if (suffix !== expectedSuffix) {
        errors.add(
            `${label} uses the wrong ordinal suffix; ${digits} must end in "${expectedSuffix}".`,
            "FIELD VALUES",
            {
                example: `${digits}${expectedSuffix}`,
                path: pathLabel
            }
        );
    }
}

function validateDate(
    value,
    label,
    errors,
    pathLabel
) {
    if (
        !validateCleanString(
            value,
            label,
            errors,
            pathLabel
        )
    ) {
        return;
    }

    const match = value.match(
        /^([0-9]{4})(?:\.([0-9]{2})(?:\.([0-9]{2}))?)?$/
    );

    if (!match) {
        errors.add(
            `${label} must use YYYY, YYYY.MM, or YYYY.MM.DD with numbers only.`,
            "FIELD VALUES",
            {
                path: pathLabel
            }
        );
        return;
    }

    const year = Number(match[1]);
    const month = match[2] === undefined
        ? null
        : Number(match[2]);
    const day = match[3] === undefined
        ? null
        : Number(match[3]);

    if (year === 0) {
        errors.add(
            `${label} must use a year from 0001 to 9999.`,
            "FIELD VALUES",
            {
                path: pathLabel
            }
        );
    }

    if (
        month !== null &&
        (
            month < 1 ||
            month > 12
        )
    ) {
        errors.add(
            `${label} contains an invalid month.`,
            "FIELD VALUES",
            {
                path: pathLabel
            }
        );
        return;
    }

    if (day === null) {
        return;
    }

    const leapYear = (
        year % 4 === 0 &&
        (
            year % 100 !== 0 ||
            year % 400 === 0
        )
    );
    const daysInMonth = [
        31,
        leapYear ? 29 : 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ][month - 1];

    if (
        day < 1 ||
        day > daysInMonth
    ) {
        errors.add(
            `${label} contains an invalid calendar day.`,
            "FIELD VALUES",
            {
                path: pathLabel
            }
        );
    }
}

function validateNullableReleaseDate(
    value,
    label,
    errors,
    pathLabel
) {
    if (
        value === null ||
        UNRELEASED_VALUES.has(value)
    ) {
        return;
    }

    validateDate(
        value,
        label,
        errors,
        pathLabel
    );
}

function validatePathString(
    value,
    label,
    errors,
    pathLabel
) {
    validateCleanString(
        value,
        label,
        errors,
        pathLabel
    );
}

function validateCover(
    cover,
    recordLabel,
    recordPath,
    errors,
    objectMetadata
) {
    if (cover === null) {
        return;
    }

    const label = `${recordLabel}.cover`;
    const pathLabel = `${recordPath}.cover`;

    if (
        !validateExactFields(
            cover,
            COVER_FIELDS,
            label,
            errors,
            objectMetadata,
            pathLabel
        )
    ) {
        return;
    }

    if (Object.hasOwn(cover, "src")) {
        validatePathString(
            cover.src,
            `${label}.src`,
            errors,
            `${pathLabel}.src`
        );
    }
}

function validateTracks(
    tracks,
    recordLabel,
    recordPath,
    errors,
    objectMetadata
) {
    if (tracks === null) {
        return;
    }

    if (!Array.isArray(tracks) || tracks.length === 0) {
        errors.add(
            `${recordLabel}.tracks must be a non-empty array or null.`,
            "FIELD VALUES",
            {
                path: `${recordPath}.tracks`
            }
        );
        return;
    }

    tracks.forEach((track, index) => {
        const label = `${recordLabel}.tracks[${index}]`;
        const pathLabel = `${recordPath}.tracks[${index}]`;

        if (
            !validateExactFields(
                track,
                TRACK_FIELDS,
                label,
                errors,
                objectMetadata,
                pathLabel
            )
        ) {
            return;
        }

        if (Object.hasOwn(track, "title")) {
            validateCleanString(
                track.title,
                `${label}.title`,
                errors,
                `${pathLabel}.title`
            );
        }

        if (Object.hasOwn(track, "japaneseTitle")) {
            validateNullableString(
                track.japaneseTitle,
                `${label}.japaneseTitle`,
                errors,
                `${pathLabel}.japaneseTitle`
            );
        }

        if (Object.hasOwn(track, "credit")) {
            validateNullableString(
                track.credit,
                `${label}.credit`,
                errors,
                `${pathLabel}.credit`
            );
        }

        if (
            Object.hasOwn(track, "karaoke") &&
            typeof track.karaoke !== "boolean"
        ) {
            errors.add(
                `${label}.karaoke must be true or false.`,
                "FIELD VALUES",
                {
                    path: `${pathLabel}.karaoke`
                }
            );
        }
    });
}

function validateReleases(
    releases,
    recordLabel,
    recordPath,
    errors,
    objectMetadata
) {
    if (releases === null) {
        return;
    }

    if (!Array.isArray(releases) || releases.length === 0) {
        errors.add(
            `${recordLabel}.releases must be a non-empty array or null.`,
            "FIELD VALUES",
            {
                path: `${recordPath}.releases`
            }
        );
        return;
    }

    releases.forEach((release, index) => {
        const label = `${recordLabel}.releases[${index}]`;
        const pathLabel = (
            `${recordPath}.releases[${index}]`
        );

        if (
            !validateExactFields(
                release,
                RELEASE_FIELDS,
                label,
                errors,
                objectMetadata,
                pathLabel
            )
        ) {
            return;
        }

        [
            "format",
            "label",
            "catalog",
            "edition"
        ].forEach(field => {
            if (Object.hasOwn(release, field)) {
                validateNullableString(
                    release[field],
                    `${label}.${field}`,
                    errors,
                    `${pathLabel}.${field}`
                );
            }
        });

        if (Object.hasOwn(release, "released")) {
            validateNullableReleaseDate(
                release.released,
                `${label}.released`,
                errors,
                `${pathLabel}.released`
            );
        }

        if (
            RELEASE_FIELDS.every(field => {
                return (
                    Object.hasOwn(release, field) &&
                    release[field] === null
                );
            })
        ) {
            errors.add(
                `${label} is empty; use releases: null instead.`,
                "FIELD VALUES",
                {
                    path: pathLabel
                }
            );
        }
    });
}

function getDateBoundary(value, useUpperBoundary) {
    if (typeof value !== "string") {
        return null;
    }

    const match = value.match(
        /^([0-9]{4})(?:\.([0-9]{2})(?:\.([0-9]{2}))?)?$/
    );

    if (!match) {
        return null;
    }

    const year = Number(match[1]);
    const month = match[2] === undefined
        ? useUpperBoundary ? 12 : 1
        : Number(match[2]);
    const leapYear = (
        year % 4 === 0 &&
        (
            year % 100 !== 0 ||
            year % 400 === 0
        )
    );
    const monthLengths = [
        31,
        leapYear ? 29 : 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ];

    if (
        year === 0 ||
        month < 1 ||
        month > 12
    ) {
        return null;
    }

    const day = match[3] === undefined
        ? useUpperBoundary
            ? monthLengths[month - 1]
            : 1
        : Number(match[3]);

    if (
        day < 1 ||
        day > monthLengths[month - 1]
    ) {
        return null;
    }

    return (
        year * 10000 +
        month * 100 +
        day
    );
}

function validateTieups(
    value,
    recordLabel,
    recordPath,
    errors,
    objectMetadata,
    tracks
) {
    if (value === null) {
        return;
    }

    const label = `${recordLabel}.tieup`;
    const pathLabel = `${recordPath}.tieup`;

    if (!Array.isArray(value) || value.length === 0) {
        errors.add(
            `${label} must be a non-empty array of tie-up objects or null.`,
            "FIELD VALUES",
            {
                example: "Use tieup: null when there is no tie-up content.",
                path: pathLabel
            }
        );
        return;
    }

    value.forEach((tieup, index) => {
        const tieupLabel = `${label}[${index}]`;
        const tieupPath = `${pathLabel}[${index}]`;

        if (
            !validateExactFields(
                tieup,
                TIEUP_FIELDS,
                tieupLabel,
                errors,
                objectMetadata,
                tieupPath
            )
        ) {
            return;
        }

        if (Object.hasOwn(tieup, "track")) {
            if (
                !Number.isInteger(tieup.track) ||
                tieup.track < 1
            ) {
                errors.add(
                    `${tieupLabel}.track must be a positive integer.`,
                    "FIELD VALUES",
                    {
                        path: `${tieupPath}.track`
                    }
                );
            } else if (
                Array.isArray(tracks) &&
                tieup.track > tracks.length
            ) {
                errors.add(
                    `${tieupLabel}.track references track ${tieup.track}, but the record only has ${tracks.length} track${tracks.length === 1 ? "" : "s"}.`,
                    "FIELD VALUES",
                    {
                        path: `${tieupPath}.track`
                    }
                );
            }
        }

        if (Object.hasOwn(tieup, "text")) {
            if (
                typeof tieup.text !== "string" ||
                tieup.text.trim().length === 0
            ) {
                errors.add(
                    `${tieupLabel}.text must be a non-empty string; use tieup: null when there is no tie-up content.`,
                    "FIELD VALUES",
                    {
                        path: `${tieupPath}.text`
                    }
                );
            } else {
                validateCleanString(
                    tieup.text,
                    `${tieupLabel}.text`,
                    errors,
                    `${tieupPath}.text`
                );
            }
        }

        if (Object.hasOwn(tieup, "start")) {
            validateDate(
                tieup.start,
                `${tieupLabel}.start`,
                errors,
                `${tieupPath}.start`
            );
        }

        if (Object.hasOwn(tieup, "end")) {
            if (tieup.end !== null) {
                validateDate(
                    tieup.end,
                    `${tieupLabel}.end`,
                    errors,
                    `${tieupPath}.end`
                );
            }
        }

        const startBoundary = getDateBoundary(
            tieup.start,
            false
        );
        const endBoundary = getDateBoundary(
            tieup.end,
            true
        );

        if (
            startBoundary !== null &&
            endBoundary !== null &&
            endBoundary < startBoundary
        ) {
            errors.add(
                `${tieupLabel}.end must not be earlier than start.`,
                "FIELD VALUES",
                {
                    path: `${tieupPath}.end`
                }
            );
        }
    });
}

function validateRelated(
    related,
    recordLabel,
    recordPath,
    errors,
    objectMetadata
) {
    if (related === null) {
        return;
    }

    if (!Array.isArray(related) || related.length === 0) {
        errors.add(
            `${recordLabel}.related must be a non-empty array or null.`,
            "FIELD VALUES",
            {
                path: `${recordPath}.related`
            }
        );
        return;
    }

    related.forEach((link, index) => {
        const label = `${recordLabel}.related[${index}]`;
        const pathLabel = (
            `${recordPath}.related[${index}]`
        );

        if (
            !validateExactFields(
                link,
                RELATED_FIELDS,
                label,
                errors,
                objectMetadata,
                pathLabel
            )
        ) {
            return;
        }

        if (Object.hasOwn(link, "title")) {
            validateCleanString(
                link.title,
                `${label}.title`,
                errors,
                `${pathLabel}.title`
            );
        }

        if (Object.hasOwn(link, "href")) {
            validatePathString(
                link.href,
                `${label}.href`,
                errors,
                `${pathLabel}.href`
            );
        }
    });
}

function validateRecord(
    item,
    index,
    usedIds,
    errors,
    objectMetadata
) {
    const fallbackLabel = `Record #${index + 1}`;
    const recordPath = `SINGLE_DATA[${index}]`;
    const recordLabel = (
        isObject(item) &&
        typeof item.id === "string" &&
        item.id.length > 0
    )
        ? `Record "${item.id}"`
        : fallbackLabel;

    if (
        !validateExactFields(
            item,
            RECORD_FIELDS,
            recordLabel,
            errors,
            objectMetadata,
            recordPath
        )
    ) {
        return;
    }

    if (
        Object.hasOwn(item, "type") &&
        item.type !== "single" &&
        item.type !== "promotional"
    ) {
        errors.add(
            `${recordLabel}.type must be "single" or "promotional".`,
            "FIELD VALUES",
            {
                path: `${recordPath}.type`
            }
        );
    }

    if (Object.hasOwn(item, "id")) {
        if (
            validateCleanString(
                item.id,
                `${recordLabel}.id`,
                errors,
                `${recordPath}.id`
            )
        ) {
            const idPattern = item.type === "promotional"
                ? /^pr[A-Za-z0-9]+$/
                : /^sg[A-Za-z0-9]+$/;

            if (!idPattern.test(item.id)) {
                errors.add(
                    `${recordLabel}.id must use the correct lowercase prefix followed by at least one ASCII letter or number.`,
                    "FIELD VALUES",
                    {
                        path: `${recordPath}.id`
                    }
                );
            }

            if (usedIds.has(item.id)) {
                errors.add(
                    `Duplicate record ID: "${item.id}".`,
                    "DUPLICATE IDS",
                    {
                        example: "Every record must use a different id.",
                        path: `${recordPath}.id`
                    }
                );
            } else {
                usedIds.add(item.id);
            }
        }
    }

    if (Object.hasOwn(item, "order")) {
        validateOrdinal(
            item.order,
            `${recordLabel}.order`,
            errors,
            `${recordPath}.order`
        );
    }

    if (Object.hasOwn(item, "category")) {
        validateNullableString(
            item.category,
            `${recordLabel}.category`,
            errors,
            `${recordPath}.category`
        );
    }

    if (Object.hasOwn(item, "title")) {
        validateCleanString(
            item.title,
            `${recordLabel}.title`,
            errors,
            `${recordPath}.title`
        );
    }

    if (Object.hasOwn(item, "japaneseTitle")) {
        validateNullableString(
            item.japaneseTitle,
            `${recordLabel}.japaneseTitle`,
            errors,
            `${recordPath}.japaneseTitle`
        );
    }

    if (Object.hasOwn(item, "releases")) {
        validateReleases(
            item.releases,
            recordLabel,
            recordPath,
            errors,
            objectMetadata
        );
    }

    if (Object.hasOwn(item, "cover")) {
        validateCover(
            item.cover,
            recordLabel,
            recordPath,
            errors,
            objectMetadata
        );
    }

    if (Object.hasOwn(item, "tracks")) {
        validateTracks(
            item.tracks,
            recordLabel,
            recordPath,
            errors,
            objectMetadata
        );
    }

    if (Object.hasOwn(item, "tieup")) {
        validateTieups(
            item.tieup,
            recordLabel,
            recordPath,
            errors,
            objectMetadata,
            item.tracks
        );
    }

    if (Object.hasOwn(item, "related")) {
        validateRelated(
            item.related,
            recordLabel,
            recordPath,
            errors,
            objectMetadata
        );
    }

}

// DATA FORMATTING

function formatDataString(value) {
    const escapeMap = {
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\v": "\\v"
    };
    let escaped = "";

    for (
        let index = 0;
        index < value.length;
        index += 1
    ) {
        const codePoint = value.codePointAt(index);
        const character = String.fromCodePoint(codePoint);

        if (character === "\\") {
            escaped += "\\\\";
        } else if (character === "\"") {
            escaped += "\\\"";
        } else if (Object.hasOwn(escapeMap, character)) {
            escaped += escapeMap[character];
        } else if (
            codePoint < 0x20 ||
            (
                codePoint >= 0x7F &&
                codePoint <= 0x9F
            ) ||
            codePoint === 0x2028 ||
            codePoint === 0x2029
        ) {
            escaped += (
                "\\u" +
                codePoint
                    .toString(16)
                    .padStart(4, "0")
            );
        } else {
            escaped += character;
        }

        if (codePoint > 0xFFFF) {
            index += 1;
        }
    }

    return `"${escaped}"`;
}

function formatDataValue(
    value,
    depth,
    eol,
    indentationUnit
) {
    if (value === null) {
        return "null";
    }

    if (typeof value === "string") {
        return formatDataString(value);
    }

    if (
        typeof value === "number" ||
        typeof value === "boolean"
    ) {
        return String(value);
    }

    const indentation = indentationUnit.repeat(depth);
    const childIndentation = indentationUnit.repeat(
        depth + 1
    );

    if (Array.isArray(value)) {
        if (value.length === 0) {
            return "[]";
        }

        const separator = depth === 0
            ? `,${eol}${eol}${eol}`
            : `,${eol}`;
        const items = value.map(item => {
            return (
                `${childIndentation}` +
                `${formatDataValue(
                    item,
                    depth + 1,
                    eol,
                    indentationUnit
                )}`
            );
        });

        return (
            `[${eol}${items.join(separator)}${eol}` +
            `${indentation}]`
        );
    }

    const fields = Object.keys(value);

    if (fields.length === 0) {
        return "{}";
    }

    const lines = fields.map(field => {
        return (
            `${childIndentation}${field}: ` +
            `${formatDataValue(
                value[field],
                depth + 1,
                eol,
                indentationUnit
            )}`
        );
    });

    return (
        `{${eol}${lines.join(`,${eol}`)}${eol}` +
        `${indentation}}`
    );
}

function createFieldGuideSource(eol) {
    return [
        "/*",
        ...FIELD_GUIDE,
        "*/"
    ].join(eol);
}

function getPreferredIndentationUnit(source) {
    const lines = source.split(/\r\n|\r|\n/);

    for (const line of lines) {
        const indentation = line.match(/^[ \t]+(?=\S)/);

        if (indentation === null) {
            continue;
        }

        return indentation[0].includes("\t")
            ? "\t"
            : "    ";
    }

    return "\t";
}

function normalizeLeadingIndentation(source, eol) {
    const lines = source.split(eol);
    const normalizedLines = [];

    for (const line of lines) {
        const indentation = line.match(/^[ \t]*/)[0];
        const hasTabs = indentation.includes("\t");
        const hasSpaces = indentation.includes(" ");

        if (
            (hasTabs && hasSpaces) ||
            (
                hasSpaces &&
                indentation.length % 4 !== 0
            )
        ) {
            return null;
        }

        const depth = hasTabs
            ? indentation.length
            : indentation.length / 4;

        normalizedLines.push(
            "\t".repeat(depth) +
            line.slice(indentation.length)
        );
    }

    return normalizedLines.join(eol);
}

function formatDataSource(
    data,
    eol,
    indentationUnit
) {
    const source = [
        createFieldGuideSource(eol),
        "",
        `const SINGLE_DATA = ${formatDataValue(
            data,
            0,
            eol,
            indentationUnit
        )};`,
        ""
    ];

    return source.join(eol);
}

function parseAndValidateData() {
    const source = readUtf8FileStrict(
        DATA_PATH,
        "single_data.js"
    );
    const parsed = new StrictDataParser(source).parse();
    const errors = new ValidationErrors(
        source,
        parsed.valueLocations
    );

    parsed.duplicateFields.forEach(duplicate => {
        errors.add(
            formatDuplicateField(source, duplicate),
            "DATA STRUCTURE",
            {
                example: `Declare "${duplicate.field}" once only.`,
                index: duplicate.duplicateIndex,
                path: (
                    `${duplicate.pathLabel}.` +
                    `${duplicate.field}`
                )
            }
        );
    });

    if (
        !Array.isArray(parsed.data) ||
        parsed.data.length === 0
    ) {
        errors.add(
            "SINGLE_DATA must contain at least one record.",
            "DATA STRUCTURE",
            {
                example: "const SINGLE_DATA = [ { ... } ];",
                path: "SINGLE_DATA"
            }
        );
    } else {
        const usedIds = new Set();

        parsed.data.forEach((item, index) => {
            validateRecord(
                item,
                index,
                usedIds,
                errors,
                parsed.objectMetadata
            );
        });
    }

    if (errors.items.length === 0) {
        const eol = source.includes("\r\n")
            ? "\r\n"
            : "\n";
        const tabFormatted = formatDataSource(
            parsed.data,
            eol,
            "\t"
        );
        const normalizedSource = (
            normalizeLeadingIndentation(
                source,
                eol
            )
        );

        if (
            !process.argv.includes("--format") &&
            normalizedSource !== tabFormatted
        ) {
            errors.add(
                "single_data.js formatting is not canonical. Run node build_single.js --format after fixing all data errors.",
                "DATA FORMAT",
                {
                    example: "Each indentation level must use one tab or four spaces. Do not mix tabs and spaces in the same line indentation. Omit trailing commas and leave exactly two blank lines between records.",
                    path: "SINGLE_DATA"
                }
            );
        }
    }

    return {
        data: parsed.data,
        errors: errors.items,
        source,
        indentationUnit: getPreferredIndentationUnit(
            source
        )
    };
}

// HTML RENDERING

function escapeHTML(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function createTitleHTML(item) {
    const lines = [
        `<b>${escapeHTML(item.title)}</b>`
    ];

    if (item.japaneseTitle !== null) {
        lines.push(escapeHTML(item.japaneseTitle));
    }

    return lines.join("<br>");
}

function createCoverHTML(cover) {
    if (cover === null) {
        return "";
    }

    return (
        `<img src="${escapeHTML(cover.src)}" ` +
        `style="max-width: ${COVER_MAX_SIZE}px; ` +
        `max-height: ${COVER_MAX_SIZE}px;" alt="img">`
    );
}

function createTrackHTML(track, index, tracks) {
    const japaneseTitle = track.japaneseTitle === null
        ? ""
        : `（${escapeHTML(track.japaneseTitle)}）`;
    const credit = track.credit === null
        ? ""
        : `<span class="credit">(${escapeHTML(track.credit)})</span>`;
    const karaoke = track.karaoke === true
        ? `${track.japaneseTitle === null ? " " : ""}(original karaoke)`
        : "";
    const lineBreak = (
        track.credit === null &&
        index < tracks.length - 1
    )
        ? "<br>"
        : "";

    return (
        `${index + 1}. <b>${escapeHTML(track.title)}</b>` +
        `${japaneseTitle}${credit}${karaoke}${lineBreak}`
    );
}

function createTracksHTML(tracks, eol) {
    if (tracks === null) {
        return "";
    }

    return tracks
        .map((track, index) => {
            return createTrackHTML(track, index, tracks);
        })
        .join(`${eol} `);
}

function createReleaseHTML(release) {
    const label = release.label === null
        ? ""
        : escapeHTML(release.label);
    const catalog = release.catalog === null
        ? ""
        : escapeHTML(release.catalog);
    const edition = release.edition === null
        ? ""
        : escapeHTML(release.edition);
    const catalogWithEdition = (
        catalog &&
        edition
    )
        ? `${catalog} (${edition})`
        : catalog;
    const format = release.format === null
        ? ""
        : escapeHTML(release.format);
    const released = release.released === null
        ? ""
        : escapeHTML(release.released);
    const labelCatalog = (
        label &&
        catalogWithEdition
    )
        ? `${label} – ${catalogWithEdition}`
        : label || catalogWithEdition;

    return [
        format,
        labelCatalog,
        released
    ]
        .filter(Boolean)
        .join("<br>");
}

function createReleasesHTML(releases) {
    if (releases === null) {
        return "";
    }

    return releases
        .map(createReleaseHTML)
        .join("<hr>");
}

function createTieupHTML(tieup) {
    if (tieup === null) {
        return "";
    }

    return tieup
        .map(item => {
            const period = item.end === null
                ? item.start
                : `${item.start}–${item.end}`;

            return (
                `• ${escapeHTML(period)}<br>` +
                `${escapeHTML(item.text)} (#${item.track})`
            );
        })
        .join("<br><br>");
}

function createRelatedHTML(related) {
    if (related === null) {
        return "";
    }

    return related
        .map(link => {
            return (
                `<a href="${escapeHTML(link.href)}" ` +
                `target="_blank">${escapeHTML(link.title)}</a>`
            );
        })
        .join("<br>");
}

function getFirstReleased(item) {
    if (
        item.releases === null ||
        item.releases.length === 0
    ) {
        return null;
    }

    let earliestReleased = null;
    let earliestDateKey = Infinity;

    for (const release of item.releases) {
        if (
            release.released === null ||
            UNRELEASED_VALUES.has(release.released)
        ) {
            continue;
        }

        const [
            year,
            month = "00",
            day = "00"
        ] = release.released.split(".");
        const dateKey = Number(`${year}${month}${day}`);

        if (dateKey < earliestDateKey) {
            earliestReleased = release.released;
            earliestDateKey = dateKey;
        }
    }

    return earliestReleased;
}

function createRecordHTML(item, eol) {
    const number = item.id.slice(2);
    const recordName = item.type === "single"
        ? "Single"
        : "Promotional Single";
    const hasCover = item.cover !== null;
    const firstReleased = getFirstReleased(item);
    const hasReleased = firstReleased !== null;
    const rowCount = (
        1 +
        (hasCover ? 2 : 0) +
        (hasReleased ? 1 : 0)
    );
    const rowspan = rowCount > 1
        ? ` rowspan="${rowCount}"`
        : "";
    const order = item.order === null
        ? ""
        : escapeHTML(item.order);
    const title = createTitleHTML(item);
    const cover = createCoverHTML(item.cover);
    const tracks = createTracksHTML(item.tracks, eol);
    const releases = createReleasesHTML(item.releases);
    const tieup = createTieupHTML(item.tieup);
    const related = createRelatedHTML(item.related);

    const rows = [
        `<!--${recordName} ${number}-->`,
        `<tbody id="${escapeHTML(item.id)}">`,
        "<tr>",
        ` <td${rowspan} align="center">${order}</td>`,
        ` <td align="center">${title}</td>`,
        ` <td${rowspan}>${tracks}</td>`,
        ` <td${rowspan}>${releases}</td>`,
        ` <td${rowspan}>${tieup}</td>`,
        ` <td${rowspan}>${related}</td>`,
        "</tr>"
    ];

    if (hasCover) {
        rows.push(
            `<tr><td rowspan="2" align="center">${cover}</td></tr>`,
            "<tr></tr>"
        );
    }

    if (hasReleased) {
        rows.push(
            `<tr><td align="center">${escapeHTML(firstReleased)}</td></tr>`
        );
    }

    rows.push("</tbody>");

    return rows.join(eol);
}

function countOccurrences(value, search) {
    let count = 0;
    let index = 0;

    while (index < value.length) {
        const found = value.indexOf(search, index);

        if (found === -1) {
            break;
        }

        count += 1;
        index = found + search.length;
    }

    return count;
}

function renderOutput(template, data) {
    const placeholderCount = countOccurrences(
        template,
        PLACEHOLDER
    );

    if (placeholderCount !== 1) {
        throw new Error(
            `single_template.html must contain exactly one ${PLACEHOLDER}; found ${placeholderCount}.`
        );
    }

    const placeholderIndex = template.indexOf(PLACEHOLDER);
    const before = template.slice(0, placeholderIndex);
    const after = template.slice(
        placeholderIndex + PLACEHOLDER.length
    );
    const closingHeaderBody = after.match(
        /^(\s*)<\/tbody\s*>/i
    );

    if (!closingHeaderBody) {
        throw new Error(
            `${PLACEHOLDER} must be immediately before the closing tag of the table-header tbody.`
        );
    }

    const eol = template.includes("\r\n")
        ? "\r\n"
        : "\n";
    const rowsHTML = data
        .map(item => createRecordHTML(item, eol))
        .join(`${eol}${eol}${eol}`);
    const remainder = after.slice(
        closingHeaderBody[0].length
    );

    return (
        `${before}</tbody>${eol}${eol}` +
        `${rowsHTML}${remainder}`
    );
}

// HTML VALIDATION

class HtmlSyntaxError extends Error {
    constructor(source, index, message) {
        super(`${message} (${formatLocation(source, index)}).`);
        this.name = "HtmlSyntaxError";
    }
}

function validateEntities(source, offset, value) {
    let index = 0;

    while (index < value.length) {
        const ampersand = value.indexOf("&", index);

        if (ampersand === -1) {
            return;
        }

        const entity = value
            .slice(ampersand)
            .match(
                /^&(?:(#)([0-9]+)|(#x)([0-9A-Fa-f]+)|([A-Za-z][A-Za-z0-9]+));/
            );

        if (!entity) {
            throw new HtmlSyntaxError(
                source,
                offset + ampersand,
                'Raw "&" must be escaped as an HTML entity'
            );
        }

        if (
            entity[5] &&
            !ALLOWED_HTML_ENTITIES.has(entity[5])
        ) {
            throw new HtmlSyntaxError(
                source,
                offset + ampersand,
                `Unsupported HTML entity "&${entity[5]};"`
            );
        }

        if (entity[1] || entity[3]) {
            const codePoint = entity[1]
                ? Number(entity[2])
                : Number.parseInt(entity[4], 16);

            if (
                !Number.isSafeInteger(codePoint) ||
                codePoint <= 0 ||
                codePoint > 0x10FFFF ||
                (
                    codePoint >= 0xD800 &&
                    codePoint <= 0xDFFF
                )
            ) {
                throw new HtmlSyntaxError(
                    source,
                    offset + ampersand,
                    "HTML numeric entity contains an invalid Unicode code point"
                );
            }
        }

        index = ampersand + entity[0].length;
    }
}

function decodeAttributeValue(value) {
    return value.replace(
        /&(?:#([0-9]+)|#x([0-9A-Fa-f]+)|(amp|lt|gt|quot|apos|nbsp));/g,
        (match, decimal, hexadecimal, named) => {
            if (decimal) {
                return String.fromCodePoint(Number(decimal));
            }

            if (hexadecimal) {
                return String.fromCodePoint(
                    Number.parseInt(hexadecimal, 16)
                );
            }

            return {
                amp: "&",
                lt: "<",
                gt: ">",
                quot: "\"",
                apos: "'",
                nbsp: "\u00A0"
            }[named];
        }
    );
}

class StrictHtmlValidator {
    constructor(source, expectedRecordIds) {
        this.source = source;
        this.lowerSource = source.toLowerCase();
        this.expectedRecordIds = expectedRecordIds;
        this.index = 0;
        this.stack = [];
        this.elementCounts = new Map();
        this.firstElementIndexes = new Map();
        this.doctypeCount = 0;
        this.ids = new Set();
        this.recordIds = [];
        this.tableSections = [];
        this.currentTableSection = null;
        this.currentTableRow = null;
    }

    validate() {
        if (this.source.includes("\0")) {
            this.fail(
                this.source.indexOf("\0"),
                "HTML contains a null byte"
            );
        }

        if (this.source.includes(PLACEHOLDER)) {
            this.fail(
                this.source.indexOf(PLACEHOLDER),
                "Generated HTML still contains the template placeholder"
            );
        }

        while (this.index < this.source.length) {
            const current = this.stack[this.stack.length - 1];

            if (
                current &&
                RAW_TEXT_ELEMENTS.has(current.name) &&
                !this.lowerSource.startsWith(
                    `</${current.name}`,
                    this.index
                )
            ) {
                const closing = this.lowerSource.indexOf(
                    `</${current.name}`,
                    this.index
                );

                if (closing === -1) {
                    this.fail(
                        current.index,
                        `<${current.name}> is not closed`
                    );
                }

                this.index = closing;
                continue;
            }

            if (this.source[this.index] !== "<") {
                this.parseText();
                continue;
            }

            if (this.source.startsWith("<!--", this.index)) {
                this.parseComment();
                continue;
            }

            if (
                this.lowerSource.startsWith(
                    "<!doctype",
                    this.index
                )
            ) {
                this.parseDoctype();
                continue;
            }

            if (this.source.startsWith("</", this.index)) {
                this.parseEndTag();
                continue;
            }

            if (this.source.startsWith("<!", this.index)) {
                this.fail(
                    this.index,
                    "Unsupported HTML declaration"
                );
            }

            this.parseStartTag();
        }

        if (this.stack.length > 0) {
            const unclosed = this.stack[this.stack.length - 1];
            this.fail(
                unclosed.index,
                `<${unclosed.name}> is not closed`
            );
        }

        if (this.doctypeCount !== 1) {
            this.fail(
                0,
                "Generated HTML must contain exactly one doctype"
            );
        }

        [
            "html",
            "head",
            "body",
            "title",
            "table"
        ].forEach(name => {
            if ((this.elementCounts.get(name) || 0) !== 1) {
                this.fail(
                    0,
                    `Generated HTML must contain exactly one <${name}> element`
                );
            }
        });

        if (
            this.firstElementIndexes.get("head") >
            this.firstElementIndexes.get("body")
        ) {
            this.fail(
                this.firstElementIndexes.get("body"),
                "<head> must appear before <body>"
            );
        }

        if (
            this.recordIds.length !== this.expectedRecordIds.length ||
            this.recordIds.some((id, index) => {
                return id !== this.expectedRecordIds[index];
            })
        ) {
            this.fail(
                0,
                "Generated tbody IDs are missing, duplicated, or out of data order"
            );
        }

        this.validateTableGrid();

        return this;
    }

    parseText() {
        const start = this.index;
        const nextTag = this.source.indexOf("<", start);
        const end = nextTag === -1
            ? this.source.length
            : nextTag;
        const text = this.source.slice(start, end);
        const parent = this.stack.length > 0
            ? this.stack[this.stack.length - 1].name
            : null;

        if (
            this.stack.length === 0 &&
            text.trim().length > 0
        ) {
            this.fail(
                start,
                "Text is not allowed outside the root HTML element"
            );
        }

        if (
            text.trim().length > 0 &&
            [
                "html",
                "head",
                "table",
                "thead",
                "tbody",
                "tfoot",
                "tr"
            ].includes(parent)
        ) {
            this.fail(
                start,
                `Text is not allowed directly inside <${parent}>`
            );
        }

        validateEntities(this.source, start, text);
        this.index = end;
    }

    parseComment() {
        const start = this.index;
        const end = this.source.indexOf(
            "-->",
            start + 4
        );

        if (end === -1) {
            this.fail(start, "HTML comment is not closed");
        }

        const content = this.source.slice(start + 4, end);

        if (content.includes("--")) {
            this.fail(
                start,
                'HTML comments must not contain "--"'
            );
        }

        this.index = end + 3;
    }

    parseDoctype() {
        const start = this.index;
        const boundary = this.source[
            start + "<!doctype".length
        ];

        if (
            this.stack.length > 0 ||
            this.doctypeCount > 0 ||
            this.source.slice(0, start).trim().length > 0
        ) {
            this.fail(
                start,
                "Doctype must appear once at the beginning"
            );
        }

        if (!/[\t\n\f\r ]/.test(boundary)) {
            this.fail(start, "Invalid doctype syntax");
        }

        this.index = this.findTagEnd(start + 2) + 1;
        this.doctypeCount += 1;
    }

    parseStartTag() {
        const start = this.index;
        let cursor = start + 1;

        if (!/[A-Za-z]/.test(this.source[cursor])) {
            this.fail(start, "Invalid HTML start tag");
        }

        const nameStart = cursor;

        while (/[A-Za-z0-9:-]/.test(this.source[cursor])) {
            cursor += 1;
        }

        const name = this.source
            .slice(nameStart, cursor)
            .toLowerCase();
        const attributes = new Map();
        let selfClosing = false;
        let tagClosed = false;

        while (cursor < this.source.length) {
            const beforeWhitespace = cursor;
            cursor = this.skipHtmlWhitespace(cursor);
            const hadWhitespace = cursor > beforeWhitespace;

            if (this.source[cursor] === ">") {
                cursor += 1;
                tagClosed = true;
                break;
            }

            if (
                this.source[cursor] === "/" &&
                this.source[cursor + 1] === ">"
            ) {
                selfClosing = true;
                cursor += 2;
                tagClosed = true;
                break;
            }

            if (!hadWhitespace) {
                this.fail(
                    cursor,
                    `Attributes in <${name}> must be separated by whitespace`
                );
            }

            const attributeStart = cursor;

            while (
                cursor < this.source.length &&
                !/[\s"'<>/=]/.test(this.source[cursor])
            ) {
                cursor += 1;
            }

            if (cursor === attributeStart) {
                this.fail(
                    cursor,
                    `Invalid attribute in <${name}>`
                );
            }

            const attributeName = this.source
                .slice(attributeStart, cursor)
                .toLowerCase();

            if (attributes.has(attributeName)) {
                this.fail(
                    attributeStart,
                    `<${name}> contains duplicate attribute "${attributeName}"`
                );
            }

            cursor = this.skipHtmlWhitespace(cursor);

            let attributeValue = null;

            if (this.source[cursor] === "=") {
                cursor += 1;
                cursor = this.skipHtmlWhitespace(cursor);

                const quote = this.source[cursor];

                if (
                    quote !== "\"" &&
                    quote !== "'"
                ) {
                    this.fail(
                        cursor,
                        `<${name}> attribute "${attributeName}" must use a quoted value`
                    );
                }

                const valueStart = cursor + 1;
                const valueEnd = this.source.indexOf(
                    quote,
                    valueStart
                );

                if (valueEnd === -1) {
                    this.fail(
                        cursor,
                        `<${name}> attribute "${attributeName}" is not closed`
                    );
                }

                attributeValue = this.source.slice(
                    valueStart,
                    valueEnd
                );

                if (attributeValue.includes("<")) {
                    this.fail(
                        valueStart,
                        `<${name}> attribute "${attributeName}" contains a raw "<"`
                    );
                }

                validateEntities(
                    this.source,
                    valueStart,
                    attributeValue
                );
                cursor = valueEnd + 1;
            }

            attributes.set(attributeName, attributeValue);
        }

        if (!tagClosed) {
            this.fail(start, `<${name}> is not closed`);
        }

        if (
            selfClosing &&
            !VOID_ELEMENTS.has(name)
        ) {
            this.fail(
                start,
                `Non-void element <${name}> must not be self-closing`
            );
        }

        this.validateParent(name, start);
        this.registerElement(name, attributes, start);
        this.index = cursor;

        if (
            !selfClosing &&
            !VOID_ELEMENTS.has(name)
        ) {
            this.stack.push({
                name,
                index: start
            });
        }
    }

    parseEndTag() {
        const start = this.index;
        let cursor = start + 2;

        if (!/[A-Za-z]/.test(this.source[cursor])) {
            this.fail(start, "Invalid HTML end tag");
        }

        const nameStart = cursor;

        while (/[A-Za-z0-9:-]/.test(this.source[cursor])) {
            cursor += 1;
        }

        const name = this.source
            .slice(nameStart, cursor)
            .toLowerCase();

        cursor = this.skipHtmlWhitespace(cursor);

        if (this.source[cursor] !== ">") {
            this.fail(
                cursor,
                `Invalid closing syntax for </${name}>`
            );
        }

        if (VOID_ELEMENTS.has(name)) {
            this.fail(
                start,
                `Void element <${name}> must not have an end tag`
            );
        }

        const current = this.stack[this.stack.length - 1];

        if (!current || current.name !== name) {
            const expected = current
                ? `</${current.name}>`
                : "no closing tag";

            this.fail(
                start,
                `Unexpected </${name}>; expected ${expected}`
            );
        }

        this.stack.pop();

        if (name === "tr") {
            this.currentTableRow = null;
        }

        if (name === "tbody") {
            this.currentTableSection = null;
        }

        this.index = cursor + 1;
    }

    validateParent(name, index) {
        const parent = this.stack.length > 0
            ? this.stack[this.stack.length - 1].name
            : null;
        const requiredParents = {
            head: ["html"],
            body: ["html"],
            title: ["head"],
            style: ["head"],
            meta: ["head"],
            tbody: ["table"],
            tr: ["tbody"],
            td: ["tr"],
            th: ["tr"]
        };
        const allowedChildren = {
            html: new Set([
                "head",
                "body"
            ]),
            head: new Set([
                "base",
                "link",
                "meta",
                "noscript",
                "script",
                "style",
                "title"
            ]),
            table: new Set([
                "caption",
                "colgroup",
                "thead",
                "tbody",
                "tfoot"
            ]),
            thead: new Set(["tr"]),
            tbody: new Set(["tr"]),
            tfoot: new Set(["tr"]),
            tr: new Set([
                "td",
                "th"
            ])
        };

        if (
            Object.hasOwn(requiredParents, name) &&
            !requiredParents[name].includes(parent)
        ) {
            this.fail(
                index,
                `<${name}> must be a direct child of ${requiredParents[name].map(parentName => `<${parentName}>`).join(" or ")}`
            );
        }

        if (name === "html" && parent !== null) {
            this.fail(index, "<html> must be the root element");
        }

        if (parent === null && name !== "html") {
            this.fail(
                index,
                `<${name}> is not allowed outside <html>`
            );
        }

        if (
            parent &&
            Object.hasOwn(allowedChildren, parent) &&
            !allowedChildren[parent].has(name)
        ) {
            this.fail(
                index,
                `<${name}> is not allowed directly inside <${parent}>`
            );
        }
    }

    registerElement(name, attributes, index) {
        this.elementCounts.set(
            name,
            (this.elementCounts.get(name) || 0) + 1
        );

        if (!this.firstElementIndexes.has(name)) {
            this.firstElementIndexes.set(name, index);
        }

        [
            "rowspan",
            "colspan"
        ].forEach(attributeName => {
            if (!attributes.has(attributeName)) {
                return;
            }

            if (
                name !== "td" &&
                name !== "th"
            ) {
                this.fail(
                    index,
                    `${attributeName} is only allowed on <td> or <th>`
                );
            }

            const rawValue = attributes.get(attributeName);

            if (rawValue === null) {
                this.fail(
                    index,
                    `<${name}> ${attributeName} must have a value`
                );
            }

            const value = decodeAttributeValue(rawValue);
            const number = Number(value);

            if (
                !/^[1-9][0-9]*$/.test(value) ||
                !Number.isSafeInteger(number)
            ) {
                this.fail(
                    index,
                    `<${name}> ${attributeName} must be a positive integer`
                );
            }
        });

        let decodedId = null;

        if (attributes.has("id")) {
            const rawId = attributes.get("id");

            if (rawId === null) {
                this.fail(
                    index,
                    `<${name}> id must have a value`
                );
            }

            const id = decodeAttributeValue(rawId);
            decodedId = id;

            if (
                id.length === 0 ||
                /\s/.test(id)
            ) {
                this.fail(
                    index,
                    `<${name}> contains an invalid id`
                );
            }

            if (this.ids.has(id)) {
                this.fail(
                    index,
                    `Duplicate HTML id "${id}"`
                );
            }

            this.ids.add(id);

            if (name === "tbody") {
                this.recordIds.push(id);
            }
        }

        if (name === "tbody") {
            this.currentTableSection = {
                id: decodedId,
                index,
                rows: []
            };
            this.currentTableRow = null;
            this.tableSections.push(
                this.currentTableSection
            );
            return;
        }

        if (name === "tr") {
            this.currentTableRow = {
                index,
                cells: []
            };
            this.currentTableSection.rows.push(
                this.currentTableRow
            );
            return;
        }

        if (
            name === "td" ||
            name === "th"
        ) {
            const rowspan = attributes.has("rowspan")
                ? Number(
                    decodeAttributeValue(
                        attributes.get("rowspan")
                    )
                )
                : 1;
            const colspan = attributes.has("colspan")
                ? Number(
                    decodeAttributeValue(
                        attributes.get("colspan")
                    )
                )
                : 1;

            this.currentTableRow.cells.push({
                colspan,
                index,
                rowspan
            });
        }
    }

    validateTableGrid() {
        let expectedWidth = null;

        this.tableSections.forEach(section => {
            if (section.rows.length === 0) {
                this.fail(
                    section.index,
                    "<tbody> must contain at least one table row"
                );
            }

            const occupied = section.rows.map(() => {
                return new Set();
            });

            section.rows.forEach((row, rowIndex) => {
                let column = 0;

                row.cells.forEach(cell => {
                    while (occupied[rowIndex].has(column)) {
                        column += 1;
                    }

                    for (
                        let rowOffset = 0;
                        rowOffset < cell.rowspan;
                        rowOffset += 1
                    ) {
                        const targetRow = rowIndex + rowOffset;

                        if (targetRow >= section.rows.length) {
                            this.fail(
                                cell.index,
                                "A table-cell rowspan extends beyond its tbody"
                            );
                        }

                        for (
                            let columnOffset = 0;
                            columnOffset < cell.colspan;
                            columnOffset += 1
                        ) {
                            const targetColumn = (
                                column + columnOffset
                            );

                            if (
                                occupied[targetRow].has(
                                    targetColumn
                                )
                            ) {
                                this.fail(
                                    cell.index,
                                    "Table cells overlap because of rowspan or colspan"
                                );
                            }

                            occupied[targetRow].add(
                                targetColumn
                            );
                        }
                    }

                    column += cell.colspan;
                });
            });

            const widths = occupied.map((columns, rowIndex) => {
                if (columns.size === 0) {
                    this.fail(
                        section.rows[rowIndex].index,
                        "A table row has no cells and is not covered by rowspans"
                    );
                }

                const width = Math.max(...columns) + 1;

                for (
                    let column = 0;
                    column < width;
                    column += 1
                ) {
                    if (!columns.has(column)) {
                        this.fail(
                            section.rows[rowIndex].index,
                            "A table row contains an uncovered column gap"
                        );
                    }
                }

                return width;
            });
            const sectionWidth = widths[0];

            if (
                widths.some(width => {
                    return width !== sectionWidth;
                })
            ) {
                this.fail(
                    section.index,
                    "Rows inside one tbody do not have a consistent column count"
                );
            }

            if (expectedWidth === null) {
                expectedWidth = sectionWidth;
            } else if (sectionWidth !== expectedWidth) {
                this.fail(
                    section.index,
                    `This tbody has ${sectionWidth} columns; expected ${expectedWidth}`
                );
            }
        });
    }

    findTagEnd(start) {
        let quote = null;

        for (
            let cursor = start;
            cursor < this.source.length;
            cursor += 1
        ) {
            const character = this.source[cursor];

            if (quote !== null) {
                if (character === quote) {
                    quote = null;
                }

                continue;
            }

            if (
                character === "\"" ||
                character === "'"
            ) {
                quote = character;
                continue;
            }

            if (character === ">") {
                return cursor;
            }
        }

        this.fail(start, "HTML declaration is not closed");
    }

    skipHtmlWhitespace(index) {
        while (/[\t\n\f\r ]/.test(this.source[index])) {
            index += 1;
        }

        return index;
    }

    fail(index, message) {
        throw new HtmlSyntaxError(
            this.source,
            index,
            message
        );
    }
}

function validateCssFragment(
    source,
    value,
    offset,
    label
) {
    const stack = [];
    let quote = null;
    let quoteIndex = -1;
    let inComment = false;
    let commentIndex = -1;

    for (
        let index = 0;
        index < value.length;
        index += 1
    ) {
        const character = value[index];
        const next = value[index + 1];

        if (inComment) {
            if (
                character === "*" &&
                next === "/"
            ) {
                inComment = false;
                index += 1;
            }

            continue;
        }

        if (quote !== null) {
            if (character === "\\") {
                index += 1;
                continue;
            }

            if (character === quote) {
                quote = null;
            }

            continue;
        }

        if (
            character === "/" &&
            next === "*"
        ) {
            inComment = true;
            commentIndex = index;
            index += 1;
            continue;
        }

        if (
            character === "*" &&
            next === "/"
        ) {
            throw new HtmlSyntaxError(
                source,
                offset + index,
                `${label} contains an unexpected CSS comment terminator`
            );
        }

        if (
            character === "\"" ||
            character === "'"
        ) {
            quote = character;
            quoteIndex = index;
            continue;
        }

        if (
            character === "{" ||
            character === "(" ||
            character === "["
        ) {
            stack.push({
                character,
                index
            });
            continue;
        }

        if (
            character === "}" ||
            character === ")" ||
            character === "]"
        ) {
            const expectedOpening = {
                "}": "{",
                ")": "(",
                "]": "["
            }[character];
            const opening = stack.pop();

            if (
                !opening ||
                opening.character !== expectedOpening
            ) {
                throw new HtmlSyntaxError(
                    source,
                    offset + index,
                    `${label} contains an unmatched "${character}"`
                );
            }
        }
    }

    if (inComment) {
        throw new HtmlSyntaxError(
            source,
            offset + commentIndex,
            `${label} contains an unclosed CSS comment`
        );
    }

    if (quote !== null) {
        throw new HtmlSyntaxError(
            source,
            offset + quoteIndex,
            `${label} contains an unclosed CSS string`
        );
    }

    if (stack.length > 0) {
        const opening = stack[stack.length - 1];

        throw new HtmlSyntaxError(
            source,
            offset + opening.index,
            `${label} contains an unclosed "${opening.character}"`
        );
    }
}

function validateCssSyntax(source) {
    const stylePattern =
        /<style\b[^>]*>([\s\S]*?)<\/style\s*>/gi;
    let styleMatch = stylePattern.exec(source);

    while (styleMatch) {
        const contentOffset = (
            styleMatch.index +
            styleMatch[0].indexOf(styleMatch[1])
        );

        validateCssFragment(
            source,
            styleMatch[1],
            contentOffset,
            "<style>"
        );
        styleMatch = stylePattern.exec(source);
    }

    const attributePattern =
        /\sstyle=(["'])([\s\S]*?)\1/gi;
    let attributeMatch = attributePattern.exec(source);

    while (attributeMatch) {
        const valueOffset = (
            attributeMatch.index +
            attributeMatch[0].indexOf(
                attributeMatch[2]
            )
        );

        validateCssFragment(
            source,
            decodeAttributeValue(
                attributeMatch[2]
            ),
            valueOffset,
            "style attribute"
        );
        attributeMatch = attributePattern.exec(source);
    }
}

function validateRecordTableLayout(
    output,
    validator,
    data
) {
    const sections = new Map(
        validator.tableSections
            .filter(section => {
                return section.id !== null;
            })
            .map(section => {
                return [
                    section.id,
                    section
                ];
            })
    );

    data.forEach(item => {
        const section = sections.get(item.id);
        const hasCover = item.cover !== null;
        const hasReleased = getFirstReleased(item) !== null;
        const expectedRows = (
            1 +
            (hasCover ? 2 : 0) +
            (hasReleased ? 1 : 0)
        );

        if (section.rows.length !== expectedRows) {
            throw new HtmlSyntaxError(
                output,
                section.index,
                `Record "${item.id}" has ${section.rows.length} rows; expected ${expectedRows}`
            );
        }

        const firstRow = section.rows[0];

        if (firstRow.cells.length !== 6) {
            throw new HtmlSyntaxError(
                output,
                firstRow.index,
                `Record "${item.id}" must contain six cells in its first row`
            );
        }

        firstRow.cells.forEach((cell, index) => {
            const expectedRowspan = index === 1
                ? 1
                : expectedRows;

            if (cell.rowspan !== expectedRowspan) {
                throw new HtmlSyntaxError(
                    output,
                    cell.index,
                    `Record "${item.id}" contains an incorrect rowspan`
                );
            }
        });

        let nextRow = 1;

        if (hasCover) {
            const coverRow = section.rows[nextRow];
            const spacerRow = section.rows[nextRow + 1];

            if (
                coverRow.cells.length !== 1 ||
                coverRow.cells[0].rowspan !== 2 ||
                spacerRow.cells.length !== 0
            ) {
                throw new HtmlSyntaxError(
                    output,
                    coverRow.index,
                    `Record "${item.id}" contains an invalid cover-row structure`
                );
            }

            nextRow += 2;
        }

        if (hasReleased) {
            const releasedRow = section.rows[nextRow];

            if (
                releasedRow.cells.length !== 1 ||
                releasedRow.cells[0].rowspan !== 1
            ) {
                throw new HtmlSyntaxError(
                    output,
                    releasedRow.index,
                    `Record "${item.id}" contains an invalid First Released row`
                );
            }
        }
    });
}

function validateGeneratedHTML(output, data) {
    const expectedRecordIds = data.map(item => item.id);
    validateCssSyntax(output);
    const validator = new StrictHtmlValidator(
        output,
        expectedRecordIds
    ).validate();

    validateRecordTableLayout(
        output,
        validator,
        data
    );
}

// BUILD

class BuildIssues {
    constructor() {
        this.groups = new Map();
    }

    add(group, message) {
        if (!this.groups.has(group)) {
            this.groups.set(group, []);
        }

        this.groups.get(group).push(message);
    }

    addValidationErrors(items) {
        items.forEach(item => {
            this.add(
                item.group,
                item.message
            );
        });
    }

    hasAny() {
        return this.groups.size > 0;
    }

    throwIfAny() {
        if (!this.hasAny()) {
            return;
        }

        const count = [
            ...this.groups.values()
        ].reduce((total, items) => {
            return total + items.length;
        }, 0);
        const sections = [];

        this.groups.forEach((items, group) => {
            sections.push(
                `[${group}]`,
                ...items.map((item, index) => {
                    return `${index + 1}. ${item}`;
                })
            );
        });

        throw new Error(
            `Validation failed with ${count} error${count === 1 ? "" : "s"}:\n\n${sections.join("\n")}`
        );
    }
}

function writeFileAtomically(filePath, content) {
    const temporaryPath = (
        `${filePath}.tmp-${process.pid}-` +
        `${Date.now()}-${Math.random().toString(16).slice(2)}`
    );
    let descriptor = null;

    try {
        descriptor = fs.openSync(
            temporaryPath,
            "wx",
            0o666
        );
        fs.writeFileSync(
            descriptor,
            content,
            "utf8"
        );
        fs.fsyncSync(descriptor);
        fs.closeSync(descriptor);
        descriptor = null;
        fs.renameSync(temporaryPath, filePath);
    } finally {
        if (descriptor !== null) {
            fs.closeSync(descriptor);
        }

        if (fs.existsSync(temporaryPath)) {
            fs.unlinkSync(temporaryPath);
        }
    }
}

function getBuildOptions() {
    const argumentsList = process.argv.slice(2);

    if (
        argumentsList.length === 0
    ) {
        return {
            format: false
        };
    }

    if (
        argumentsList.length === 1 &&
        argumentsList[0] === "--format"
    ) {
        return {
            format: true
        };
    }

    throw new Error(
        "Unknown command. Use node build_single.js or node build_single.js --format."
    );
}

function buildSingleHTML() {
    const options = getBuildOptions();
    const issues = new BuildIssues();
    let dataResult = null;
    let template = null;
    let templateIsValid = false;
    let output = null;

    try {
        dataResult = parseAndValidateData();
        issues.addValidationErrors(
            dataResult.errors
        );
    } catch (error) {
        issues.add(
            "DATA SYNTAX",
            (
                `single_data.js — ${error.message}\n` +
                "   Correct outer form: const SINGLE_DATA = [ ... ];"
            )
        );
    }

    try {
        template = readUtf8FileStrict(
            TEMPLATE_PATH,
            "single_template.html"
        );
        const templatePreview = renderOutput(
            template,
            []
        );

        validateGeneratedHTML(
            templatePreview,
            []
        );
        templateIsValid = true;
    } catch (error) {
        issues.add(
            "TEMPLATE HTML",
            `single_template.html — ${error.message}`
        );
    }

    const dataCanRender = (
        dataResult !== null &&
        dataResult.errors.every(item => {
            return item.group === "DATA FORMAT";
        })
    );

    if (
        dataCanRender &&
        templateIsValid
    ) {
        try {
            output = renderOutput(
                template,
                dataResult.data
            );
            validateGeneratedHTML(
                output,
                dataResult.data
            );
        } catch (error) {
            issues.add(
                "GENERATED HTML",
                `single.html — ${error.message}`
            );
        }
    }

    issues.throwIfAny();

    if (options.format) {
        const eol = dataResult.source.includes("\r\n")
            ? "\r\n"
            : "\n";
        const formattedSource = formatDataSource(
            dataResult.data,
            eol,
            dataResult.indentationUnit
        );

        if (formattedSource !== dataResult.source) {
            writeFileAtomically(
                DATA_PATH,
                formattedSource
            );
        }
    }

    writeFileAtomically(
        OUTPUT_PATH,
        output
    );

    const singleCount = dataResult.data.filter(item => {
        return item.type === "single";
    }).length;
    const promotionalCount = (
        dataResult.data.length -
        singleCount
    );

    console.log(
        `Built single.html from ${singleCount} singles and ${promotionalCount} promotional releases.`
    );
}

try {
    buildSingleHTML();
} catch (error) {
    console.error(`Build failed.\n${error.message}`);
    process.exitCode = 1;
}
