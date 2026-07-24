const TIMELINE_TYPE_CONFIG = {
    single: {
        page: "single.html",
        folder: "sg",
        thumbFolder: "sg-tl-thumb"
    },
    album: {
        page: "album.html",
        folder: "al",
        thumbFolder: "al-tl-thumb"
    }
};

const TIMELINE_DATA = [
    {
        year: 1991,
        slots: [
            {
                id: "sg01",
                type: "single",
                order: "1st Single",
                title: "Good-bye My Loneliness",
                released: "1991.02.10",
                label: "PODH-1029",
                tieup: "\"Kekkon no Risou to Genjitsu\" Theme Song"
            },
            {
                id: "al01",
                type: "album",
                order: "1st Album",
                title: "Good-bye My Loneliness",
                released: "1991.03.27",
                label: "POCH-1082"
            },
            {
                id: "sg02",
                type: "single",
                order: "2nd Single",
                title: "Fushigi ne...",
                released: "1991.06.25",
                label: "PODH-1040",
                tieup: "\"Magical Zunou Power!!\" Theme Song"
            },
            {
                id: "sg03",
                type: "single",
                order: "3rd Single",
                title: "Mou Sagasanai",
                released: "1991.11.06",
                label: "PODH-1060",
                tieup: "\"Shichinin no Onna Bengoshi Season 2\" Theme Song"
            },
            {
                id: "al02",
                type: "album",
                order: "2nd Album",
                title: "Mou Sagasanai",
                released: "1991.12.25",
                label: "POCH-1111"
            }
        ]
    },
    {
        year: 1992,
        slots: [
            {
                id: "sg04",
                type: "single",
                order: "4th Single",
                title: "Nemurenai Yoru wo Daite",
                released: "1992.08.05",
                label: "PODH-1087",
                tieup: "\"Tonight\" Ending Theme"
            },
            null
        ]
    },
    {
        year: 1993,
        slots: [null, null, null, null]
    },
    {
        year: 1994,
        slots: [null, null, null, null]
    },
    {
        year: 1995,
        slots: [null, null, null, null]
    },
    {
        year: 1996,
        slots: [null, null, null, null]
    },
    {
        year: 1997,
        slots: [null, null, null, null]
    },
    {
        year: 1998,
        slots: [null, null, null, null]
    },
    {
        year: 1999,
        slots: [null, null, null, null]
    },
    {
        year: 2000,
        slots: [null, null, null, null]
    },
    {
        year: 2001,
        slots: [null, null, null, null]
    },
    {
        year: 2002,
        slots: [null, null, null, null]
    },
    {
        year: 2003,
        slots: [null, null, null, null]
    },
    {
        year: 2004,
        slots: [null, null, null, null]
    },
    {
        year: 2005,
        slots: [null, null, null, null]
    },
    {
        year: 2006,
        slots: [null, null, null, null]
    },
    {
        year: 2007,
        slots: [null, null, null, null]
    },
    {
        year: 2008,
        slots: [null, null, null, null]
    },
    {
        year: 2009,
        slots: [null, null, null, null]
    },
    {
        year: 2010,
        slots: [null, null, null, null]
    },
    {
        year: 2011,
        slots: [null, null, null, null]
    },
    {
        year: 2012,
        slots: [null, null, null, null]
    },
    {
        year: 2013,
        slots: [null, null, null, null]
    },
    {
        year: 2014,
        slots: [null, null, null, null]
    },
    {
        year: 2015,
        slots: [null, null, null, null]
    },
    {
        year: 2016,
        slots: [null, null, null, null]
    },
    {
        year: 2017,
        slots: [null, null, null, null]
    },
    {
        year: 2018,
        slots: [null, null, null, null]
    },
    {
        year: 2019,
        slots: [null, null, null, null]
    },
    {
        year: 2020,
        slots: [null, null, null, null]
    },
    {
        year: 2021,
        slots: [null, null, null, null]
    },
    {
        year: 2022,
        slots: [null, null, null, null]
    },
    {
        year: 2023,
        slots: [null, null, null, null]
    },
    {
        year: 2024,
        slots: [null, null, null, null]
    },
    {
        year: 2025,
        slots: [null, null, null, null]
    },
    {
        year: 2026,
        slots: [null, null, null, null]
    }
];

function escapeTimelineHTML(value) {
    const entities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#39;"
    };

    return String(value).replace(/[&<>"']/g, character => entities[character]);
}

function createTimelineNodeHTML(item) {
    if (item === null) {
        return '<div class="tl-node empty"></div>';
    }

    const config = TIMELINE_TYPE_CONFIG[item.type];

    if (!config) {
        throw new Error(`Unsupported timeline type: ${item.type}`);
    }

    const requiredFields = ["id", "type", "order", "title", "released", "label"];
    const missingFields = requiredFields.filter(field => !item[field]);

    if (missingFields.length > 0) {
        throw new Error(`Timeline item "${item.id || "unknown"}" is missing: ${missingFields.join(", ")}`);
    }

    const id = escapeTimelineHTML(item.id);
    const type = escapeTimelineHTML(item.type);
    const order = escapeTimelineHTML(item.order);
    const title = escapeTimelineHTML(item.title);
    const released = escapeTimelineHTML(item.released);
    const label = escapeTimelineHTML(item.label);
    const href = escapeTimelineHTML(item.href || `${config.page}#${item.id}`);
    const cover = escapeTimelineHTML(
        item.cover || `assets/disc-photo/${config.folder}/${item.id}.jpg`
    );
    const thumb = escapeTimelineHTML(
        item.thumb ||
        `assets/disc-photo/${config.folder}/${config.thumbFolder}/${item.id}.jpg`
    );
    const tieupAttribute = item.tieup
        ? ` data-tieup="${escapeTimelineHTML(item.tieup)}"`
        : "";

    return `<a href="${href}" class="tl-node" draggable="false" data-type="${type}" data-thumb="${cover}" data-title="${order}" data-sub="${title}" data-released="${released}" data-label="${label}"${tieupAttribute}><img src="${thumb}" draggable="false"></a>`;
}

function createTimelineColumnHTML(column) {
    const nodesHTML = column.slots
        .map(createTimelineNodeHTML)
        .join("");

    return `<div class="tl-col"><div class="tl-year-text">${escapeTimelineHTML(column.year)}</div><div class="tl-nodes-container">${nodesHTML}</div></div>`;
}

function buildTimelineHTML(data) {
    const columnsHTML = data
        .map(createTimelineColumnHTML)
        .join("");

    return `<div class="tl-grid">${columnsHTML}</div>`;
}

const TIMELINE_HTML = buildTimelineHTML(TIMELINE_DATA);