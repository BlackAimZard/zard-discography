/*
1. type
2. id
3. order
4. category
5. title
6. japaneseTitle
7. releases
8. cover
9. tracks
10. related
*/

const ALBUM_DATA = [
    {
        type: "album",
        id: "al01",
        order: "1st",
        category: null,
        title: "Good-bye My Loneliness",
        japaneseTitle: null,
        releases: [
            {
                format: "CD",
                label: "PO・b.gram",
                catalog: "POCH-1082",
                edition: "Original Edition",
                released: "1991.03.27"
            },
            {
                format: "Cassette",
                label: "PO・b.gram",
                catalog: "POTH-1082",
                edition: "Original Edition",
                released: "1991.03.27"
            },
            {
                format: "CD",
                label: "B-Gram Records",
                catalog: "BGCH-1003",
                edition: "Reissue",
                released: "1993.09.01"
            },
            {
                format: "CD",
                label: "B-Gram Records",
                catalog: "JBCJ-9069",
                edition: "30th Anniversary Remasterd",
                released: "2021.09.15"
            }
        ],
        cover: {
            src: "assets/disc_photo/al/al01.jpg"
        },
        tracks: [
            {
                disc: null,
                track: 1,
                title: "Good-bye My Loneliness",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Fuji TV Network drama “Kekkon no Risou to Genjitsu”（結婚の理想と現実）Theme Song",
                    "Clarion（クラリオン）Karaoke CF Song"
                ]
            },
            {
                disc: null,
                track: 2,
                title: "Ai wa Kurayami no Naka de",
                japaneseTitle: "愛は暗闇の中で",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: ZARD, Hiroshi Terao",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 3,
                title: "Koi Onna no Yuuutsu",
                japaneseTitle: "恋女の憂鬱",
                credit: "Lyrics & Music: Daria Kawashima / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 4,
                title: "Oh! Sugar Baby",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 5,
                title: "Onna de Itai",
                japaneseTitle: "女でいたい",
                credit: "Lyrics & Music: Daria Kawashima / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 6,
                title: "It's a Boy",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            }
        ],
        related: [
            {
                title: "Wiki",
                href: "https://ja.wikipedia.org/wiki/Good-bye_My_Loneliness_(%E3%82%A2%E3%83%AB%E3%83%90%E3%83%A0)"
            },
            {
                title: "PV/CM",
                href: "https://zard-lab.net/pv/album/al01"
            }
        ]
    },


    {
        type: "album",
        id: "al02",
        order: "2nd",
        category: null,
        title: "Mou Sagasanai",
        japaneseTitle: "もう探さない",
        releases: [
            {
                format: "CD",
                label: "PO・b.gram",
                catalog: "POCH-1111",
                edition: "Original Edition",
                released: "1991.12.25"
            },
            {
                format: "Cassette",
                label: "PO・b.gram",
                catalog: "POTH-1111",
                edition: "Original Edition",
                released: "1991.12.25"
            },
            {
                format: "CD",
                label: "B-Gram Records",
                catalog: "BGCH-1004",
                edition: "Reissue",
                released: "1993.09.01"
            },
            {
                format: "CD",
                label: "B-Gram Records",
                catalog: "JBCJ-9070",
                edition: "30th Anniversary Remasterd",
                released: "2021.09.15"
            }
        ],
        cover: {
            src: "assets/disc_photo/al/al02.jpg"
        },
        tracks: [
            {
                disc: null,
                track: 1,
                title: "Fushigi ne...",
                japaneseTitle: "不思議ね…",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Nippon TV Network quiz show “Magical Zunou Power!!”（マジカル頭脳パワー!!）Theme Song"
                ]
            },
            {
                disc: null,
                track: 2,
                title: "Mou Sagasanai",
                japaneseTitle: "もう探さない",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "TV Asahi Network drama “Shichinin no Onna Bengoshi II”（七人の女弁護士II）Theme Song"
                ]
            },
            {
                disc: null,
                track: 3,
                title: "Sunao ni Ienakute",
                japaneseTitle: "素直に言えなくて",
                credit: "Lyrics & Music: Izumi Sakai / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 4,
                title: "Hitori ga Suki",
                japaneseTitle: "ひとりが好き",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 5,
                title: "Forever",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Daria Kawashima / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 6,
                title: "Lonely Soldier Boy",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 7,
                title: "Itsuka wa...",
                japaneseTitle: "いつかは…",
                credit: "Lyrics & Music: Izumi Sakai / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            }
        ],
        related: [
            {
                title: "Wiki",
                href: "https://ja.wikipedia.org/wiki/%E3%82%82%E3%81%86%E6%8E%A2%E3%81%95%E3%81%AA%E3%81%84_(%E3%82%A2%E3%83%AB%E3%83%90%E3%83%A0)"
            },
            {
                title: "PV/CM",
                href: "https://zard-lab.net/pv/album/al02"
            }
        ]
    },


    {
        type: "album",
        id: "al03",
        order: "3rd",
        category: null,
        title: "HOLD ME",
        japaneseTitle: null,
        releases: [
            {
                format: "CD",
                label: "PO・b.gram",
                catalog: "POCH-1145",
                edition: "Original Edition",
                released: "1992.09.02"
            },
            {
                format: "Cassette",
                label: "PO・b.gram",
                catalog: "POTH-1145",
                edition: "Original Edition",
                released: "1992.09.02"
            },
            {
                format: "CD",
                label: "B-Gram Records",
                catalog: "BGCH-1005",
                edition: "Reissue",
                released: "1993.09.01"
            },
            {
                format: "CD",
                label: "B-Gram Records",
                catalog: "JBCJ-9071",
                edition: "30th Anniversary Remasterd",
                released: "2021.09.15"
            }
        ],
        cover: {
            src: "assets/disc_photo/al/al03.jpg"
        },
        tracks: [
            {
                disc: null,
                track: 1,
                title: "Nemurenai Yoru wo Daite",
                japaneseTitle: "眠れない夜を抱いて",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi, Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "TV Asahi Network wide show “Tonight”（トゥナイト）Ending Theme",
                    "TV Asahi Network drama “Love Story wo Kimi ni '92 〜Nemurenai Yoru wo Daite〜”（ラブストーリーを君に'92〜眠れない夜を抱いて〜）Theme Song"
                ]
            },
            {
                disc: null,
                track: 2,
                title: "Dareka ga Matteru",
                japaneseTitle: "誰かが待ってる",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Nippon TV quiz show “Magical Zunou Power!!”（マジカル頭脳パワー!!）Ending Theme"
                ]
            },
            {
                disc: null,
                track: 3,
                title: "Sayonara Ienakute",
                japaneseTitle: "サヨナラ言えなくて",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 4,
                title: "Ano Hohoemi wo Wasurenaide",
                japaneseTitle: "あの微笑みを忘れないで",
                credit: "Lyrics: Izumi Sakai / Music: Daria Kawashima / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Fuji TV Network “Kinyou Entertainment”（金曜エンタテイメント）drama series “Udemakuri Kangofu”（腕まくり看護婦）Theme Song"
                ]
            },
            {
                disc: null,
                track: 5,
                title: "Suki na You ni Odoritai no",
                japaneseTitle: "好きなように踊りたいの",
                credit: "Lyrics: Izumi Sakai / Music: Kazuya Izumi / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 6,
                title: "Dangerous Tonight",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 7,
                title: "Konna ni Aishitemo",
                japaneseTitle: "こんなに愛しても",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 8,
                title: "Why Don't You Leave Me Alone",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Daria Kawashima / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 9,
                title: "Ai wa Nemutteru",
                japaneseTitle: "愛は眠ってる",
                credit: "Lyrics: Izumi Sakai / Music: Daria Kawashima / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 10,
                title: "Tooi Hi no Nostalgia",
                japaneseTitle: "遠い日のNostalgia",
                credit: "Lyrics: Izumi Sakai / Music: Eisuke Mochizuki / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 11,
                title: "So Together",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Daria Kawashima / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            }
        ],
        related: [
            {
                title: "Wiki",
                href: "https://ja.wikipedia.org/wiki/HOLD_ME"
            },
            {
                title: "PV/CM",
                href: "https://zard-lab.net/pv/album/al03"
            }
        ]
    },


    {
        type: "album",
        id: "al04",
        order: "4th",
        category: null,
        title: "Yureru Omoi",
        japaneseTitle: "揺れる想い",
        releases: [
            {
                format: "CD",
                label: "B-Gram Records",
                catalog: "BGCH-1001",
                edition: null,
                released: "1993.07.10"
            },
            {
                format: "CD",
                label: "B-Gram Records",
                catalog: "JBCJ-9072",
                edition: "30th Anniversary Remasterd",
                released: "2021.09.15"
            }
        ],
        cover: {
            src: "assets/disc_photo/al/al04.jpg"
        },
        tracks: [
            {
                disc: null,
                track: 1,
                title: "Yureru Omoi",
                japaneseTitle: "揺れる想い",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Otsuka Pharmaceutical “Pocari Sweat” CM Song",
                    "Chiba TV Network music program' “MU-GEN〜Music Generations〜” October 2006 Opening Theme",
                    "Spotify (@SpotifyJP) “Anata no Hibi ni Ongaku wo: Jikka no Katazuke-hen 30-byou”（「あなたの日々に音楽を」実家の片付け篇 30秒）TV CM Song"
                ]
            },
            {
                disc: null,
                track: 2,
                title: "Season",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 3,
                title: "Kimi ga Inai (B-version)",
                japaneseTitle: "君がいない (B-version)",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network drama “Kanojo no Kirai na Kanojo”（彼女の嫌いな彼女）Theme Song"
                ]
            },
            {
                disc: null,
                track: 4,
                title: "IN MY ARMS TONIGHT",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Michiya Haruhata / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "TBS TV Network drama “Gakkou ga Abunai”（学校があぶない）Ending Theme"
                ]
            },
            {
                disc: null,
                track: 5,
                title: "Anata wo Suki dakedo",
                japaneseTitle: "あなたを好きだけど",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Mitsubishi Sekiyu（三菱石油）CF Song"
                ]
            },
            {
                disc: null,
                track: 6,
                title: "Makenaide",
                japaneseTitle: "負けないで",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Fuji TV Network drama “Bokutachi no Drama Series”（ボクたちのドラマシリーズ）“Shiratori Reiko de Gozaimasu! Season 1”（白鳥麗子でございます! 第1シリーズ）Ending Theme",
                    "TV Saitama “Sydney 2000 Olympic Asian Qualifiers Send-Off Match”（シドニーオリンピック2000アジア地区予選 壮行試合）Theme Song",
                    "Nippon TV Network “13th All Japan High School Quiz Championship”（第13回全国高等学校クイズ選手権）Ending Theme",
                    "NTT DoCoMo Vancouver Olympics-related “Ou'en in Vancouver-hen”（応援 in バンクーバー篇）CM Song from February 10, 2010"
                ]
            },
            {
                disc: null,
                track: 7,
                title: "Listen to me",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Daria Kawashima / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Nippon TV Network quiz variety show “Heart ni Just Meet”（ハートにジャストミート）Ending Theme"
                ]
            },
            {
                disc: null,
                track: 8,
                title: "You and me (and…)",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 9,
                title: "I want you",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 10,
                title: "Futari no Natsu",
                japaneseTitle: "二人の夏",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            }
        ],
        related: [
            {
                title: "Wiki",
                href: "https://ja.wikipedia.org/wiki/%E6%8F%BA%E3%82%8C%E3%82%8B%E6%83%B3%E3%81%84_(%E3%82%A2%E3%83%AB%E3%83%90%E3%83%A0)"
            },
            {
                title: "PV/CM",
                href: "https://zard-lab.net/pv/album/al04"
            }
        ]
    },


    {
        type: "album",
        id: "al05",
        order: "5th",
        category: null,
        title: "OH MY LOVE",
        japaneseTitle: null,
        releases: [
            {
                format: "CD",
                label: "B-Gram Records",
                catalog: "BGCH-1014",
                edition: null,
                released: "1994.06.04"
            },
            {
                format: "CD",
                label: "B-Gram Records",
                catalog: "JBCJ-9073",
                edition: "30th Anniversary Remasterd",
                released: "2021.09.15"
            }
        ],
        cover: {
            src: "assets/disc_photo/al/al05.jpg"
        },
        tracks: [
            {
                disc: null,
                track: 1,
                title: "Oh my love",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 2,
                title: "Top Secret",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 3,
                title: "Kitto Wasurenai",
                japaneseTitle: "きっと忘れない",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Fuji TV Network drama “Bokutachi no Drama Series”（ボクたちのドラマシリーズ）“Shiratori Reiko de Gozaimasu! Season 2”（白鳥麗子でございます! 第2シリーズ）Ending Theme"
                ]
            },
            {
                disc: null,
                track: 4,
                title: "Mou Sukoshi Ato Sukoshi...",
                japaneseTitle: "もう少し あと少し…",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "TV Asahi Network drama “Lullaby Keiji '93”（ララバイ刑事'93）Ending Theme"
                ]
            },
            {
                disc: null,
                track: 5,
                title: "Ame ni Nurete",
                japaneseTitle: "雨に濡れて",
                credit: "Lyrics: Izumi Sakai, Show Wesugi / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 6,
                title: "Kono Ai ni Oyogi Tsukarete mo",
                japaneseTitle: "この愛に泳ぎ疲れても",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Kansai TV/Fuji TV Network drama “Ai to Giwaku no Suspense”（愛と疑惑のサスペンス）Opening Theme"
                ]
            },
            {
                disc: null,
                track: 7,
                title: "I still remember",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 8,
                title: "If you gimme smile",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 9,
                title: "Rainen no Natsu mo",
                japaneseTitle: "来年の夏も",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 10,
                title: "Anata ni Kaeritai",
                japaneseTitle: "あなたに帰りたい",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            }
        ],
        related: [
            {
                title: "Wiki",
                href: "https://ja.wikipedia.org/wiki/OH_MY_LOVE"
            },
            {
                title: "PV/CM",
                href: "https://zard-lab.net/pv/album/al05"
            }
        ]
    },


    {
        type: "album",
        id: "al06",
        order: "6th",
        category: null,
        title: "forever you",
        japaneseTitle: null,
        releases: [
            {
                format: "CD",
                label: "B-Gram Records",
                catalog: "JBCJ-1001",
                edition: null,
                released: "1995.03.10"
            },
            {
                format: "CD",
                label: "B-Gram Records",
                catalog: "JBCJ-9074",
                edition: "30th Anniversary Remasterd",
                released: "2021.09.15"
            }
        ],
        cover: {
            src: "assets/disc_photo/al/al06.jpg"
        },
        tracks: [
            {
                disc: null,
                track: 1,
                title: "Ima Sugu Ai ni Kite",
                japaneseTitle: "今すぐ会いに来て",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 2,
                title: "High Heel Nugi Sutete",
                japaneseTitle: "ハイヒール脱ぎ捨てて",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Fuji TV “OIOI TOKYO TASTE ROOMS” Ending Theme"
                ]
            },
            {
                disc: null,
                track: 3,
                title: "Forever you",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Documentary film “Princess Diana” Theme Song"
                ]
            },
            {
                disc: null,
                track: 4,
                title: "Mou Nigetari Shinai wa Omoide kara",
                japaneseTitle: "もう逃げたりしないわ 想い出から",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 5,
                title: "Anata wo Kanjiteitai",
                japaneseTitle: "あなたを感じていたい",
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Tetsuro Oda",
                karaoke: false,
                tieup: [
                    "NTT DoCoMo pager “Palfy V”（パルフィー V）CM Song"
                ]
            },
            {
                disc: null,
                track: 6,
                title: "Kiraku ni Ikou",
                japaneseTitle: "気楽に行こう",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "ASTEL Kansai（アステル関西）CF Song"
                ]
            },
            {
                disc: null,
                track: 7,
                title: "I'm in love",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "TOWER RECORDS SHIBUYA “SUPER STORE” Image Song"
                ]
            },
            {
                disc: null,
                track: 8,
                title: "Konna ni Soba ni Iru no ni",
                japaneseTitle: "こんなにそばに居るのに",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi, Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Boutique JOY（ブティックJOY）TV-CF Image Song"
                ]
            },
            {
                disc: null,
                track: 9,
                title: "Just believe in love",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Michiya Haruhata / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "TBS TV Network drama “Yureru Omoi”（揺れる想い）Theme Song"
                ]
            },
            {
                disc: null,
                track: 10,
                title: "Hitomi Sorasanaide",
                japaneseTitle: "瞳そらさないで",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            }
        ],
        related: [
            {
                title: "Wiki",
                href: "https://ja.wikipedia.org/wiki/Forever_you_(%E3%82%A2%E3%83%AB%E3%83%90%E3%83%A0)"
            },
            {
                title: "PV/CM",
                href: "https://zard-lab.net/pv/album/al06"
            }
        ]
    },


    {
        type: "album",
        id: "al07",
        order: "7th",
        category: null,
        title: "TODAY IS ANOTHER DAY",
        japaneseTitle: null,
        releases: [
            {
                format: "CD",
                label: "B-Gram Records",
                catalog: "JBCJ-1009",
                edition: null,
                released: "1996.07.08"
            },
            {
                format: "CD",
                label: "B-Gram Records",
                catalog: "JBCI-1006",
                edition: "Promotional Release",
                released: null
            },
            {
                format: "CD",
                label: "B-Gram Records",
                catalog: "JBCJ-9075",
                edition: "30th Anniversary Remasterd",
                released: "2021.09.15"
            }
        ],
        cover: {
            src: "assets/disc_photo/al/al07.jpg"
        },
        tracks: [
            {
                disc: null,
                track: 1,
                title: "My Friend",
                japaneseTitle: "マイ フレンド",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "TV Asahi Network anime “SLAM DUNK”（スラムダンク）4th Ending Theme"
                ]
            },
            {
                disc: null,
                track: 2,
                title: "Kimi ga Ita kara",
                japaneseTitle: "君がいたから",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Fuji TV Network drama “Kagayaku Toki no Naka de”（輝く季節の中で）Insert Song"
                ]
            },
            {
                disc: null,
                track: 3,
                title: "Sayonara wa Ima mo Kono Mune ni Imasu",
                japaneseTitle: "サヨナラは今もこの胸に居ます",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Toei “Bokutachi no Eiga Series”（ぼくたちの映画シリーズ）film “Shiratori Reiko de Gozaimasu!”（白鳥麗子でございます!）Theme Song",
                    "Nationwide 28-Station Network program “J-ROCK ARTIST Count Down 50” Ending Theme"
                ]
            },
            {
                disc: null,
                track: 4,
                title: "LOVE ~Nemurezu ni Kimi no Yokogao Zutto Miteitai~",
                japaneseTitle: "LOVE ～眠れずに君の横顔ずっと見ていた～",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 5,
                title: "DAN DAN Kokoro Hikareteku",
                japaneseTitle: "DAN DAN 心魅かれてく",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 6,
                title: "Nemuri",
                japaneseTitle: "眠り",
                credit: "Lyrics & Music: Izumi Sakai / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 7,
                title: "Kokoro wo Hiraite",
                japaneseTitle: "心を開いて",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Otsuka Pharmaceutical “Pocari Sweat” CM Song",
                    "Mitsubishi Motors Corporation ⑭ CM Song"
                ]
            },
            {
                disc: null,
                track: 8,
                title: "Totsuzen",
                japaneseTitle: "突然",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 9,
                title: "Kyou mo",
                japaneseTitle: "今日も",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 10,
                title: "Today is another day",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Nippon TV anime special “YAWARA! Zutto Kimi no Koto ga…”（YAWARA! ずっと君のことが…）Theme Song"
                ]
            },
            {
                disc: null,
                track: 11,
                title: "Ai ga Mienai",
                japaneseTitle: "愛が見えない",
                credit: "Lyrics: Izumi Sakai / Music: Masazumi Ozawa / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Bristol-Myers Squibb “SEA BREEZE '95” CM Song"
                ]
            },
            {
                disc: null,
                track: 12,
                title: "Mitsumete Itai ne",
                japaneseTitle: "見つめていたいね",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Nippon TV anime special “YAWARA! Zutto Kimi no Koto ga…”（YAWARA! ずっと君のことが…）Insert Song"
                ]
            }
        ],
        related: [
            {
                title: "Wiki",
                href: "https://ja.wikipedia.org/wiki/TODAY_IS_ANOTHER_DAY"
            },
            {
                title: "PV/CM",
                href: "https://zard-lab.net/pv/album/al07"
            }
        ]
    },


    {
        type: "album",
        id: "selection01",
        order: null,
        category: "Selection",
        title: "ZARD BLEND ~SUN & STONE~",
        japaneseTitle: null,
        releases: [
            {
                format: "CD",
                label: "B-Gram Records",
                catalog: "JBCJ-1013",
                edition: null,
                released: "1997.04.23"
            },
            {
                format: "CD",
                label: "B-Gram Records",
                catalog: "JBCI-1008",
                edition: "Promotional Release",
                released: null
            }
        ],
        cover: {
            src: "assets/disc_photo/al/selection01.jpg"
        },
        tracks: [
            {
                disc: null,
                track: 1,
                title: "Kimi ni Aitaku Nattara...",
                japaneseTitle: "君に逢いたくなったら…",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "TBS TV Network drama “Risou no Kekkon”（理想の結婚）Opening Theme"
                ]
            },
            {
                disc: null,
                track: 2,
                title: "Yureru Omoi",
                japaneseTitle: "揺れる想い",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Otsuka Pharmaceutical “Pocari Sweat” CM Song",
                    "Chiba TV Network music program' “MU-GEN〜Music Generations〜” October 2006 Opening Theme",
                    "Spotify (@SpotifyJP) “Anata no Hibi ni Ongaku wo: Jikka no Katazuke-hen 30-byou”（「あなたの日々に音楽を」実家の片付け篇 30秒）TV CM Song"
                ]
            },
            {
                disc: null,
                track: 3,
                title: "Kimi ga Inai",
                japaneseTitle: "君がいない",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network drama “Kanojo no Kirai na Kanojo”（彼女の嫌いな彼女）Theme Song"
                ]
            },
            {
                disc: null,
                track: 4,
                title: "Kokoro wo Hiraite",
                japaneseTitle: "心を開いて",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Otsuka Pharmaceutical “Pocari Sweat” CM Song",
                    "Mitsubishi Motors Corporation ⑭ CM Song"
                ]
            },
            {
                disc: null,
                track: 5,
                title: "Good-bye My Loneliness",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Fuji TV Network drama “Kekkon no Risou to Genjitsu”（結婚の理想と現実）Theme Song",
                    "Clarion（クラリオン）Karaoke CF Song"
                ]
            },
            {
                disc: null,
                track: 6,
                title: "IN MY ARMS TONIGHT",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Michiya Haruhata / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "TBS TV Network drama “Gakkou ga Abunai”（学校があぶない）Ending Theme"
                ]
            },
            {
                disc: null,
                track: 7,
                title: "Ano Hohoemi wo Wasurenaide",
                japaneseTitle: "あの微笑みを忘れないで",
                credit: "Lyrics: Izumi Sakai / Music: Daria Kawashima / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Fuji TV Network “Kinyou Entertainment”（金曜エンタテイメント）drama series “Udemakuri Kangofu”（腕まくり看護婦）Theme Song"
                ]
            },
            {
                disc: null,
                track: 8,
                title: "Oh my love",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 9,
                title: "Rainen no Natsu mo",
                japaneseTitle: "来年の夏も",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 10,
                title: "High Heel Nugi Sutete",
                japaneseTitle: "ハイヒール脱ぎ捨てて",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Fuji TV “OIOI TOKYO TASTE ROOMS” Ending Theme"
                ]
            },
            {
                disc: null,
                track: 11,
                title: "Don't you see!",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Fuji TV Network anime “Dragon Ball GT”（ドラゴンボールGT）2nd Ending Theme"
                ]
            },
            {
                disc: null,
                track: 12,
                title: "Nemurenai Yoru wo Daite",
                japaneseTitle: "眠れない夜を抱いて",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi, Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "TV Asahi Network wide show “Tonight”（トゥナイト）Ending Theme",
                    "TV Asahi Network drama “Love Story wo Kimi ni '92 〜Nemurenai Yoru wo Daite〜”（ラブストーリーを君に'92〜眠れない夜を抱いて〜）Theme Song"
                ]
            },
            {
                disc: null,
                track: 13,
                title: "Konna ni Aishitemo ~Hold Me~",
                japaneseTitle: "こんなに愛しても ～Hold Me～",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            }
        ],
        related: [
            {
                title: "Wiki",
                href: "https://ja.wikipedia.org/wiki/ZARD_BLEND%E3%80%9CSUN_&_STONE%E3%80%9C"
            },
            {
                title: "PV/CM",
                href: "#"
            }
        ]
    },


    {
        type: "album",
        id: "al08",
        order: "8th",
        category: null,
        title: "Eien",
        japaneseTitle: "永遠",
        releases: [
            {
                format: "CD",
                label: "B-Gram Records",
                catalog: "JBCJ-1021",
                edition: null,
                released: "1999.02.17"
            },
            {
                format: "8cm CD",
                label: "B-Gram Records",
                catalog: "JBCJ-1021B",
                edition: "First-press 2-track Bonus CD: CAN'T TAKE MY EYES OFF OF YOU",
                released: "1999.02.17"
            },
            {
                format: "CD",
                label: "B-Gram Records",
                catalog: "JBCJ-9076",
                edition: "30th Anniversary Remasterd",
                released: "2021.09.15"
            }
        ],
        cover: {
            src: "assets/disc_photo/al/al08.jpg"
        },
        tracks: [
            {
                disc: null,
                track: 1,
                title: "Eien",
                japaneseTitle: "永遠",
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network drama “Shitsurakuen”（失楽園）Theme Song",
                    "Canon “NEW EOS Kiss” CM Song"
                ]
            },
            {
                disc: null,
                track: 2,
                title: "My Baby Grand ~Nukumori ga Hoshikute~",
                japaneseTitle: "My Baby Grand～ぬくもりが欲しくて～",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "NTT DoCoMo “DoCoMo '97 Winter”（ドコモ ’97-冬）CM Song"
                ]
            },
            {
                disc: null,
                track: 3,
                title: "WAKE UP MAKE THE MORNING LAST ~Wasuregataki Hito e~",
                japaneseTitle: "WAKE UP MAKE THE MORNING LAST～忘れがたき人へ～",
                credit: "Lyrics: Izumi Sakai / Music: Hiroya Fukuyama / Arrangement: Hirohito Furui",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 4,
                title: "Brand New Love",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Masaaki Watanuki / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 5,
                title: "Unmei no Roulette Mawashite",
                japaneseTitle: "運命のルーレット廻して",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network anime “Meitantei Conan”（名探偵コナン）Opening Theme"
                ]
            },
            {
                disc: null,
                track: 6,
                title: "Tooi Hoshi wo Kazoete",
                japaneseTitle: "遠い星を数えて",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 7,
                title: "Atarashii Door ~Fuyu no Himawari~",
                japaneseTitle: "新しいドア～冬のひまわり～",
                credit: "Lyrics: Izumi Sakai / Music: Masato Kitano / Arrangement: Hirohito Furui",
                karaoke: false,
                tieup: [
                    "Sapporo Breweries “Fuyu Monogatari”（冬物語）CM Song"
                ]
            },
            {
                disc: null,
                track: 8,
                title: "GOOD DAY",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Masaaki Watanuki / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Beautylabo “Natural Color”（ナチュラルカラー）CM Song"
                ]
            },
            {
                disc: null,
                track: 9,
                title: "I feel fine, yeah",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Makoto Miyoshi / Arrangement: Hirohito Furui",
                karaoke: false,
                tieup: [
                    "Fuji TV “Mezamashi Tenki”（めざまし天気）Theme Song"
                ]
            },
            {
                disc: null,
                track: 10,
                title: "Shoujo no Koro ni Modotta Mitai ni",
                japaneseTitle: "少女の頃に戻ったみたいに",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Nationwide Toho Youga-kei Roadshow “Meitantei Conan Movie 02: 14-banme no Target”（名探偵コナン １４番目の標的）Theme Song"
                ]
            },
            {
                disc: null,
                track: 11,
                title: "Iki mo Dekinai",
                japaneseTitle: "息もできない",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Fuji TV Network anime “Chuuka Ichiban!”（中華一番!）2nd Opening Theme"
                ]
            },
            {
                disc: null,
                track: 12,
                title: "Kaze ga Toori Nukeru Machi he",
                japaneseTitle: "風が通り抜ける街へ",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "Japan Racing Association “'97 Summer JRA” Campaign Song"
                ]
            },
            {
                disc: null,
                track: 13,
                title: "Photograph",
                japaneseTitle: "フォトグラフ",
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "Nippon TV drama “Haru no Suspense Special Keijitachi no Natsu”（春のサスペンススペシャル 刑事たちの夏）Theme Song"
                ]
            },
            {
                disc: null,
                track: 14,
                title: "Bonus 8cm CD-01 / CAN'T TAKE MY EYES OFF OF YOU",
                japaneseTitle: null,
                credit: "Lyrics: Bob Crewe / Music: Bob Gaudio / Arrangement: Yasuharu Konishi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 15,
                title: "Bonus 8cm CD-02 / CAN'T TAKE MY EYES OFF OF YOU (readymade wizard mix short cuts)",
                japaneseTitle: null,
                credit: "Lyrics: Bob Crewe / Music: Bob Gaudio / Arrangement & Mix: Yasuharu Konishi",
                karaoke: false,
                tieup: null
            }
        ],
        related: [
            {
                title: "Wiki",
                href: "https://ja.wikipedia.org/wiki/%E6%B0%B8%E9%81%A0_(ZARD%E3%81%AE%E3%82%A2%E3%83%AB%E3%83%90%E3%83%A0)"
            },
            {
                title: "PV/CM",
                href: "https://zard-lab.net/pv/album/al08"
            }
        ]
    },


    {
        type: "album",
        id: "best01",
        order: null,
        category: "Best",
        title: "ZARD BEST The Single Collection ~Kiseki~",
        japaneseTitle: "ZARD BEST The Single Collection～軌跡～",
        releases: [
            {
                format: "CD",
                label: "B-Gram Records",
                catalog: "JBCJ-1023",
                edition: null,
                released: "1999.05.28"
            },
            {
                format: "Enhanced CD-ROM",
                label: "B-Gram Records",
                catalog: "JBCJ-1023Z",
                edition: "First-press bonus",
                released: "1999.05.28"
            }
        ],
        cover: {
            src: "assets/disc_photo/al/best01.jpg"
        },
        tracks: [
            {
                disc: null,
                track: 1,
                title: "Makenaide",
                japaneseTitle: "負けないで",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Fuji TV Network drama “Bokutachi no Drama Series”（ボクたちのドラマシリーズ）“Shiratori Reiko de Gozaimasu! Season 1”（白鳥麗子でございます! 第1シリーズ）Ending Theme",
                    "TV Saitama “Sydney 2000 Olympic Asian Qualifiers Send-Off Match”（シドニーオリンピック2000アジア地区予選 壮行試合）Theme Song",
                    "Nippon TV Network “13th All Japan High School Quiz Championship”（第13回全国高等学校クイズ選手権）Ending Theme",
                    "NTT DoCoMo Vancouver Olympics-related “Ou'en in Vancouver-hen”（応援 in バンクーバー篇）CM Song from February 10, 2010"
                ]
            },
            {
                disc: null,
                track: 2,
                title: "Kimi ga Inai",
                japaneseTitle: "君がいない",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network drama “Kanojo no Kirai na Kanojo”（彼女の嫌いな彼女）Theme Song"
                ]
            },
            {
                disc: null,
                track: 3,
                title: "Yureru Omoi",
                japaneseTitle: "揺れる想い",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Otsuka Pharmaceutical “Pocari Sweat” CM Song",
                    "Chiba TV Network music program' “MU-GEN〜Music Generations〜” October 2006 Opening Theme",
                    "Spotify (@SpotifyJP) “Anata no Hibi ni Ongaku wo: Jikka no Katazuke-hen 30-byou”（「あなたの日々に音楽を」実家の片付け篇 30秒）TV CM Song"
                ]
            },
            {
                disc: null,
                track: 4,
                title: "Hateshinai Yume wo",
                japaneseTitle: "果てしない夢を",
                credit: "Lyrics: Show Wesugi, Izumi Sakai / Music: Masayuki Deguchi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Nippon TV professional baseball broadcast image song"
                ]
            },
            {
                disc: null,
                track: 5,
                title: "Mou Sukoshi Ato Sukoshi...",
                japaneseTitle: "もう少し あと少し…",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "TV Asahi Network drama “Lullaby Keiji '93”（ララバイ刑事'93）Ending Theme"
                ]
            },
            {
                disc: null,
                track: 6,
                title: "Kitto Wasurenai",
                japaneseTitle: "きっと忘れない",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Fuji TV Network drama “Bokutachi no Drama Series”（ボクたちのドラマシリーズ）“Shiratori Reiko de Gozaimasu! Season 2”（白鳥麗子でございます! 第2シリーズ）Ending Theme"
                ]
            },
            {
                disc: null,
                track: 7,
                title: "Kono Ai ni Oyogi Tsukarete mo",
                japaneseTitle: "この愛に泳ぎ疲れても",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Kansai TV/Fuji TV Network drama “Ai to Giwaku no Suspense”（愛と疑惑のサスペンス）Opening Theme"
                ]
            },
            {
                disc: null,
                track: 8,
                title: "Konna ni Soba ni Iru no ni",
                japaneseTitle: "こんなにそばに居るのに",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Boutique JOY（ブティックJOY）TV-CF Image Song"
                ]
            },
            {
                disc: null,
                track: 9,
                title: "Just believe in love",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Michiya Haruhata / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "TBS TV Network drama “Yureru Omoi”（揺れる想い）Theme Song"
                ]
            },
            {
                disc: null,
                track: 10,
                title: "Ai ga Mienai",
                japaneseTitle: "愛が見えない",
                credit: "Lyrics: Izumi Sakai / Music: Masazumi Ozawa / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Bristol-Myers Squibb “SEA BREEZE '95” CM Song"
                ]
            },
            {
                disc: null,
                track: 11,
                title: "My Friend",
                japaneseTitle: "マイ フレンド",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "TV Asahi Network anime “SLAM DUNK”（スラムダンク）4th Ending Theme"
                ]
            },
            {
                disc: null,
                track: 12,
                title: "Kokoro wo Hiraite",
                japaneseTitle: "心を開いて",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Otsuka Pharmaceutical “Pocari Sweat” CM Song",
                    "Mitsubishi Motors Corporation ⑭ CM Song"
                ]
            },
            {
                disc: null,
                track: 13,
                title: "Eien (Intro Piano Version)",
                japaneseTitle: "永遠 (Intro Piano Version)",
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network drama “Shitsurakuen”（失楽園）Theme Song",
                    "Canon “NEW EOS Kiss” CM Song"
                ]
            },
            {
                disc: null,
                track: 14,
                title: "Unmei no Roulette Mawashite (Re-mix Version)",
                japaneseTitle: "運命のルーレット廻して (Re-mix Version)",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network anime “Meitantei Conan”（名探偵コナン）Opening Theme"
                ]
            }
        ],
        related: [
            {
                title: "Wiki",
                href: "https://ja.wikipedia.org/wiki/ZARD_BEST_The_Single_Collection_%E3%80%9C%E8%BB%8C%E8%B7%A1%E3%80%9C"
            },
            {
                title: "PV/CM",
                href: "#"
            }
        ]
    },


    {
        type: "album",
        id: "best02",
        order: null,
        category: "Best",
        title: "ZARD BEST ~Request Memorial~",
        japaneseTitle: null,
        releases: [
            {
                format: "CD",
                label: "B-Gram Records",
                catalog: "JBCJ-1024",
                edition: null,
                released: "1999.09.15"
            },
            {
                format: "Enhanced CD-ROM",
                label: "B-Gram Records",
                catalog: "JBCJ-1024Z",
                edition: "First-press bonus",
                released: "1999.09.15"
            }
        ],
        cover: {
            src: "assets/disc_photo/al/best02.jpg"
        },
        tracks: [
            {
                disc: null,
                track: 1,
                title: "Don't you see!",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Fuji TV Network anime “Dragon Ball GT”（ドラゴンボールGT）2nd Ending Theme"
                ]
            },
            {
                disc: null,
                track: 2,
                title: "Anata wo Kanjiteitai",
                japaneseTitle: "あなたを感じていたい",
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Tetsuro Oda",
                karaoke: false,
                tieup: [
                    "NTT DoCoMo pager “Palfy V”（パルフィー V）CM Song"
                ]
            },
            {
                disc: null,
                track: 3,
                title: "Iki mo Dekinai",
                japaneseTitle: "息もできない",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Fuji TV Network anime “Chuuka Ichiban!”（中華一番!）2nd Opening Theme"
                ]
            },
            {
                disc: null,
                track: 4,
                title: "Kimi ni Aitaku Nattara...",
                japaneseTitle: "君に逢いたくなったら…",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "TBS TV Network drama “Risou no Kekkon”（理想の結婚）Opening Theme"
                ]
            },
            {
                disc: null,
                track: 5,
                title: "Ano Hohoemi wo Wasurenaide",
                japaneseTitle: "あの微笑みを忘れないで",
                credit: "Lyrics: Izumi Sakai / Music: Daria Kawashima / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Fuji TV Network “Kinyou Entertainment”（金曜エンタテイメント）drama series “Udemakuri Kangofu”（腕まくり看護婦）Theme Song"
                ]
            },
            {
                disc: null,
                track: 6,
                title: "Oh my love",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 7,
                title: "Sayonara wa Ima mo Kono Mune ni Imasu",
                japaneseTitle: "サヨナラは今もこの胸に居ます",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Toei “Bokutachi no Eiga Series”（ぼくたちの映画シリーズ）film “Shiratori Reiko de Gozaimasu!”（白鳥麗子でございます!）Theme Song",
                    "Nationwide 28-Station Network program “J-ROCK ARTIST Count Down 50” Ending Theme"
                ]
            },
            {
                disc: null,
                track: 8,
                title: "My Baby Grand ~Nukumori ga Hoshikute~",
                japaneseTitle: "My Baby Grand～ぬくもりが欲しくて～",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "NTT DoCoMo “DoCoMo '97 Winter”（ドコモ ’97-冬）CM Song"
                ]
            },
            {
                disc: null,
                track: 9,
                title: "Forever you",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Documentary film “Princess Diana” Theme Song"
                ]
            },
            {
                disc: null,
                track: 10,
                title: "Totsuzen",
                japaneseTitle: "突然",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 11,
                title: "Tooi Hi no Nostalgia",
                japaneseTitle: "遠い日のNostalgia",
                credit: "Lyrics: Izumi Sakai / Music: Eisuke Mochizuki / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 12,
                title: "Ame ni Nurete",
                japaneseTitle: "雨に濡れて",
                credit: "Lyrics: Izumi Sakai, Show Wesugi / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 13,
                title: "I still remember",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 14,
                title: "MIND GAMES",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Masaaki Watanuki / Arrangement: Masaaki Watanuki, Hirohito Furui",
                karaoke: false,
                tieup: [
                    "Fuji TV Network sports program “Pro Yakyuu News”（プロ野球ニュース）Image Song",
                    "Nippon Broadcasting System radio program “Show Up Nighter '99”（ショウアップナイター'99）Ending Theme"
                ]
            }
        ],
        related: [
            {
                title: "Wiki",
                href: "https://ja.wikipedia.org/wiki/ZARD_BEST_%E3%80%9CRequest_Memorial%E3%80%9C"
            },
            {
                title: "PV/CM",
                href: "#"
            }
        ]
    },


    {
        type: "album",
        id: "live01",
        order: null,
        category: "Live",
        title: "ZARD Cruising & Live ~Genteiban Live CD~",
        japaneseTitle: "ZARD Cruising & Live ～限定盤ライヴCD～",
        releases: [
            {
                format: "CD+CD-ROM+VHS",
                label: "B-Gram Records",
                catalog: "JBCJ-1026",
                edition: "300,000-copy Limited Edition",
                released: "2000.01.26"
            },
            {
                format: "CD",
                label: "B-Gram Records",
                catalog: "JBCI-1011",
                edition: "Promotional Release",
                released: null
            }
        ],
        cover: {
            src: "assets/disc_photo/al/live01.jpg"
        },
        tracks: [
            {
                disc: null,
                track: 1,
                title: "Yureru Omoi",
                japaneseTitle: "揺れる想い",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Otsuka Pharmaceutical “Pocari Sweat” CM Song",
                    "Chiba TV Network music program' “MU-GEN〜Music Generations〜” October 2006 Opening Theme",
                    "Spotify (@SpotifyJP) “Anata no Hibi ni Ongaku wo: Jikka no Katazuke-hen 30-byou”（「あなたの日々に音楽を」実家の片付け篇 30秒）TV CM Song"
                ]
            },
            {
                disc: null,
                track: 2,
                title: "Kimi ga Inai",
                japaneseTitle: "君がいない",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network drama “Kanojo no Kirai na Kanojo”（彼女の嫌いな彼女）Theme Song"
                ]
            },
            {
                disc: null,
                track: 3,
                title: "Kokoro wo Hiraite",
                japaneseTitle: "心を開いて",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Otsuka Pharmaceutical “Pocari Sweat” CM Song",
                    "Mitsubishi Motors Corporation ⑭ CM Song"
                ]
            },
            {
                disc: null,
                track: 4,
                title: "Don't you see!",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Fuji TV Network anime “Dragon Ball GT”（ドラゴンボールGT）2nd Ending Theme"
                ]
            },
            {
                disc: null,
                track: 5,
                title: "Sekai wa Kitto Mirai no Naka",
                japaneseTitle: "世界はきっと未来の中",
                credit: "Lyrics: Izumi Sakai / Music: Yuichiro Iwai / Arrangement: Akihito Tokunaga, Hirohito Furui, Kenji Shiojiri",
                karaoke: false,
                tieup: [
                    "TV Asahi Network drama “Maiko-san wa Meitantei!”（舞妓さんは名探偵!）Theme Song"
                ]
            },
            {
                disc: null,
                track: 6,
                title: "Photograph",
                japaneseTitle: "フォトグラフ",
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "Nippon TV drama “Haru no Suspense Special Keijitachi no Natsu”（春のサスペンススペシャル 刑事たちの夏）Theme Song"
                ]
            },
            {
                disc: null,
                track: 7,
                title: "Mou Sukoshi Ato Sukoshi...",
                japaneseTitle: "もう少し あと少し…",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "TV Asahi Network drama “Lullaby Keiji '93”（ララバイ刑事'93）Ending Theme"
                ]
            },
            {
                disc: null,
                track: 8,
                title: "Nemurenai Yoru wo Daite",
                japaneseTitle: "眠れない夜を抱いて",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi, Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "TV Asahi Network wide show “Tonight”（トゥナイト）Ending Theme",
                    "TV Asahi Network drama “Love Story wo Kimi ni '92 〜Nemurenai Yoru wo Daite〜”（ラブストーリーを君に'92〜眠れない夜を抱いて〜）Theme Song"
                ]
            },
            {
                disc: null,
                track: 9,
                title: "My Baby Grand ~Nukumori ga Hoshikute~",
                japaneseTitle: "My Baby Grand～ぬくもりが欲しくて～",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "NTT DoCoMo “DoCoMo '97 Winter”（ドコモ ’97-冬）CM Song"
                ]
            },
            {
                disc: null,
                track: 10,
                title: "IN MY ARMS TONIGHT",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Michiya Haruhata / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "TBS TV Network drama “Gakkou ga Abunai”（学校があぶない）Ending Theme"
                ]
            },
            {
                disc: null,
                track: 11,
                title: "Ano Hohoemi wo Wasurenaide",
                japaneseTitle: "あの微笑みを忘れないで",
                credit: "Lyrics: Izumi Sakai / Music: Daria Kawashima / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Fuji TV Network “Kinyou Entertainment”（金曜エンタテイメント）drama series “Udemakuri Kangofu”（腕まくり看護婦）Theme Song"
                ]
            },
            {
                disc: null,
                track: 12,
                title: "Kono Ai ni Oyogi Tsukarete mo",
                japaneseTitle: "この愛に泳ぎ疲れても",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Kansai TV/Fuji TV Network drama “Ai to Giwaku no Suspense”（愛と疑惑のサスペンス）Opening Theme"
                ]
            },
            {
                disc: null,
                track: 13,
                title: "Encore 01 / Tooi Hoshi wo Kazoete",
                japaneseTitle: "遠い星を数えて",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 14,
                title: "Encore 02 / Makenaide",
                japaneseTitle: "負けないで",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Fuji TV Network drama “Bokutachi no Drama Series”（ボクたちのドラマシリーズ）“Shiratori Reiko de Gozaimasu! Season 1”（白鳥麗子でございます! 第1シリーズ）Ending Theme",
                    "TV Saitama “Sydney 2000 Olympic Asian Qualifiers Send-Off Match”（シドニーオリンピック2000アジア地区予選 壮行試合）Theme Song",
                    "Nippon TV Network “13th All Japan High School Quiz Championship”（第13回全国高等学校クイズ選手権）Ending Theme",
                    "NTT DoCoMo Vancouver Olympics-related “Ou'en in Vancouver-hen”（応援 in バンクーバー篇）CM Song from February 10, 2010"
                ]
            }
        ],
        related: [
            {
                title: "Wiki",
                href: "https://ja.wikipedia.org/wiki/ZARD_Cruising_&_Live_%E3%80%9C%E9%99%90%E5%AE%9A%E7%9B%A4%E3%83%A9%E3%82%A4%E3%83%B4CD%E3%80%9C"
            },
            {
                title: "PV/CM",
                href: "#"
            }
        ]
    },


    {
        type: "album",
        id: "al09",
        order: "9th",
        category: null,
        title: "Toki no Tsubasa",
        japaneseTitle: "時間（とき）の翼",
        releases: [
            {
                format: "CD",
                label: "B-Gram Records",
                catalog: "JBCJ-1033",
                edition: "Original 2001 Mix",
                released: "2001.02.15"
            },
            {
                format: "CD",
                label: "B-Gram Records",
                catalog: "JBCJ-9077",
                edition: "30th Anniversary Rearranged Edition",
                released: "2021.09.15"
            }
        ],
        cover: {
            src: "assets/disc_photo/al/al09.jpg"
        },
        tracks: [
            {
                disc: null,
                track: 1,
                title: "Get U're Dream",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "NHK Sydney Olympics Broadcast Theme Song"
                ]
            },
            {
                disc: null,
                track: 2,
                title: "Kono Namida Hoshi ni Nare",
                japaneseTitle: "この涙 星になれ",
                credit: "Lyrics: Izumi Sakai / Music: Yuichiro Iwai / Arrangement: Hirohito Furui",
                karaoke: false,
                tieup: [
                    "TV Asahi Network drama “Kasouken no Onna”（科捜研の女）Theme Song"
                ]
            },
            {
                disc: null,
                track: 3,
                title: "promised you ~with P-edition~",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Cybersound",
                karaoke: false,
                tieup: [
                    "TV Asahi Network two-hour drama program “Doyou Wide Gekijou”（土曜ワイド劇場）Ending Theme"
                ]
            },
            {
                disc: null,
                track: 4,
                title: "Itai Kurai Kimi ga Afureteiru yo",
                japaneseTitle: "痛いくらい君があふれているよ",
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Kenji Shiojiri",
                karaoke: false,
                tieup: [
                    "Nestlé Japan “NESCAFÉ moment”（ネスカフェモーメント）CM Song"
                ]
            },
            {
                disc: null,
                track: 5,
                title: "Mado no Soto wa Monochrome",
                japaneseTitle: "窓の外はモノクローム",
                credit: "Lyrics: Izumi Sakai / Music: Yuichiro Iwai / Arrangement: Yoshinobu Ohga",
                karaoke: false,
                tieup: [
                    "Nippon TV “Shuukan Storyland”（週刊ストーリーランド）Ending Theme"
                ]
            },
            {
                disc: null,
                track: 6,
                title: "O・mo・hi・de",
                japaneseTitle: "お・も・ひ・で",
                credit: "Lyrics: Izumi Sakai / Music: Hiroshi Terao / Arrangement: Hirohito Furui, Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "TV Asahi Network information program “Zeitaku na Kyuujitsu”（贅沢な休日）Theme Song",
                    "“Change IZU 2000!”（チェンジ伊豆2000!）Image Song"
                ]
            },
            {
                disc: null,
                track: 7,
                title: "Ashita Moshi Kimi ga Kowaretemo",
                japaneseTitle: "明日もし君が壊れても",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 8,
                title: "Sekai wa Kitto Mirai no Naka ~another style 21~",
                japaneseTitle: "世界はきっと未来の中～another style 21～",
                credit: "Lyrics: Izumi Sakai / Music: Yuichiro Iwai / Arrangement: Akihito Tokunaga, Yoshinobu Ohga",
                karaoke: false,
                tieup: [
                    "TV Asahi Network drama “Maiko-san wa Meitantei!”（舞妓さんは名探偵!）Theme Song"
                ]
            },
            {
                disc: null,
                track: 9,
                title: "hero",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Yoshinobu Ohga",
                karaoke: false,
                tieup: [
                    "Konami game “Tokimeki Memorial 3 ~Yakusoku no Ano Basho de~”（ときめきメモリアル3 〜約束のあの場所で〜）Sweet Ending Theme"
                ]
            },
            {
                disc: null,
                track: 10,
                title: "Yureru Omoi (Gomi's New York Remix)",
                japaneseTitle: "揺れる想い (Gomi's New York Remix)",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Remix: Gomi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 11,
                title: "Makenaide (Gomi's 10th Anniversary Special Mix)",
                japaneseTitle: "負けないで (Gomi's 10th Anniversary Special Mix)",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Remix: Gomi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 12,
                title: "Toki no Tsubasa",
                japaneseTitle: "時間（とき）の翼",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "NTT West “FLET'S ISDN”（フレッツISDN）CF Song"
                ]
            }
        ],
        related: [
            {
                title: "Wiki",
                href: "https://ja.wikipedia.org/wiki/%E6%99%82%E9%96%93%E3%81%AE%E7%BF%BC"
            },
            {
                title: "PV/CM",
                href: "https://zard-lab.net/pv/album/al09"
            }
        ]
    },


    {
        type: "album",
        id: "selection02",
        order: null,
        category: "Selection",
        title: "ZARD BLEND II ~LEAF & SNOW~",
        japaneseTitle: null,
        releases: [
            {
                format: "CD",
                label: "B-Gram Records",
                catalog: "JBCJ-9002",
                edition: null,
                released: "2001.11.21"
            },
            {
                format: "CD",
                label: "B-Gram Records",
                catalog: "JBCI-1014",
                edition: "Promotional Release",
                released: null
            }
        ],
        cover: {
            src: "assets/disc_photo/al/selection02.jpg"
        },
        tracks: [
            {
                disc: null,
                track: 1,
                title: "Watashi dake Mitsumete",
                japaneseTitle: "私だけ見つめて",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 2,
                title: "Anata wo Kanjiteitai",
                japaneseTitle: "あなたを感じていたい",
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Tetsuro Oda",
                karaoke: false,
                tieup: [
                    "NTT DoCoMo pager “Palfy V”（パルフィー V）CM Song"
                ]
            },
            {
                disc: null,
                track: 3,
                title: "Mou Sukoshi Ato Sukoshi...",
                japaneseTitle: "もう少し あと少し…",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "TV Asahi Network drama “Lullaby Keiji '93”（ララバイ刑事'93）Ending Theme"
                ]
            },
            {
                disc: null,
                track: 4,
                title: "My Baby Grand ~Nukumori ga Hoshikute~",
                japaneseTitle: "My Baby Grand～ぬくもりが欲しくて～",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "NTT DoCoMo “DoCoMo '97 Winter”（ドコモ ’97-冬）CM Song"
                ]
            },
            {
                disc: null,
                track: 5,
                title: "Tasogare ni My Lonely Heart",
                japaneseTitle: "黄昏にMy Lonely Heart",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 6,
                title: "Boy",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Yomiuri TV-produced film “Natsu no Niwa 〜The Friends〜”（夏の庭〜The Friends〜）Ending Theme"
                ]
            },
            {
                disc: null,
                track: 7,
                title: "Stray Love",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Daria Kawashima / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 8,
                title: "Take me to your dream",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Daria Kawashima / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 9,
                title: "You and me (and…)",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 10,
                title: "Anata ni Kaeritai",
                japaneseTitle: "あなたに帰りたい",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 11,
                title: "Just for you",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi, Daisuke Ikeda",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 12,
                title: "Ready, Go!",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Daria Kawashima / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 13,
                title: "Change my mind",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 14,
                title: "Kanariya",
                japaneseTitle: "カナリヤ",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 15,
                title: "Christmas Time (ZARD Version)",
                japaneseTitle: "クリスマス タイム (ZARD Version)",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 16,
                title: "Eien ~Kimi to Boku to no Aida ni~",
                japaneseTitle: "永遠～君と僕との間に～",
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "Canon “NEW EOS KISS” CF short version"
                ]
            },
            {
                disc: null,
                track: 17,
                title: "Hidden Track after Track 16 / Tooi Hoshi wo Kazoete",
                japaneseTitle: "遠い星を数えて",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: null
            }
        ],
        related: [
            {
                title: "Wiki",
                href: "https://ja.wikipedia.org/wiki/ZARD_BLEND_II%E3%80%9CLEAF_&_SNOW%E3%80%9C"
            },
            {
                title: "PV/CM",
                href: "#"
            }
        ]
    },


    {
        type: "album",
        id: "al10",
        order: "10th",
        category: null,
        title: "Tomatteita Tokei ga Ima Ugokidashita",
        japaneseTitle: "止まっていた時計が今動き出した",
        releases: [
            {
                format: "CD",
                label: "B-Gram Records",
                catalog: "JBCJ-9008",
                edition: null,
                released: "2004.01.28"
            },
            {
                format: "CD",
                label: "B-Gram Records",
                catalog: "JBCI-1016",
                edition: "Promotional Released / 6-track Sampler",
                released: "2004.01.28"
            },
            {
                format: "CD",
                label: "B-Gram Records",
                catalog: "JBCJ-9078",
                edition: "30th Anniversary Remasterd",
                released: "2021.09.15"
            }
        ],
        cover: {
            src: "assets/disc_photo/al/al10.jpg"
        },
        tracks: [
            {
                disc: null,
                track: 1,
                title: "Ashita wo Yume Mite",
                japaneseTitle: "明日を夢見て",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Satoru Kobayashi",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network anime “Meitantei Conan”（名探偵コナン）Ending Theme"
                ]
            },
            {
                disc: null,
                track: 2,
                title: "Toki no Tsubasa",
                japaneseTitle: "時間（とき）の翼",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Satoru Kobayashi",
                karaoke: false,
                tieup: [
                    "NTT West “FLET'S ISDN”（フレッツISDN）CF Song"
                ]
            },
            {
                disc: null,
                track: 3,
                title: "Motto Chikaku de Kimi no Yokogao Mitetai",
                japaneseTitle: "もっと近くで君の横顔見ていたい",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Gekkeikan “Tsuki”（月）CM Song"
                ]
            },
            {
                disc: null,
                track: 4,
                title: "pray",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Akihito Tokunaga / Arrangement: Satoru Kobayashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 5,
                title: "Deai Soshite Wakare",
                japaneseTitle: "出逢いそして別れ",
                credit: "Lyrics: Izumi Sakai / Music: Michiya Haruhata / Arrangement: Michiya Haruhata, Daisuke Ikeda",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 6,
                title: "Tomatteita Tokei ga Ima Ugokidashita",
                japaneseTitle: "止まっていた時計が今動き出した",
                credit: "Lyrics: Izumi Sakai / Music: Yuri Nakamura / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "TV Asahi drama “Igi Ari! Onna Bengoshi Ooka Norie”（異議あり! 女弁護士大岡法江）Theme Song"
                ]
            },
            {
                disc: null,
                track: 7,
                title: "Hitomi Tojite",
                japaneseTitle: "瞳閉じて",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "Fuji TV Network sports program “Kandou Factory Suporuto!”（感動ファクトリー すぽると!）Image Song"
                ]
            },
            {
                disc: null,
                track: 8,
                title: "Sawayakana Kimi no Kimochi (Album Ver.)",
                japaneseTitle: "さわやかな君の気持ち (Album Ver.)",
                credit: "Lyrics: Izumi Sakai / Music: Akihito Tokunaga / Arrangement: Dr.Terachi, Pierrot Le Fou",
                karaoke: false,
                tieup: [
                    "Nivea-Kao “8×4 (Eight Four)” CM Song"
                ]
            },
            {
                disc: null,
                track: 9,
                title: "Ai de Anata wo Sukuimashou",
                japaneseTitle: "愛であなたを救いましょう",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 10,
                title: "Tenshi no You na Egao de",
                japaneseTitle: "天使のような笑顔で",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 11,
                title: "Kanashii Hodo Kyou wa Ame demo",
                japaneseTitle: "悲しいほど 今日は雨でも",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Satoru Kobayashi",
                karaoke: false,
                tieup: null
            }
        ],
        related: [
            {
                title: "Wiki",
                href: "https://ja.wikipedia.org/wiki/%E6%AD%A2%E3%81%BE%E3%81%A3%E3%81%A6%E3%81%84%E3%81%9F%E6%99%82%E8%A8%88%E3%81%8C%E4%BB%8A%E5%8B%95%E3%81%8D%E5%87%BA%E3%81%97%E3%81%9F"
            },
            {
                title: "PV/CM",
                href: "https://zard-lab.net/pv/album/al10"
            }
        ]
    },


    {
        type: "album",
        id: "al11",
        order: "11th",
        category: null,
        title: "Kimi to no Distance",
        japaneseTitle: "君とのDistance",
        releases: [
            {
                format: "CD",
                label: "B-Gram Records",
                catalog: "JBCJ-9012",
                edition: null,
                released: "2005.09.07"
            },
            {
                format: "CD",
                label: "B-Gram Records",
                catalog: "JBCJ-9079",
                edition: "30th Anniversary Remasterd",
                released: "2021.09.15"
            }
        ],
        cover: {
            src: "assets/disc_photo/al/al11.jpg"
        },
        tracks: [
            {
                disc: null,
                track: 1,
                title: "Natsu wo Matsu Sail (Ho) no You ni",
                japaneseTitle: "夏を待つセイル(帆)のように",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Nationwide Toho Youga-kei Roadshow “Meitantei Conan Movie 09: Suihei Senjou no Strategy”（名探偵コナン 水平線上の陰謀）Theme Song"
                ]
            },
            {
                disc: null,
                track: 2,
                title: "Sayonara made no Distance",
                japaneseTitle: "サヨナラまでのディスタンス",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 3,
                title: "Kakegae no Nai Mono",
                japaneseTitle: "かけがえのないもの",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Satoru Kobayashi",
                karaoke: false,
                tieup: [
                    "TBS TV Network dating variety show “Koisuru Hanikami!”（恋するハニカミ!）Theme Song"
                ]
            },
            {
                disc: null,
                track: 4,
                title: "Kyou wa Yukkuri Hanasou",
                japaneseTitle: "今日はゆっくり話そう",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "Gekkeikan “Tsuki”（月）CM Song"
                ]
            },
            {
                disc: null,
                track: 5,
                title: "Kimi to no Fureai",
                japaneseTitle: "君とのふれあい",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 6,
                title: "Separate Ways",
                japaneseTitle: "セパレート・ウェイズ",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Hirohito Furui",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 7,
                title: "Last Good-bye",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Yoshio Tatano / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 8,
                title: "Hoshi no Kagayaki yo",
                japaneseTitle: "星のかがやきよ",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network anime “Meitantei Conan”（名探偵コナン）Opening Theme"
                ]
            },
            {
                disc: null,
                track: 9,
                title: "Tsuki ni Negai wo",
                japaneseTitle: "月に願いを",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Satoru Kobayashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 10,
                title: "Anata to Tomo ni Ikite Yuku",
                japaneseTitle: "あなたと共に生きてゆく",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Satoru Kobayashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 11,
                title: "I can't tell",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 12,
                title: "good-night sweet heart",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Akihito Tokunaga / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 13,
                title: "Kimi to Kyou no Koto wo Isshou Wasurenai",
                japaneseTitle: "君と今日の事を一生忘れない",
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: null
            }
        ],
        related: [
            {
                title: "Wiki",
                href: "https://ja.wikipedia.org/wiki/%E5%90%9B%E3%81%A8%E3%81%AEDistance"
            },
            {
                title: "PV/CM",
                href: "https://zard-lab.net/pv/album/al11"
            }
        ]
    },


    {
        type: "album",
        id: "best03",
        order: null,
        category: "Best",
        title: "Golden Best ~15th Anniversary~",
        japaneseTitle: null,
        releases: [
            {
                format: "2CD+DVD",
                label: "B-Gram Records",
                catalog: "JBCJ-9013-14",
                edition: "Limited AQUA ~Summer~ Edition",
                released: "2006.10.25"
            },
            {
                format: "2CD+DVD",
                label: "B-Gram Records",
                catalog: "JBCJ-9015-16",
                edition: "Limited CRYSTAL ~Autumn to Winter~ Edition",
                released: "2006.10.25"
            },
            {
                format: "2CD+DVD",
                label: "B-Gram Records",
                catalog: "JBCJ-9017-18",
                edition: "Limited DREAM ~Spring~ Edition",
                released: "2006.10.25"
            },
            {
                format: "2CD",
                label: "B-Gram Records",
                catalog: "JBCJ-9019-20",
                edition: "Regular Edition",
                released: "2006.10.25"
            },
            {
                format: "4LP",
                label: "B-Gram Records",
                catalog: "JBJJ-9001-04",
                edition: "Golden Best ~35th Anniversary Vinyl Edition~",
                released: "2026.02.04"
            }
        ],
        cover: {
            src: "assets/disc_photo/al/best03.jpg"
        },
        tracks: [
            {
                disc: 1,
                track: 1,
                title: "Good-bye My Loneliness",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Fuji TV Network drama “Kekkon no Risou to Genjitsu”（結婚の理想と現実）Theme Song",
                    "Clarion（クラリオン）Karaoke CF Song"
                ]
            },
            {
                disc: 1,
                track: 2,
                title: "Nemurenai Yoru wo Daite",
                japaneseTitle: "眠れない夜を抱いて",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi, Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "TV Asahi Network wide show “Tonight”（トゥナイト）Ending Theme",
                    "TV Asahi Network drama “Love Story wo Kimi ni '92 〜Nemurenai Yoru wo Daite〜”（ラブストーリーを君に'92〜眠れない夜を抱いて〜）Theme Song"
                ]
            },
            {
                disc: 1,
                track: 3,
                title: "IN MY ARMS TONIGHT",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Michiya Haruhata / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "TBS TV Network drama “Gakkou ga Abunai”（学校があぶない）Ending Theme"
                ]
            },
            {
                disc: 1,
                track: 4,
                title: "Makenaide",
                japaneseTitle: "負けないで",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Fuji TV Network drama “Bokutachi no Drama Series”（ボクたちのドラマシリーズ）“Shiratori Reiko de Gozaimasu! Season 1”（白鳥麗子でございます! 第1シリーズ）Ending Theme",
                    "TV Saitama “Sydney 2000 Olympic Asian Qualifiers Send-Off Match”（シドニーオリンピック2000アジア地区予選 壮行試合）Theme Song",
                    "Nippon TV Network “13th All Japan High School Quiz Championship”（第13回全国高等学校クイズ選手権）Ending Theme",
                    "NTT DoCoMo Vancouver Olympics-related “Ou'en in Vancouver-hen”（応援 in バンクーバー篇）CM Song from February 10, 2010"
                ]
            },
            {
                disc: 1,
                track: 5,
                title: "Kimi ga Inai",
                japaneseTitle: "君がいない",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network drama “Kanojo no Kirai na Kanojo”（彼女の嫌いな彼女）Theme Song"
                ]
            },
            {
                disc: 1,
                track: 6,
                title: "Yureru Omoi",
                japaneseTitle: "揺れる想い",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Otsuka Pharmaceutical “Pocari Sweat” CM Song",
                    "Chiba TV Network music program' “MU-GEN〜Music Generations〜” October 2006 Opening Theme",
                    "Spotify (@SpotifyJP) “Anata no Hibi ni Ongaku wo: Jikka no Katazuke-hen 30-byou”（「あなたの日々に音楽を」実家の片付け篇 30秒）TV CM Song"
                ]
            },
            {
                disc: 1,
                track: 7,
                title: "Mou Sukoshi Ato Sukoshi...",
                japaneseTitle: "もう少し あと少し…",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "TV Asahi Network drama “Lullaby Keiji '93”（ララバイ刑事'93）Ending Theme"
                ]
            },
            {
                disc: 1,
                track: 8,
                title: "Kitto Wasurenai",
                japaneseTitle: "きっと忘れない",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Fuji TV Network drama “Bokutachi no Drama Series”（ボクたちのドラマシリーズ）“Shiratori Reiko de Gozaimasu! Season 2”（白鳥麗子でございます! 第2シリーズ）Ending Theme"
                ]
            },
            {
                disc: 1,
                track: 9,
                title: "Kono Ai ni Oyogi Tsukarete mo",
                japaneseTitle: "この愛に泳ぎ疲れても",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Kansai TV/Fuji TV Network drama “Ai to Giwaku no Suspense”（愛と疑惑のサスペンス）Opening Theme"
                ]
            },
            {
                disc: 1,
                track: 10,
                title: "Oh my love",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 1,
                track: 11,
                title: "Konna ni Soba ni Iru no ni",
                japaneseTitle: "こんなにそばに居るのに",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Boutique JOY（ブティックJOY）TV-CF Image Song"
                ]
            },
            {
                disc: 1,
                track: 12,
                title: "Anata wo Kanjiteitai",
                japaneseTitle: "あなたを感じていたい",
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Tetsuro Oda",
                karaoke: false,
                tieup: [
                    "NTT DoCoMo pager “Palfy V”（パルフィー V）CM Song"
                ]
            },
            {
                disc: 1,
                track: 13,
                title: "Ai ga Mienai",
                japaneseTitle: "愛が見えない",
                credit: "Lyrics: Izumi Sakai / Music: Masazumi Ozawa / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Bristol-Myers Squibb “SEA BREEZE '95” CM Song"
                ]
            },
            {
                disc: 1,
                track: 14,
                title: "Sayonara wa Ima mo Kono Mune ni Imasu",
                japaneseTitle: "サヨナラは今もこの胸に居ます",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Toei “Bokutachi no Eiga Series”（ぼくたちの映画シリーズ）film “Shiratori Reiko de Gozaimasu!”（白鳥麗子でございます!）Theme Song",
                    "Nationwide 28-Station Network program “J-ROCK ARTIST Count Down 50” Ending Theme"
                ]
            },
            {
                disc: 2,
                track: 1,
                title: "My Friend",
                japaneseTitle: "マイ フレンド",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "TV Asahi Network anime “SLAM DUNK”（スラムダンク）4th Ending Theme"
                ]
            },
            {
                disc: 2,
                track: 2,
                title: "Kokoro wo Hiraite",
                japaneseTitle: "心を開いて",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Otsuka Pharmaceutical “Pocari Sweat” CM Song",
                    "Mitsubishi Motors Corporation ⑭ CM Song"
                ]
            },
            {
                disc: 2,
                track: 3,
                title: "Today is another day",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Nippon TV anime special “YAWARA! Zutto Kimi no Koto ga…”（YAWARA! ずっと君のことが…）Theme Song"
                ]
            },
            {
                disc: 2,
                track: 4,
                title: "Don't you see!",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Fuji TV Network anime “Dragon Ball GT”（ドラゴンボールGT）2nd Ending Theme"
                ]
            },
            {
                disc: 2,
                track: 5,
                title: "Eien",
                japaneseTitle: "永遠",
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network drama “Shitsurakuen”（失楽園）Theme Song",
                    "Canon “NEW EOS Kiss” CM Song"
                ]
            },
            {
                disc: 2,
                track: 6,
                title: "My Baby Grand ~Nukumori ga Hoshikute~",
                japaneseTitle: "My Baby Grand～ぬくもりが欲しくて～",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "NTT DoCoMo “DoCoMo '97 Winter”（ドコモ ’97-冬）CM Song"
                ]
            },
            {
                disc: 2,
                track: 7,
                title: "Unmei no Roulette Mawashite",
                japaneseTitle: "運命のルーレット廻して",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network anime “Meitantei Conan”（名探偵コナン）Opening Theme"
                ]
            },
            {
                disc: 2,
                track: 8,
                title: "Get U're Dream",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "NHK Sydney Olympics Broadcast Theme Song"
                ]
            },
            {
                disc: 2,
                track: 9,
                title: "Motto Chikaku de Kimi no Yokogao Mitetai",
                japaneseTitle: "もっと近くで君の横顔見ていたい",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Gekkeikan “Tsuki”（月）CM Song"
                ]
            },
            {
                disc: 2,
                track: 10,
                title: "Kyou wa Yukkuri Hanasou",
                japaneseTitle: "今日はゆっくり話そう",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "Gekkeikan “Tsuki”（月）CM Song"
                ]
            },
            {
                disc: 2,
                track: 11,
                title: "Hoshi no Kagayaki yo",
                japaneseTitle: "星のかがやきよ",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network anime “Meitantei Conan”（名探偵コナン）Opening Theme"
                ]
            },
            {
                disc: 2,
                track: 12,
                title: "Natsu wo Matsu Sail (Ho) no You ni",
                japaneseTitle: "夏を待つセイル(帆)のように",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Nationwide Toho Youga-kei Roadshow “Meitantei Conan Movie 09: Suihei Senjou no Strategy”（名探偵コナン 水平線上の陰謀）Theme Song"
                ]
            },
            {
                disc: 2,
                track: 13,
                title: "Heart ni Hi wo Tsukete",
                japaneseTitle: "ハートに火をつけて",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "TBS TV Network “Ai no Gekijou”（愛の劇場）drama “Suteki ni Common!”（すてきにコモン!）Theme Song"
                ]
            }
        ],
        related: [
            {
                title: "Wiki",
                href: "https://ja.wikipedia.org/wiki/Golden_Best_%E3%80%9C15th_Anniversary%E3%80%9C"
            },
            {
                title: "PV/CM",
                href: "#"
            }
        ]
    },


    {
        type: "album",
        id: "selection03",
        order: null,
        category: "Selection",
        title: "Soffio di vento ~Best of IZUMI SAKAI Selection~",
        japaneseTitle: null,
        releases: [
            {
                format: "CD+DVD",
                label: "B-Gram Records",
                catalog: "JBCJ-9023",
                edition: "Bonus DVD: JBBJ-9023",
                released: "2007.08.15"
            }
        ],
        cover: {
            src: "assets/disc_photo/al/selection03.jpg"
        },
        tracks: [
            {
                disc: null,
                track: 1,
                title: "Ano Hohoemi wo Wasurenaide",
                japaneseTitle: "あの微笑みを忘れないで",
                credit: "Lyrics: Izumi Sakai / Music: Daria Kawashima / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Fuji TV Network “Kinyou Entertainment”（金曜エンタテイメント）drama series “Udemakuri Kangofu”（腕まくり看護婦）Theme Song"
                ]
            },
            {
                disc: null,
                track: 2,
                title: "Tasogare ni My Lonely Heart",
                japaneseTitle: "黄昏にMy Lonely Heart",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 3,
                title: "Ai ga Mienai",
                japaneseTitle: "愛が見えない",
                credit: "Lyrics: Izumi Sakai / Music: Masazumi Ozawa / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Bristol-Myers Squibb “SEA BREEZE '95” CM Song"
                ]
            },
            {
                disc: null,
                track: 4,
                title: "Sayonara wa Ima mo Kono Mune ni Imasu",
                japaneseTitle: "サヨナラは今もこの胸に居ます",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Toei “Bokutachi no Eiga Series”（ぼくたちの映画シリーズ）film “Shiratori Reiko de Gozaimasu!”（白鳥麗子でございます!）Theme Song",
                    "Nationwide 28-Station Network program “J-ROCK ARTIST Count Down 50” Ending Theme"
                ]
            },
            {
                disc: null,
                track: 5,
                title: "Hitori ga Suki",
                japaneseTitle: "ひとりが好き",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 6,
                title: "Anata ni Kaeritai",
                japaneseTitle: "あなたに帰りたい",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 7,
                title: "So Together",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Daria Kawashima / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 8,
                title: "Tooi Hoshi wo Kazoete",
                japaneseTitle: "遠い星を数えて",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 9,
                title: "Tooi Hi no Nostalgia",
                japaneseTitle: "遠い日のNostalgia",
                credit: "Lyrics: Izumi Sakai / Music: Eisuke Mochizuki / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 10,
                title: "Rainen no Natsu mo",
                japaneseTitle: "来年の夏も",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: null,
                track: 11,
                title: "Kakegae no Nai Mono",
                japaneseTitle: "かけがえのないもの",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Satoru Kobayashi",
                karaoke: false,
                tieup: [
                    "TBS TV Network dating variety show “Koisuru Hanikami!”（恋するハニカミ!）Theme Song"
                ]
            },
            {
                disc: null,
                track: 12,
                title: "Boy",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Yomiuri TV-produced film “Natsu no Niwa 〜The Friends〜”（夏の庭〜The Friends〜）Ending Theme"
                ]
            },
            {
                disc: null,
                track: 13,
                title: "Mitsumete Itai ne",
                japaneseTitle: "見つめていたいね",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Nippon TV anime special “YAWARA! Zutto Kimi no Koto ga…”（YAWARA! ずっと君のことが…）Insert Song"
                ]
            }
        ],
        related: [
            {
                title: "Wiki",
                href: "https://ja.wikipedia.org/wiki/Soffio_di_vento_%E3%80%9CBest_of_IZUMI_SAKAI_Selection%E3%80%9C"
            },
            {
                title: "PV/CM",
                href: "#"
            }
        ]
    },


    {
        type: "album",
        id: "selection04",
        order: null,
        category: "Selection",
        title: "Brezza di mare ~dedicated to IZUMI SAKAI~",
        japaneseTitle: null,
        releases: [
            {
                format: "CD+DVD",
                label: "B-Gram Records",
                catalog: "JBCJ-9024",
                edition: "Bonus DVD: JBBJ-9024",
                released: "2007.08.15"
            }
        ],
        cover: {
            src: "assets/disc_photo/al/selection04.jpg"
        },
        tracks: [
            {
                disc: null,
                track: 1,
                title: "Hitomi Tojite",
                japaneseTitle: "瞳閉じて",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "Fuji TV Network sports program “Kandou Factory Suporuto!”（感動ファクトリー すぽると!）Image Song"
                ]
            },
            {
                disc: null,
                track: 2,
                title: "Ashita wo Yume Mite",
                japaneseTitle: "明日を夢見て",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Satoru Kobayashi",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network anime “Meitantei Conan”（名探偵コナン）Ending Theme"
                ]
            },
            {
                disc: null,
                track: 3,
                title: "Kaze ga Toori Nukeru Machi he",
                japaneseTitle: "風が通り抜ける街へ",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "Japan Racing Association “'97 Summer JRA” Campaign Song"
                ]
            },
            {
                disc: null,
                track: 4,
                title: "I'm in love",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Tower Records Super Store Shibuya grand-opening commemorative song"
                ]
            },
            {
                disc: null,
                track: 5,
                title: "Kimi ga Inai (B-version)",
                japaneseTitle: "君がいない (B-version)",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network drama “Kanojo no Kirai na Kanojo”（彼女の嫌いな彼女）Theme Song"
                ]
            },
            {
                disc: null,
                track: 6,
                title: "Mou Sagasanai",
                japaneseTitle: "もう探さない",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "TV Asahi Network drama “Shichinin no Onna Bengoshi II”（七人の女弁護士II）Theme Song"
                ]
            },
            {
                disc: null,
                track: 7,
                title: "promised you",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Cybersound",
                karaoke: false,
                tieup: [
                    "TV Asahi Network two-hour drama program “Doyou Wide Gekijou”（土曜ワイド劇場）Ending Theme"
                ]
            },
            {
                disc: null,
                track: 8,
                title: "Kanashii Hodo Anata ga Suki",
                japaneseTitle: "悲しいほど貴方が好き",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network anime “Meitantei Conan”（名探偵コナン）Ending Theme"
                ]
            },
            {
                disc: null,
                track: 9,
                title: "Kimi ga Ita kara (di mare version)",
                japaneseTitle: "君がいたから (di mare version)",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Fuji TV Network drama “Kagayaku Toki no Naka de”（輝く季節の中で）Insert Song"
                ]
            },
            {
                disc: null,
                track: 10,
                title: "Tomatteita Tokei ga Ima Ugokidashita",
                japaneseTitle: "止まっていた時計が今動き出した",
                credit: "Lyrics: Izumi Sakai / Music: Yuri Nakamura / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "TV Asahi drama “Igi Ari! Onna Bengoshi Ooka Norie”（異議あり! 女弁護士大岡法江）Theme Song"
                ]
            },
            {
                disc: null,
                track: 11,
                title: "Sawayakana Kimi no Kimochi",
                japaneseTitle: "さわやかな君の気持ち",
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "Nivea-Kao “8×4 (Eight Four)” CM Song"
                ]
            },
            {
                disc: null,
                track: 12,
                title: "Shoujo no Koro ni Modotta Mitai ni",
                japaneseTitle: "少女の頃に戻ったみたいに",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Nationwide Toho Youga-kei Roadshow “Meitantei Conan Movie 02: 14-banme no Target”（名探偵コナン １４番目の標的）Theme Song"
                ]
            },
            {
                disc: null,
                track: 13,
                title: "Sekai wa Kitto Mirai no Naka (di mare version)",
                japaneseTitle: "世界はきっと未来の中 (di mare version)",
                credit: "Lyrics: Izumi Sakai / Music: Yuichiro Iwai / Arrangement: Akihito Tokunaga, Hirohito Furui, Kenji Shiojiri",
                karaoke: false,
                tieup: [
                    "TV Asahi Network drama “Maiko-san wa Meitantei!”（舞妓さんは名探偵!）Theme Song"
                ]
            },
            {
                disc: null,
                track: 14,
                title: "Itsuka wa...",
                japaneseTitle: "いつかは…",
                credit: "Lyrics & Music: Izumi Sakai / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            }
        ],
        related: [
            {
                title: "Wiki",
                href: "https://ja.wikipedia.org/wiki/Brezza_di_mare_%E3%80%9Cdedicated_to_IZUMI_SAKAI%E3%80%9C"
            },
            {
                title: "PV/CM",
                href: "#"
            }
        ]
    },


    {
        type: "album",
        id: "best04",
        order: null,
        category: "Best",
        title: "ZARD Request Best ~beautiful memory~",
        japaneseTitle: null,
        releases: [
            {
                format: "2CD+DVD",
                label: "B-Gram Records",
                catalog: "JBCJ-9027-28",
                edition: "Bonus DVD: JBBB-9027",
                released: "2008.01.23"
            }
        ],
        cover: {
            src: "assets/disc_photo/al/best04.jpg"
        },
        tracks: [
            {
                disc: 1,
                track: 1,
                title: "Glorious Mind",
                japaneseTitle: "グロリアス マインド",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network anime “Meitantei Conan”（名探偵コナン）Opening Theme",
                    "TV Asahi Network news program “Super J Channel”（スーパーJチャンネル）Ending Theme for the December 14, 2007 Broadcast",
                    "Chiba TV Network music information program “MU-GEN〜Music Generations〜” December 2007 Opening Theme"
                ]
            },
            {
                disc: 1,
                track: 2,
                title: "Ready, Go!",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Daria Kawashima / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: 1,
                track: 3,
                title: "Totsuzen",
                japaneseTitle: "突然",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: 1,
                track: 4,
                title: "Kimi ni Aitaku Nattara...",
                japaneseTitle: "君に逢いたくなったら…",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "TBS TV Network drama “Risou no Kekkon”（理想の結婚）Opening Theme"
                ]
            },
            {
                disc: 1,
                track: 5,
                title: "High Heel Nugi Sutete",
                japaneseTitle: "ハイヒール脱ぎ捨てて",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Fuji TV “OIOI TOKYO TASTE ROOMS” Ending Theme"
                ]
            },
            {
                disc: 1,
                track: 6,
                title: "Konna ni Aishitemo",
                japaneseTitle: "こんなに愛しても",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 1,
                track: 7,
                title: "Futari no Natsu",
                japaneseTitle: "二人の夏",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 1,
                track: 8,
                title: "Ashita Moshi Kimi ga Kowaretemo",
                japaneseTitle: "明日もし君が壊れても",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: 1,
                track: 9,
                title: "Kimi to no Fureai",
                japaneseTitle: "君とのふれあい",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: 1,
                track: 10,
                title: "Toki no Tsubasa",
                japaneseTitle: "時間（とき）の翼",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Satoru Kobayashi",
                karaoke: false,
                tieup: [
                    "NTT West “FLET'S ISDN”（フレッツISDN）CF Song"
                ]
            },
            {
                disc: 1,
                track: 11,
                title: "Kakegae no Nai Mono",
                japaneseTitle: "かけがえのないもの",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Satoru Kobayashi",
                karaoke: false,
                tieup: [
                    "TBS TV Network dating variety show “Koisuru Hanikami!”（恋するハニカミ!）Theme Song"
                ]
            },
            {
                disc: 1,
                track: 12,
                title: "Yureru Omoi ('07 Live Ver.)",
                japaneseTitle: "揺れる想い ('07 Live Ver.)",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi / Live-performance adaptation: Uncredited",
                karaoke: false,
                tieup: [
                    "Otsuka Pharmaceutical “Pocari Sweat” CM Song",
                    "Chiba TV Network music program' “MU-GEN〜Music Generations〜” October 2006 Opening Theme",
                    "Spotify (@SpotifyJP) “Anata no Hibi ni Ongaku wo: Jikka no Katazuke-hen 30-byou”（「あなたの日々に音楽を」実家の片付け篇 30秒）TV CM Song"
                ]
            },
            {
                disc: 1,
                track: 13,
                title: "Eien ('07 Live Ver.)",
                japaneseTitle: "永遠 ('07 Live Ver.)",
                credit: "Lyrics: Izumi Sakai / Music: Akihito Tokunaga / Arrangement: Akihito Tokunaga / Live-performance adaptation: Uncredited",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network drama “Shitsurakuen”（失楽園）Theme Song",
                    "Canon “NEW EOS Kiss” CM Song"
                ]
            },
            {
                disc: 1,
                track: 14,
                title: "My Friend ('07 Live Ver.)",
                japaneseTitle: "マイ フレンド ('07 Live Ver.)",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama / Live-performance adaptation: Uncredited",
                karaoke: false,
                tieup: [
                    "TV Asahi Network anime “SLAM DUNK”（スラムダンク）4th Ending Theme"
                ]
            },
            {
                disc: 1,
                track: 15,
                title: "Don't you see! ('07 Live Ver.)",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Takeshi Hayama / Live-performance adaptation: Uncredited",
                karaoke: false,
                tieup: [
                    "Fuji TV Network anime “Dragon Ball GT”（ドラゴンボールGT）2nd Ending Theme"
                ]
            },
            {
                disc: 2,
                track: 1,
                title: "Iki mo Dekinai",
                japaneseTitle: "息もできない",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Fuji TV Network anime “Chuuka Ichiban!”（中華一番!）2nd Opening Theme"
                ]
            },
            {
                disc: 2,
                track: 2,
                title: "Atarashii Door ~Fuyu no Himawari~",
                japaneseTitle: "新しいドア～冬のひまわり～",
                credit: "Lyrics: Izumi Sakai / Music: Masato Kitano / Arrangement: Hirohito Furui",
                karaoke: false,
                tieup: [
                    "Sapporo Breweries “Fuyu Monogatari”（冬物語）CM Song"
                ]
            },
            {
                disc: 2,
                track: 3,
                title: "Forever you",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Documentary film “Princess Diana” Theme Song"
                ]
            },
            {
                disc: 2,
                track: 4,
                title: "Ano Hohoemi wo Wasurenaide",
                japaneseTitle: "あの微笑みを忘れないで",
                credit: "Lyrics: Izumi Sakai / Music: Daria Kawashima / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Fuji TV Network “Kinyou Entertainment”（金曜エンタテイメント）drama series “Udemakuri Kangofu”（腕まくり看護婦）Theme Song"
                ]
            },
            {
                disc: 2,
                track: 5,
                title: "Fushigi ne...",
                japaneseTitle: "不思議ね…",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Nippon TV Network quiz show “Magical Zunou Power!!”（マジカル頭脳パワー!!）Theme Song"
                ]
            },
            {
                disc: 2,
                track: 6,
                title: "Awai Yuki ga Tokete",
                japaneseTitle: "淡い雪がとけて",
                credit: "Lyrics: Izumi Sakai / Music: Hiroshi Terao / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: null
            },
            {
                disc: 2,
                track: 7,
                title: "Photograph",
                japaneseTitle: "フォトグラフ",
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "Nippon TV drama “Haru no Suspense Special Keijitachi no Natsu”（春のサスペンススペシャル 刑事たちの夏）Theme Song"
                ]
            },
            {
                disc: 2,
                track: 8,
                title: "hero",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Konami game “Tokimeki Memorial 3 ~Yakusoku no Ano Basho de~”（ときめきメモリアル3 〜約束のあの場所で〜）Sweet Ending Theme"
                ]
            },
            {
                disc: 2,
                track: 9,
                title: "Love is Gone",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Masaaki Watanuki / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network drama “Shitsurakuen: Tokubetsu-hen”（失楽園・特別編）Theme Song"
                ]
            },
            {
                disc: 2,
                track: 10,
                title: "Season",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: 2,
                track: 11,
                title: "Ame ni Nurete",
                japaneseTitle: "雨に濡れて",
                credit: "Lyrics: Izumi Sakai, Show Wesugi / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 2,
                track: 12,
                title: "Kokoro wo Hiraite ('07 Live Ver.)",
                japaneseTitle: "心を開いて ('07 Live Ver.)",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Daisuke Ikeda / Live-performance adaptation: Uncredited",
                karaoke: false,
                tieup: [
                    "Otsuka Pharmaceutical “Pocari Sweat” CM Song",
                    "Mitsubishi Motors Corporation ⑭ CM Song"
                ]
            },
            {
                disc: 2,
                track: 13,
                title: "Shoujo no Koro ni Modotta Mitai ni ('07 Live Ver.)",
                japaneseTitle: "少女の頃に戻ったみたいに ('07 Live Ver.)",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Daisuke Ikeda / Live-performance adaptation: Uncredited",
                karaoke: false,
                tieup: [
                    "Nationwide Toho Youga-kei Roadshow “Meitantei Conan Movie 02: 14-banme no Target”（名探偵コナン １４番目の標的）Theme Song"
                ]
            },
            {
                disc: 2,
                track: 14,
                title: "Kimi ga Inai ('07 Live Ver.)",
                japaneseTitle: "君がいない ('07 Live Ver.)",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi / Live-performance adaptation: Uncredited",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network drama “Kanojo no Kirai na Kanojo”（彼女の嫌いな彼女）Theme Song"
                ]
            },
            {
                disc: 2,
                track: 15,
                title: "Makenaide ('07 Live Ver.)",
                japaneseTitle: "負けないで ('07 Live Ver.)",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama / Live-performance adaptation: Uncredited",
                karaoke: false,
                tieup: [
                    "Fuji TV Network drama “Bokutachi no Drama Series”（ボクたちのドラマシリーズ）“Shiratori Reiko de Gozaimasu! Season 1”（白鳥麗子でございます! 第1シリーズ）Ending Theme",
                    "TV Saitama “Sydney 2000 Olympic Asian Qualifiers Send-Off Match”（シドニーオリンピック2000アジア地区予選 壮行試合）Theme Song",
                    "Nippon TV Network “13th All Japan High School Quiz Championship”（第13回全国高等学校クイズ選手権）Ending Theme",
                    "NTT DoCoMo Vancouver Olympics-related “Ou'en in Vancouver-hen”（応援 in バンクーバー篇）CM Song from February 10, 2010"
                ]
            }
        ],
        related: [
            {
                title: "Wiki",
                href: "https://ja.wikipedia.org/wiki/ZARD_Request_Best_%E3%80%9Cbeautiful_memory%E3%80%9C"
            },
            {
                title: "PV/CM",
                href: "#"
            }
        ]
    },


    {
        type: "album",
        id: "sgcollection01",
        order: null,
        category: null,
        title: "ZARD SINGLE COLLECTION ~20th ANNIVERSARY~",
        japaneseTitle: null,
        releases: [
            {
                format: "7CD",
                label: "B-Gram Records",
                catalog: "JBCD-2011",
                edition: "6CD+Bonus Disc / Digital Remaster",
                released: "2011.02.10"
            }
        ],
        cover: {
            src: "assets/disc_photo/al/sgcollection01.jpg"
        },
        tracks: [
            {
                disc: 1,
                track: 1,
                title: "Good-bye My Loneliness",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Fuji TV Network drama “Kekkon no Risou to Genjitsu”（結婚の理想と現実）Theme Song",
                    "Clarion（クラリオン）Karaoke CF Song"
                ]
            },
            {
                disc: 1,
                track: 2,
                title: "Ai wa Kurayami no Naka de",
                japaneseTitle: "愛は暗闇の中で",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: ZARD, Hiroshi Terao",
                karaoke: false,
                tieup: null
            },
            {
                disc: 1,
                track: 3,
                title: "Fushigi ne...",
                japaneseTitle: "不思議ね…",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Nippon TV Network quiz show “Magical Zunou Power!!”（マジカル頭脳パワー!!）Theme Song"
                ]
            },
            {
                disc: 1,
                track: 4,
                title: "Sunao ni Ienakute",
                japaneseTitle: "素直に言えなくて",
                credit: "Lyrics & Music: Izumi Sakai / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 1,
                track: 5,
                title: "Mou Sagasanai",
                japaneseTitle: "もう探さない",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "TV Asahi Network drama “Shichinin no Onna Bengoshi II”（七人の女弁護士II）Theme Song"
                ]
            },
            {
                disc: 1,
                track: 6,
                title: "Konna ni Aishitemo",
                japaneseTitle: "こんなに愛しても",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 1,
                track: 7,
                title: "Nemurenai Yoru wo Daite",
                japaneseTitle: "眠れない夜を抱いて",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi, Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "TV Asahi Network wide show “Tonight”（トゥナイト）Ending Theme",
                    "TV Asahi Network drama “Love Story wo Kimi ni '92 〜Nemurenai Yoru wo Daite〜”（ラブストーリーを君に'92〜眠れない夜を抱いて〜）Theme Song"
                ]
            },
            {
                disc: 1,
                track: 8,
                title: "Dangerous Tonight",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 1,
                track: 9,
                title: "IN MY ARMS TONIGHT",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Michiya Haruhata / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "TBS TV Network drama “Gakkou ga Abunai”（学校があぶない）Ending Theme"
                ]
            },
            {
                disc: 1,
                track: 10,
                title: "Ase no Naka de CRY",
                japaneseTitle: "汗の中でCRY",
                credit: "Lyrics: Izumi Sakai / Music: Toshiya Matsukawa / Arrangement: Daisuke Ikeda, Masazumi Ozawa",
                karaoke: false,
                tieup: null
            },
            {
                disc: 1,
                track: 11,
                title: "Makenaide",
                japaneseTitle: "負けないで",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Fuji TV Network drama “Bokutachi no Drama Series”（ボクたちのドラマシリーズ）“Shiratori Reiko de Gozaimasu! Season 1”（白鳥麗子でございます! 第1シリーズ）Ending Theme",
                    "TV Saitama “Sydney 2000 Olympic Asian Qualifiers Send-Off Match”（シドニーオリンピック2000アジア地区予選 壮行試合）Theme Song",
                    "Nippon TV Network “13th All Japan High School Quiz Championship”（第13回全国高等学校クイズ選手権）Ending Theme",
                    "NTT DoCoMo Vancouver Olympics-related “Ou'en in Vancouver-hen”（応援 in バンクーバー篇）CM Song from February 10, 2010"
                ]
            },
            {
                disc: 1,
                track: 12,
                title: "Stray Love",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Daria Kawashima / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 1,
                track: 13,
                title: "Kimi ga Inai",
                japaneseTitle: "君がいない",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network drama “Kanojo no Kirai na Kanojo”（彼女の嫌いな彼女）Theme Song"
                ]
            },
            {
                disc: 1,
                track: 14,
                title: "Watashi dake Mitsumete",
                japaneseTitle: "私だけ見つめて",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 1,
                track: 15,
                title: "Yureru Omoi",
                japaneseTitle: "揺れる想い",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Otsuka Pharmaceutical “Pocari Sweat” CM Song",
                    "Chiba TV Network music program' “MU-GEN〜Music Generations〜” October 2006 Opening Theme",
                    "Spotify (@SpotifyJP) “Anata no Hibi ni Ongaku wo: Jikka no Katazuke-hen 30-byou”（「あなたの日々に音楽を」実家の片付け篇 30秒）TV CM Song"
                ]
            },
            {
                disc: 1,
                track: 16,
                title: "Just for you",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi, Daisuke Ikeda",
                karaoke: false,
                tieup: null
            },
            {
                disc: 2,
                track: 1,
                title: "Mou Sukoshi Ato Sukoshi...",
                japaneseTitle: "もう少し あと少し…",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "TV Asahi Network drama “Lullaby Keiji '93”（ララバイ刑事'93）Ending Theme"
                ]
            },
            {
                disc: 2,
                track: 2,
                title: "Kanariya",
                japaneseTitle: "カナリヤ",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 2,
                track: 3,
                title: "Kitto Wasurenai",
                japaneseTitle: "きっと忘れない",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Fuji TV Network drama “Bokutachi no Drama Series”（ボクたちのドラマシリーズ）“Shiratori Reiko de Gozaimasu! Season 2”（白鳥麗子でございます! 第2シリーズ）Ending Theme"
                ]
            },
            {
                disc: 2,
                track: 4,
                title: "Tasogare ni My Lonely Heart",
                japaneseTitle: "黄昏にMy Lonely Heart",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 2,
                track: 5,
                title: "Kono Ai ni Oyogi Tsukarete mo",
                japaneseTitle: "この愛に泳ぎ疲れても",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Kansai TV/Fuji TV Network drama “Ai to Giwaku no Suspense”（愛と疑惑のサスペンス）Opening Theme"
                ]
            },
            {
                disc: 2,
                track: 6,
                title: "Boy",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Yomiuri TV-produced film “Natsu no Niwa 〜The Friends〜”（夏の庭〜The Friends〜）Ending Theme"
                ]
            },
            {
                disc: 2,
                track: 7,
                title: "Konna ni Soba ni Iru no ni",
                japaneseTitle: "こんなにそばに居るのに",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Boutique JOY（ブティックJOY）TV-CF Image Song"
                ]
            },
            {
                disc: 2,
                track: 8,
                title: "Anata no Sei ja Nai",
                japaneseTitle: "あなたのせいじゃない",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 2,
                track: 9,
                title: "Anata wo Kanjiteitai",
                japaneseTitle: "あなたを感じていたい",
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Tetsuro Oda",
                karaoke: false,
                tieup: [
                    "NTT DoCoMo pager “Palfy V”（パルフィー V）CM Song"
                ]
            },
            {
                disc: 2,
                track: 10,
                title: "Take me to your dream",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Daria Kawashima / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 2,
                track: 11,
                title: "Just believe in love",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Michiya Haruhata / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "TBS TV Network drama “Yureru Omoi”（揺れる想い）Theme Song"
                ]
            },
            {
                disc: 2,
                track: 12,
                title: "Ready, Go!",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Daria Kawashima / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: 2,
                track: 13,
                title: "Ai ga Mienai",
                japaneseTitle: "愛が見えない",
                credit: "Lyrics: Izumi Sakai / Music: Masazumi Ozawa / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Bristol-Myers Squibb “SEA BREEZE '95” CM Song"
                ]
            },
            {
                disc: 2,
                track: 14,
                title: "Teenage dream",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 2,
                track: 15,
                title: "Sayonara wa Ima mo Kono Mune ni Imasu",
                japaneseTitle: "サヨナラは今もこの胸に居ます",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Toei “Bokutachi no Eiga Series”（ぼくたちの映画シリーズ）film “Shiratori Reiko de Gozaimasu!”（白鳥麗子でございます!）Theme Song",
                    "Nationwide 28-Station Network program “J-ROCK ARTIST Count Down 50” Ending Theme"
                ]
            },
            {
                disc: 2,
                track: 16,
                title: "Nemuri",
                japaneseTitle: "眠り",
                credit: "Lyrics & Music: Izumi Sakai / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: null
            },
            {
                disc: 3,
                track: 1,
                title: "My Friend",
                japaneseTitle: "マイ フレンド",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "TV Asahi Network anime “SLAM DUNK”（スラムダンク）4th Ending Theme"
                ]
            },
            {
                disc: 3,
                track: 2,
                title: "Mezameta Asa wa...",
                japaneseTitle: "目覚めた朝は…",
                credit: "Lyrics: Izumi Sakai / Music: Mitsuyoshi Yonezawa / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: null
            },
            {
                disc: 3,
                track: 3,
                title: "Kokoro wo Hiraite",
                japaneseTitle: "心を開いて",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Otsuka Pharmaceutical “Pocari Sweat” CM Song",
                    "Mitsubishi Motors Corporation ⑭ CM Song"
                ]
            },
            {
                disc: 3,
                track: 4,
                title: "Change my mind",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: 3,
                track: 5,
                title: "Don't you see!",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Fuji TV Network anime “Dragon Ball GT”（ドラゴンボールGT）2nd Ending Theme"
                ]
            },
            {
                disc: 3,
                track: 6,
                title: "Kaeranu Jikan no Naka de",
                japaneseTitle: "帰らぬ時間の中で",
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "Nippon TV Network “Imahito”（いまひと）Theme Song"
                ]
            },
            {
                disc: 3,
                track: 7,
                title: "Kimi ni Aitaku Nattara...",
                japaneseTitle: "君に逢いたくなったら…",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "TBS TV Network drama “Risou no Kekkon”（理想の結婚）Opening Theme"
                ]
            },
            {
                disc: 3,
                track: 8,
                title: "Ai wo Shinjite Itai",
                japaneseTitle: "愛を信じていたい",
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: null
            },
            {
                disc: 3,
                track: 9,
                title: "Kaze ga Toori Nukeru Machi he",
                japaneseTitle: "風が通り抜ける街へ",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "Japan Racing Association “'97 Summer JRA” Campaign Song"
                ]
            },
            {
                disc: 3,
                track: 10,
                title: "Tooi Hoshi wo Kazoete",
                japaneseTitle: "遠い星を数えて",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: null
            },
            {
                disc: 3,
                track: 11,
                title: "Eien",
                japaneseTitle: "永遠",
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network drama “Shitsurakuen”（失楽園）Theme Song",
                    "Canon “NEW EOS Kiss” CM Song"
                ]
            },
            {
                disc: 3,
                track: 12,
                title: "I can't let go",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Hirohito Furui",
                karaoke: false,
                tieup: null
            },
            {
                disc: 3,
                track: 13,
                title: "My Baby Grand ~Nukumori ga Hoshikute~",
                japaneseTitle: "My Baby Grand～ぬくもりが欲しくて～",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "NTT DoCoMo “DoCoMo '97 Winter”（ドコモ ’97-冬）CM Song"
                ]
            },
            {
                disc: 3,
                track: 14,
                title: "Love is Gone",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Masaaki Watanuki / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network drama “Shitsurakuen: Tokubetsu-hen”（失楽園・特別編）Theme Song"
                ]
            },
            {
                disc: 3,
                track: 15,
                title: "Iki mo Dekinai",
                japaneseTitle: "息もできない",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Fuji TV Network anime “Chuuka Ichiban!”（中華一番!）2nd Opening Theme"
                ]
            },
            {
                disc: 3,
                track: 16,
                title: "Vintage",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: null
            },
            {
                disc: 4,
                track: 1,
                title: "Unmei no Roulette Mawashite",
                japaneseTitle: "運命のルーレット廻して",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network anime “Meitantei Conan”（名探偵コナン）Opening Theme"
                ]
            },
            {
                disc: 4,
                track: 2,
                title: "Shoujo no Koro ni Modotta Mitai ni",
                japaneseTitle: "少女の頃に戻ったみたいに",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Nationwide Toho Youga-kei Roadshow “Meitantei Conan Movie 02: 14-banme no Target”（名探偵コナン １４番目の標的）Theme Song"
                ]
            },
            {
                disc: 4,
                track: 3,
                title: "Atarashii Door ~Fuyu no Himawari~",
                japaneseTitle: "新しいドア～冬のひまわり～",
                credit: "Lyrics: Izumi Sakai / Music: Masato Kitano / Arrangement: Hirohito Furui",
                karaoke: false,
                tieup: [
                    "Sapporo Breweries “Fuyu Monogatari”（冬物語）CM Song"
                ]
            },
            {
                disc: 4,
                track: 4,
                title: "GOOD DAY",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Masaaki Watanuki / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Beautylabo “Natural Color”（ナチュラルカラー）CM Song"
                ]
            },
            {
                disc: 4,
                track: 5,
                title: "MIND GAMES",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Masaaki Watanuki / Arrangement: Masaaki Watanuki, Hirohito Furui",
                karaoke: false,
                tieup: [
                    "Fuji TV Network sports program “Pro Yakyuu News”（プロ野球ニュース）Image Song",
                    "Nippon Broadcasting System radio program “Show Up Nighter '99”（ショウアップナイター'99）Ending Theme"
                ]
            },
            {
                disc: 4,
                track: 6,
                title: "Hypnosis",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Hitoshi Okamoto",
                karaoke: false,
                tieup: null
            },
            {
                disc: 4,
                track: 7,
                title: "MIND GAMES (Redway Secret Mix)",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Masaaki Watanuki / Arrangement: Masaaki Watanuki, Hirohito Furui",
                karaoke: false,
                tieup: null
            },
            {
                disc: 4,
                track: 8,
                title: "Sekai wa Kitto Mirai no Naka",
                japaneseTitle: "世界はきっと未来の中",
                credit: "Lyrics: Izumi Sakai / Music: Yuichiro Iwai / Arrangement: Akihito Tokunaga, Hirohito Furui, Kenji Shiojiri",
                karaoke: false,
                tieup: [
                    "TV Asahi Network drama “Maiko-san wa Meitantei!”（舞妓さんは名探偵!）Theme Song"
                ]
            },
            {
                disc: 4,
                track: 9,
                title: "Itai Kurai Kimi ga Afureteiru yo",
                japaneseTitle: "痛いくらい君があふれているよ",
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Kenji Shiojiri",
                karaoke: false,
                tieup: [
                    "Nestlé Japan “NESCAFÉ moment”（ネスカフェモーメント）CM Song"
                ]
            },
            {
                disc: 4,
                track: 10,
                title: "Itai Kurai Kimi ga Afureteiru yo (Re-Mix)",
                japaneseTitle: "痛いくらい君があふれているよ (Re-Mix)",
                credit: "Lyrics: Izumi Sakai / Music: Kenji Shiojiri / Remix: FAST ALVY and ME-YA",
                karaoke: false,
                tieup: null
            },
            {
                disc: 4,
                track: 11,
                title: "Kono Namida Hoshi ni Nare",
                japaneseTitle: "この涙 星になれ",
                credit: "Lyrics: Izumi Sakai / Music: Yuichiro Iwai / Arrangement: Hirohito Furui",
                karaoke: false,
                tieup: [
                    "TV Asahi Network drama “Kasouken no Onna”（科捜研の女）Theme Song"
                ]
            },
            {
                disc: 4,
                track: 12,
                title: "O・mo・hi・de",
                japaneseTitle: "お・も・ひ・で",
                credit: "Lyrics: Izumi Sakai / Music: Hiroshi Terao / Arrangement: Hirohito Furui, Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "TV Asahi Network information program “Zeitaku na Kyuujitsu”（贅沢な休日）Theme Song",
                    "“Change IZU 2000!”（チェンジ伊豆2000!）Image Song"
                ]
            },
            {
                disc: 4,
                track: 13,
                title: "Get U're Dream",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "NHK Sydney Olympics Broadcast Theme Song"
                ]
            },
            {
                disc: 4,
                track: 14,
                title: "Get U're Dream (Version Two)",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: null
            },
            {
                disc: 4,
                track: 15,
                title: "Get U're Dream (Version Three)",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: YOKO Black. Stone",
                karaoke: false,
                tieup: null
            },
            {
                disc: 5,
                track: 1,
                title: "promised you",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Cybersound",
                karaoke: false,
                tieup: [
                    "TV Asahi Network two-hour drama program “Doyou Wide Gekijou”（土曜ワイド劇場）Ending Theme"
                ]
            },
            {
                disc: 5,
                track: 2,
                title: "The only truth I know is you",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: null
            },
            {
                disc: 5,
                track: 3,
                title: "Sawayakana Kimi no Kimochi",
                japaneseTitle: "さわやかな君の気持ち",
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "Nivea-Kao “8×4 (Eight Four)” CM Song"
                ]
            },
            {
                disc: 5,
                track: 4,
                title: "Dakishimete Ite",
                japaneseTitle: "抱きしめていて",
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "Konami PlayStation 2 game “Tokimeki Memorial 3 〜Yakusoku no Ano Basho de〜”（ときめきメモリアル3 ～約束のあの場所で～）Bitter Ending Theme",
                    "Konami game “Tokimeki Memorial 3 ~Yakusoku no Ano Basho de~”（ときめきメモリアル3 〜約束のあの場所で〜）Bitter Ending Theme"
                ]
            },
            {
                disc: 5,
                track: 5,
                title: "Seven Rainbow",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "Konami PlayStation 2 game “Tokimeki Memorial 3 〜Yakusoku no Ano Basho de〜”（ときめきメモリアル3 ～約束のあの場所で～）Opening Theme",
                    "Konami game “Tokimeki Memorial 3 ~Yakusoku no Ano Basho de~”（ときめきメモリアル3 〜約束のあの場所で〜）Opening Theme"
                ]
            },
            {
                disc: 5,
                track: 6,
                title: "Ashita wo Yume Mite",
                japaneseTitle: "明日を夢見て",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Satoru Kobayashi",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network anime “Meitantei Conan”（名探偵コナン）Ending Theme"
                ]
            },
            {
                disc: 5,
                track: 7,
                title: "Sagashi ni Ikou yo",
                japaneseTitle: "探しに行こうよ",
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: null
            },
            {
                disc: 5,
                track: 8,
                title: "Hitomi Tojite",
                japaneseTitle: "瞳閉じて",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "Fuji TV Network sports program “Kandou Factory Suporuto!”（感動ファクトリー すぽると!）Image Song"
                ]
            },
            {
                disc: 5,
                track: 9,
                title: "Itoshii Hito yo ~Na mo Naki Tabibito yo~",
                japaneseTitle: "愛しい人よ～名もなき旅人よ～",
                credit: "Lyrics: Izumi Sakai / Music: Yuichiro Iwai / Arrangement: Yoshinobu Ohga",
                karaoke: false,
                tieup: null
            },
            {
                disc: 5,
                track: 10,
                title: "Motto Chikaku de Kimi no Yokogao Mitetai",
                japaneseTitle: "もっと近くで君の横顔見ていたい",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Gekkeikan “Tsuki”（月）CM Song"
                ]
            },
            {
                disc: 5,
                track: 11,
                title: "Reset",
                japaneseTitle: "リセット",
                credit: "Lyrics: Izumi Sakai / Music: Makoto Miyoshi / Arrangement: Satoru Kobayashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 5,
                track: 12,
                title: "Kakegae no Nai Mono",
                japaneseTitle: "かけがえのないもの",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Satoru Kobayashi",
                karaoke: false,
                tieup: [
                    "TBS TV Network dating variety show “Koisuru Hanikami!”（恋するハニカミ!）Theme Song"
                ]
            },
            {
                disc: 5,
                track: 13,
                title: "Muga Muchuu",
                japaneseTitle: "無我夢中",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: night clubbers",
                karaoke: false,
                tieup: null
            },
            {
                disc: 5,
                track: 14,
                title: "Eien (What a beautiful moment Tour Opening Ver.)",
                japaneseTitle: "永遠 (What a beautiful moment Tour Opening Ver.)",
                credit: "Music: Akihito Tokunaga / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: null
            },
            {
                disc: 6,
                track: 1,
                title: "Kyou wa Yukkuri Hanasou",
                japaneseTitle: "今日はゆっくり話そう",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "Gekkeikan “Tsuki”（月）CM Song"
                ]
            },
            {
                disc: 6,
                track: 2,
                title: "Awai Yuki ga Tokete",
                japaneseTitle: "淡い雪がとけて",
                credit: "Lyrics: Izumi Sakai / Music: Hiroshi Terao / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: null
            },
            {
                disc: 6,
                track: 3,
                title: "Ame ga Furidasu Mae ni",
                japaneseTitle: "雨が降り出す前に",
                credit: "Lyrics: Izumi Sakai / Music: Yuichiro Iwai / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: 6,
                track: 4,
                title: "Hoshi no Kagayaki yo",
                japaneseTitle: "星のかがやきよ",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network anime “Meitantei Conan”（名探偵コナン）Opening Theme"
                ]
            },
            {
                disc: 6,
                track: 5,
                title: "Natsu wo Matsu Sail (Ho) no You ni",
                japaneseTitle: "夏を待つセイル(帆)のように",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Nationwide Toho Youga-kei Roadshow “Meitantei Conan Movie 09: Suihei Senjou no Strategy”（名探偵コナン 水平線上の陰謀）Theme Song"
                ]
            },
            {
                disc: 6,
                track: 6,
                title: "Kanashii Hodo Anata ga Suki",
                japaneseTitle: "悲しいほど貴方が好き",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network anime “Meitantei Conan”（名探偵コナン）Ending Theme"
                ]
            },
            {
                disc: 6,
                track: 7,
                title: "Karatto Ikou!",
                japaneseTitle: "カラッといこう!",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Fuji TV Network morning information program “Mezamashi Doyoubi”（めざましどようび）January–March 2006 Theme Song"
                ]
            },
            {
                disc: 6,
                track: 8,
                title: "Heart ni Hi wo Tsukete",
                japaneseTitle: "ハートに火をつけて",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "TBS TV Network “Ai no Gekijou”（愛の劇場）drama “Suteki ni Common!”（すてきにコモン!）Theme Song"
                ]
            },
            {
                disc: 6,
                track: 9,
                title: "Kimi e no Blues",
                japaneseTitle: "君へのブルース",
                credit: "Lyrics & Music: Izumi Sakai / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: 6,
                track: 10,
                title: "Glorious Mind",
                japaneseTitle: "グロリアス マインド",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network anime “Meitantei Conan”（名探偵コナン）Opening Theme",
                    "TV Asahi Network news program “Super J Channel”（スーパーJチャンネル）Ending Theme for the December 14, 2007 Broadcast",
                    "Chiba TV Network music information program “MU-GEN〜Music Generations〜” December 2007 Opening Theme"
                ]
            },
            {
                disc: 6,
                track: 11,
                title: "Sagashi ni Ikou yo (2007 version)",
                japaneseTitle: "探しに行こうよ (2007 version)",
                credit: "Lyrics: Izumi Sakai / Music: Akihito Tokunaga / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: 6,
                track: 12,
                title: "Ai wo Shinjite Itai (2007 version)",
                japaneseTitle: "愛を信じていたい (2007 version)",
                credit: "Lyrics: Izumi Sakai / Music: Akihito Tokunaga / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: 6,
                track: 13,
                title: "Tsubasa wo Hirogete",
                japaneseTitle: "翼を広げて",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Nationwide Toho Youga-kei Roadshow “Meitantei Conan Movie 12: Senritsu no Full Score”（名探偵コナン 戦慄の楽譜）Theme Song"
                ]
            },
            {
                disc: 6,
                track: 14,
                title: "Ai wa Kurayami no Naka de featuring Aya Kamiki",
                japaneseTitle: "愛は暗闇の中で featuring Aya Kamiki",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Siyon Morishita",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network anime “Meitantei Conan”（名探偵コナン）Opening Theme"
                ]
            },
            {
                disc: 6,
                track: 15,
                title: "Sunao ni Ienakute ~featuring Mai Kuraki~",
                japaneseTitle: "素直に言えなくて ～featuring Mai Kuraki～",
                credit: "Lyrics & Music: Izumi Sakai / Arrangement: Hitoshi Okamoto",
                karaoke: false,
                tieup: null
            },
            {
                disc: 6,
                track: 16,
                title: "Hypnosis",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Hitoshi Okamoto",
                karaoke: false,
                tieup: null
            },
            {
                disc: 7,
                track: 1,
                title: "Hateshinai Yume wo",
                japaneseTitle: "果てしない夢を",
                credit: "Lyrics: Show Wesugi, Izumi Sakai / Music: Masayuki Deguchi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Nippon TV professional baseball broadcast image song"
                ]
            },
            {
                disc: 7,
                track: 2,
                title: "Ame ni Nurete",
                japaneseTitle: "雨に濡れて",
                credit: "Lyrics: Izumi Sakai, Show Wesugi / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 7,
                track: 3,
                title: "Christmas Time",
                japaneseTitle: "クリスマス タイム",
                credit: "Performer: Barbier / Guest Vocal: Izumi Sakai / Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Taka Umeno, Robbie Kondor",
                karaoke: false,
                tieup: [
                    "Independent TV Network music program “J-ROCK ARTIST COUNT DOWN 50” Ending Theme",
                    "TV drama “Seiya no Kiseki” episode 1 “Eve Nante Iranai”（聖夜の奇跡 第1話「イヴなんていらない」）Insert Song"
                ]
            },
            {
                disc: 7,
                track: 4,
                title: "Anata ni Kaeritai",
                japaneseTitle: "あなたに帰りたい",
                credit: "Performer: Barbier / Guest Vocal: Izumi Sakai / Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: 7,
                track: 5,
                title: "LOVE ~Nemurezu ni Kimi no Yokogao Zutto Miteitai~",
                japaneseTitle: "LOVE ～眠れずに君の横顔ずっと見ていた～",
                credit: "Performer: Barbier / Guest Vocal: Izumi Sakai / Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Independent TV Network music program “J-ROCK ARTIST COUNT DOWN 50” Ending Theme"
                ]
            },
            {
                disc: 7,
                track: 6,
                title: "I still remember",
                japaneseTitle: null,
                credit: "Performer: Barbier / Guest Vocal: Izumi Sakai / Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: 7,
                track: 7,
                title: "Ihoujin",
                japaneseTitle: "異邦人",
                credit: "Performer: TAK MATSUMOTO featuring ZARD / Lyrics & Music: Saki Kubota / Arrangement: Tak Matsumoto, Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "Fuji TV drama “Anata no Tonari ni Dareka Iru”（あなたの隣に誰かいる）Episode 4 Insert Song"
                ]
            }
        ],
        related: [
            {
                title: "Wiki",
                href: "https://ja.wikipedia.org/wiki/ZARD_SINGLE_COLLECTION_%E3%80%9C20th_ANNIVERSARY%E3%80%9C"
            },
            {
                title: "PV/CM",
                href: "#"
            }
        ]
    },


    {
        type: "album",
        id: "alcollection01",
        order: null,
        category: null,
        title: "ZARD ALBUM COLLECTION ~20th ANNIVERSARY~",
        japaneseTitle: null,
        releases: [
            {
                format: "12CD",
                label: "B-Gram Records",
                catalog: "JBCD-2012",
                edition: "11 Original Albums+Premium Disc / Digital Remaster",
                released: "2012.01.01"
            }
        ],
        cover: {
            src: "assets/disc_photo/al/alcollection01.jpg"
        },
        tracks: [
            {
                disc: 1,
                track: 1,
                title: "Good-bye My Loneliness",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Fuji TV Network drama “Kekkon no Risou to Genjitsu”（結婚の理想と現実）Theme Song",
                    "Clarion（クラリオン）Karaoke CF Song"
                ]
            },
            {
                disc: 1,
                track: 2,
                title: "Ai wa Kurayami no Naka de",
                japaneseTitle: "愛は暗闇の中で",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: ZARD, Hiroshi Terao",
                karaoke: false,
                tieup: null
            },
            {
                disc: 1,
                track: 3,
                title: "Koi Onna no Yuuutsu",
                japaneseTitle: "恋女の憂鬱",
                credit: "Lyrics & Music: Daria Kawashima / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 1,
                track: 4,
                title: "Oh! Sugar Baby",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: 1,
                track: 5,
                title: "Onna de Itai",
                japaneseTitle: "女でいたい",
                credit: "Lyrics & Music: Daria Kawashima / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: 1,
                track: 6,
                title: "It's a Boy",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 2,
                track: 1,
                title: "Fushigi ne...",
                japaneseTitle: "不思議ね…",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Nippon TV Network quiz show “Magical Zunou Power!!”（マジカル頭脳パワー!!）Theme Song"
                ]
            },
            {
                disc: 2,
                track: 2,
                title: "Mou Sagasanai",
                japaneseTitle: "もう探さない",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "TV Asahi Network drama “Shichinin no Onna Bengoshi II”（七人の女弁護士II）Theme Song"
                ]
            },
            {
                disc: 2,
                track: 3,
                title: "Sunao ni Ienakute",
                japaneseTitle: "素直に言えなくて",
                credit: "Lyrics & Music: Izumi Sakai / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 2,
                track: 4,
                title: "Hitori ga Suki",
                japaneseTitle: "ひとりが好き",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 2,
                track: 5,
                title: "Forever",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Daria Kawashima / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 2,
                track: 6,
                title: "Lonely Soldier Boy",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 2,
                track: 7,
                title: "Itsuka wa...",
                japaneseTitle: "いつかは…",
                credit: "Lyrics & Music: Izumi Sakai / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 3,
                track: 1,
                title: "Nemurenai Yoru wo Daite",
                japaneseTitle: "眠れない夜を抱いて",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi, Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "TV Asahi Network wide show “Tonight”（トゥナイト）Ending Theme",
                    "TV Asahi Network drama “Love Story wo Kimi ni '92 〜Nemurenai Yoru wo Daite〜”（ラブストーリーを君に'92〜眠れない夜を抱いて〜）Theme Song"
                ]
            },
            {
                disc: 3,
                track: 2,
                title: "Dareka ga Matteru",
                japaneseTitle: "誰かが待ってる",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Nippon TV quiz show “Magical Zunou Power!!”（マジカル頭脳パワー!!）Ending Theme"
                ]
            },
            {
                disc: 3,
                track: 3,
                title: "Sayonara Ienakute",
                japaneseTitle: "サヨナラ言えなくて",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: null
            },
            {
                disc: 3,
                track: 4,
                title: "Ano Hohoemi wo Wasurenaide",
                japaneseTitle: "あの微笑みを忘れないで",
                credit: "Lyrics: Izumi Sakai / Music: Daria Kawashima / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Fuji TV Network “Kinyou Entertainment”（金曜エンタテイメント）drama series “Udemakuri Kangofu”（腕まくり看護婦）Theme Song"
                ]
            },
            {
                disc: 3,
                track: 5,
                title: "Suki na You ni Odoritai no",
                japaneseTitle: "好きなように踊りたいの",
                credit: "Lyrics: Izumi Sakai / Music: Kazuya Izumi / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: 3,
                track: 6,
                title: "Dangerous Tonight",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 3,
                track: 7,
                title: "Konna ni Aishitemo",
                japaneseTitle: "こんなに愛しても",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 3,
                track: 8,
                title: "Why Don't You Leave Me Alone",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Daria Kawashima / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: 3,
                track: 9,
                title: "Ai wa Nemutteru",
                japaneseTitle: "愛は眠ってる",
                credit: "Lyrics: Izumi Sakai / Music: Daria Kawashima / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: null
            },
            {
                disc: 3,
                track: 10,
                title: "Tooi Hi no Nostalgia",
                japaneseTitle: "遠い日のNostalgia",
                credit: "Lyrics: Izumi Sakai / Music: Eisuke Mochizuki / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 3,
                track: 11,
                title: "So Together",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Daria Kawashima / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 4,
                track: 1,
                title: "Yureru Omoi",
                japaneseTitle: "揺れる想い",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Otsuka Pharmaceutical “Pocari Sweat” CM Song",
                    "Chiba TV Network music program' “MU-GEN〜Music Generations〜” October 2006 Opening Theme",
                    "Spotify (@SpotifyJP) “Anata no Hibi ni Ongaku wo: Jikka no Katazuke-hen 30-byou”（「あなたの日々に音楽を」実家の片付け篇 30秒）TV CM Song"
                ]
            },
            {
                disc: 4,
                track: 2,
                title: "Season",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: 4,
                track: 3,
                title: "Kimi ga Inai (B-version)",
                japaneseTitle: "君がいない (B-version)",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network drama “Kanojo no Kirai na Kanojo”（彼女の嫌いな彼女）Theme Song"
                ]
            },
            {
                disc: 4,
                track: 4,
                title: "IN MY ARMS TONIGHT",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Michiya Haruhata / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "TBS TV Network drama “Gakkou ga Abunai”（学校があぶない）Ending Theme"
                ]
            },
            {
                disc: 4,
                track: 5,
                title: "Anata wo Suki dakedo",
                japaneseTitle: "あなたを好きだけど",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Mitsubishi Sekiyu（三菱石油）CF Song"
                ]
            },
            {
                disc: 4,
                track: 6,
                title: "Makenaide",
                japaneseTitle: "負けないで",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Fuji TV Network drama “Bokutachi no Drama Series”（ボクたちのドラマシリーズ）“Shiratori Reiko de Gozaimasu! Season 1”（白鳥麗子でございます! 第1シリーズ）Ending Theme",
                    "TV Saitama “Sydney 2000 Olympic Asian Qualifiers Send-Off Match”（シドニーオリンピック2000アジア地区予選 壮行試合）Theme Song",
                    "Nippon TV Network “13th All Japan High School Quiz Championship”（第13回全国高等学校クイズ選手権）Ending Theme",
                    "NTT DoCoMo Vancouver Olympics-related “Ou'en in Vancouver-hen”（応援 in バンクーバー篇）CM Song from February 10, 2010"
                ]
            },
            {
                disc: 4,
                track: 7,
                title: "Listen to me",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Daria Kawashima / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Nippon TV Network quiz variety show “Heart ni Just Meet”（ハートにジャストミート）Ending Theme"
                ]
            },
            {
                disc: 4,
                track: 8,
                title: "You and me (and…)",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: 4,
                track: 9,
                title: "I want you",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 4,
                track: 10,
                title: "Futari no Natsu",
                japaneseTitle: "二人の夏",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 5,
                track: 1,
                title: "Oh my love",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 5,
                track: 2,
                title: "Top Secret",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 5,
                track: 3,
                title: "Kitto Wasurenai",
                japaneseTitle: "きっと忘れない",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Fuji TV Network drama “Bokutachi no Drama Series”（ボクたちのドラマシリーズ）“Shiratori Reiko de Gozaimasu! Season 2”（白鳥麗子でございます! 第2シリーズ）Ending Theme"
                ]
            },
            {
                disc: 5,
                track: 4,
                title: "Mou Sukoshi Ato Sukoshi...",
                japaneseTitle: "もう少し あと少し…",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "TV Asahi Network drama “Lullaby Keiji '93”（ララバイ刑事'93）Ending Theme"
                ]
            },
            {
                disc: 5,
                track: 5,
                title: "Ame ni Nurete",
                japaneseTitle: "雨に濡れて",
                credit: "Lyrics: Izumi Sakai, Show Wesugi / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 5,
                track: 6,
                title: "Kono Ai ni Oyogi Tsukarete mo",
                japaneseTitle: "この愛に泳ぎ疲れても",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Kansai TV/Fuji TV Network drama “Ai to Giwaku no Suspense”（愛と疑惑のサスペンス）Opening Theme"
                ]
            },
            {
                disc: 5,
                track: 7,
                title: "I still remember",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 5,
                track: 8,
                title: "If you gimme smile",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 5,
                track: 9,
                title: "Rainen no Natsu mo",
                japaneseTitle: "来年の夏も",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 5,
                track: 10,
                title: "Anata ni Kaeritai",
                japaneseTitle: "あなたに帰りたい",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 6,
                track: 1,
                title: "Ima Sugu Ai ni Kite",
                japaneseTitle: "今すぐ会いに来て",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 6,
                track: 2,
                title: "High Heel Nugi Sutete",
                japaneseTitle: "ハイヒール脱ぎ捨てて",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Fuji TV “OIOI TOKYO TASTE ROOMS” Ending Theme"
                ]
            },
            {
                disc: 6,
                track: 3,
                title: "Forever you",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Documentary film “Princess Diana” Theme Song"
                ]
            },
            {
                disc: 6,
                track: 4,
                title: "Mou Nigetari Shinai wa Omoide kara",
                japaneseTitle: "もう逃げたりしないわ 想い出から",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 6,
                track: 5,
                title: "Anata wo Kanjiteitai",
                japaneseTitle: "あなたを感じていたい",
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Tetsuro Oda",
                karaoke: false,
                tieup: [
                    "NTT DoCoMo pager “Palfy V”（パルフィー V）CM Song"
                ]
            },
            {
                disc: 6,
                track: 6,
                title: "Kiraku ni Ikou",
                japaneseTitle: "気楽に行こう",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "ASTEL Kansai（アステル関西）CF Song"
                ]
            },
            {
                disc: 6,
                track: 7,
                title: "I'm in love",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Tower Records Super Store Shibuya grand-opening commemorative song"
                ]
            },
            {
                disc: 6,
                track: 8,
                title: "Konna ni Soba ni Iru no ni",
                japaneseTitle: "こんなにそばに居るのに",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi, Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Boutique JOY（ブティックJOY）TV-CF Image Song"
                ]
            },
            {
                disc: 6,
                track: 9,
                title: "Just believe in love",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Michiya Haruhata / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "TBS TV Network drama “Yureru Omoi”（揺れる想い）Theme Song"
                ]
            },
            {
                disc: 6,
                track: 10,
                title: "Hitomi Sorasanaide",
                japaneseTitle: "瞳そらさないで",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 7,
                track: 1,
                title: "My Friend",
                japaneseTitle: "マイ フレンド",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "TV Asahi Network anime “SLAM DUNK”（スラムダンク）4th Ending Theme"
                ]
            },
            {
                disc: 7,
                track: 2,
                title: "Kimi ga Ita kara",
                japaneseTitle: "君がいたから",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Fuji TV Network drama “Kagayaku Toki no Naka de”（輝く季節の中で）Insert Song"
                ]
            },
            {
                disc: 7,
                track: 3,
                title: "Sayonara wa Ima mo Kono Mune ni Imasu",
                japaneseTitle: "サヨナラは今もこの胸に居ます",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Toei “Bokutachi no Eiga Series”（ぼくたちの映画シリーズ）film “Shiratori Reiko de Gozaimasu!”（白鳥麗子でございます!）Theme Song",
                    "Nationwide 28-Station Network program “J-ROCK ARTIST Count Down 50” Ending Theme"
                ]
            },
            {
                disc: 7,
                track: 4,
                title: "LOVE ~Nemurezu ni Kimi no Yokogao Zutto Miteitai~",
                japaneseTitle: "LOVE ～眠れずに君の横顔ずっと見ていた～",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 7,
                track: 5,
                title: "DAN DAN Kokoro Hikareteku",
                japaneseTitle: "DAN DAN 心魅かれてく",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: null
            },
            {
                disc: 7,
                track: 6,
                title: "Nemuri",
                japaneseTitle: "眠り",
                credit: "Lyrics & Music: Izumi Sakai / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: null
            },
            {
                disc: 7,
                track: 7,
                title: "Kokoro wo Hiraite",
                japaneseTitle: "心を開いて",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Otsuka Pharmaceutical “Pocari Sweat” CM Song",
                    "Mitsubishi Motors Corporation ⑭ CM Song"
                ]
            },
            {
                disc: 7,
                track: 8,
                title: "Totsuzen",
                japaneseTitle: "突然",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: 7,
                track: 9,
                title: "Kyou mo",
                japaneseTitle: "今日も",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: 7,
                track: 10,
                title: "Today is another day",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Nippon TV anime special “YAWARA! Zutto Kimi no Koto ga…”（YAWARA! ずっと君のことが…）Theme Song"
                ]
            },
            {
                disc: 7,
                track: 11,
                title: "Ai ga Mienai",
                japaneseTitle: "愛が見えない",
                credit: "Lyrics: Izumi Sakai / Music: Masazumi Ozawa / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Bristol-Myers Squibb “SEA BREEZE '95” CM Song"
                ]
            },
            {
                disc: 7,
                track: 12,
                title: "Mitsumete Itai ne",
                japaneseTitle: "見つめていたいね",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Nippon TV anime special “YAWARA! Zutto Kimi no Koto ga…”（YAWARA! ずっと君のことが…）Insert Song"
                ]
            },
            {
                disc: 8,
                track: 1,
                title: "Eien",
                japaneseTitle: "永遠",
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network drama “Shitsurakuen”（失楽園）Theme Song",
                    "Canon “NEW EOS Kiss” CM Song"
                ]
            },
            {
                disc: 8,
                track: 2,
                title: "My Baby Grand ~Nukumori ga Hoshikute~",
                japaneseTitle: "My Baby Grand～ぬくもりが欲しくて～",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "NTT DoCoMo “DoCoMo '97 Winter”（ドコモ ’97-冬）CM Song"
                ]
            },
            {
                disc: 8,
                track: 3,
                title: "WAKE UP MAKE THE MORNING LAST ~Wasuregataki Hito e~",
                japaneseTitle: "WAKE UP MAKE THE MORNING LAST～忘れがたき人へ～",
                credit: "Lyrics: Izumi Sakai / Music: Hiroya Fukuyama / Arrangement: Hirohito Furui",
                karaoke: false,
                tieup: null
            },
            {
                disc: 8,
                track: 4,
                title: "Brand New Love",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Masaaki Watanuki / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: null
            },
            {
                disc: 8,
                track: 5,
                title: "Unmei no Roulette Mawashite",
                japaneseTitle: "運命のルーレット廻して",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network anime “Meitantei Conan”（名探偵コナン）Opening Theme"
                ]
            },
            {
                disc: 8,
                track: 6,
                title: "Tooi Hoshi wo Kazoete",
                japaneseTitle: "遠い星を数えて",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: null
            },
            {
                disc: 8,
                track: 7,
                title: "Atarashii Door ~Fuyu no Himawari~",
                japaneseTitle: "新しいドア～冬のひまわり～",
                credit: "Lyrics: Izumi Sakai / Music: Masato Kitano / Arrangement: Hirohito Furui",
                karaoke: false,
                tieup: [
                    "Sapporo Breweries “Fuyu Monogatari”（冬物語）CM Song"
                ]
            },
            {
                disc: 8,
                track: 8,
                title: "GOOD DAY",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Masaaki Watanuki / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Beautylabo “Natural Color”（ナチュラルカラー）CM Song"
                ]
            },
            {
                disc: 8,
                track: 9,
                title: "I feel fine, yeah",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Makoto Miyoshi / Arrangement: Hirohito Furui",
                karaoke: false,
                tieup: [
                    "Fuji TV “Mezamashi Tenki”（めざまし天気）Theme Song"
                ]
            },
            {
                disc: 8,
                track: 10,
                title: "Shoujo no Koro ni Modotta Mitai ni",
                japaneseTitle: "少女の頃に戻ったみたいに",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Nationwide Toho Youga-kei Roadshow “Meitantei Conan Movie 02: 14-banme no Target”（名探偵コナン １４番目の標的）Theme Song"
                ]
            },
            {
                disc: 8,
                track: 11,
                title: "Iki mo Dekinai",
                japaneseTitle: "息もできない",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Fuji TV Network anime “Chuuka Ichiban!”（中華一番!）2nd Opening Theme"
                ]
            },
            {
                disc: 8,
                track: 12,
                title: "Kaze ga Toori Nukeru Machi he",
                japaneseTitle: "風が通り抜ける街へ",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "Japan Racing Association “'97 Summer JRA” Campaign Song"
                ]
            },
            {
                disc: 8,
                track: 13,
                title: "Photograph",
                japaneseTitle: "フォトグラフ",
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "Nippon TV drama “Haru no Suspense Special Keijitachi no Natsu”（春のサスペンススペシャル 刑事たちの夏）Theme Song"
                ]
            },
            {
                disc: 9,
                track: 1,
                title: "Get U're Dream",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "NHK Sydney Olympics Broadcast Theme Song"
                ]
            },
            {
                disc: 9,
                track: 2,
                title: "Kono Namida Hoshi ni Nare",
                japaneseTitle: "この涙 星になれ",
                credit: "Lyrics: Izumi Sakai / Music: Yuichiro Iwai / Arrangement: Hirohito Furui",
                karaoke: false,
                tieup: [
                    "TV Asahi Network drama “Kasouken no Onna”（科捜研の女）Theme Song"
                ]
            },
            {
                disc: 9,
                track: 3,
                title: "promised you ~with P-edition~",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Cybersound",
                karaoke: false,
                tieup: [
                    "TV Asahi Network two-hour drama program “Doyou Wide Gekijou”（土曜ワイド劇場）Ending Theme"
                ]
            },
            {
                disc: 9,
                track: 4,
                title: "Itai Kurai Kimi ga Afureteiru yo",
                japaneseTitle: "痛いくらい君があふれているよ",
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Kenji Shiojiri",
                karaoke: false,
                tieup: [
                    "Nestlé Japan “NESCAFÉ moment”（ネスカフェモーメント）CM Song"
                ]
            },
            {
                disc: 9,
                track: 5,
                title: "Mado no Soto wa Monochrome",
                japaneseTitle: "窓の外はモノクローム",
                credit: "Lyrics: Izumi Sakai / Music: Yuichiro Iwai / Arrangement: Yoshinobu Ohga",
                karaoke: false,
                tieup: [
                    "Nippon TV “Shuukan Storyland”（週刊ストーリーランド）Ending Theme"
                ]
            },
            {
                disc: 9,
                track: 6,
                title: "O・mo・hi・de",
                japaneseTitle: "お・も・ひ・で",
                credit: "Lyrics: Izumi Sakai / Music: Hiroshi Terao / Arrangement: Hirohito Furui, Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "TV Asahi Network information program “Zeitaku na Kyuujitsu”（贅沢な休日）Theme Song",
                    "“Change IZU 2000!”（チェンジ伊豆2000!）Image Song"
                ]
            },
            {
                disc: 9,
                track: 7,
                title: "Ashita Moshi Kimi ga Kowaretemo",
                japaneseTitle: "明日もし君が壊れても",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: null
            },
            {
                disc: 9,
                track: 8,
                title: "Sekai wa Kitto Mirai no Naka ~another style 21~",
                japaneseTitle: "世界はきっと未来の中～another style 21～",
                credit: "Lyrics: Izumi Sakai / Music: Yuichiro Iwai / Arrangement: Akihito Tokunaga, Yoshinobu Ohga",
                karaoke: false,
                tieup: [
                    "TV Asahi Network drama “Maiko-san wa Meitantei!”（舞妓さんは名探偵!）Theme Song"
                ]
            },
            {
                disc: 9,
                track: 9,
                title: "hero",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Yoshinobu Ohga",
                karaoke: false,
                tieup: [
                    "Konami game “Tokimeki Memorial 3 ~Yakusoku no Ano Basho de~”（ときめきメモリアル3 〜約束のあの場所で〜）Sweet Ending Theme"
                ]
            },
            {
                disc: 9,
                track: 10,
                title: "Yureru Omoi (Gomi's New York Remix)",
                japaneseTitle: "揺れる想い (Gomi's New York Remix)",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Remix: Gomi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 9,
                track: 11,
                title: "Makenaide (Gomi's 10th Anniversary Special Mix)",
                japaneseTitle: "負けないで (Gomi's 10th Anniversary Special Mix)",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Remix: Gomi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 9,
                track: 12,
                title: "Toki no Tsubasa",
                japaneseTitle: "時間（とき）の翼",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "NTT West “FLET'S ISDN”（フレッツISDN）CF Song"
                ]
            },
            {
                disc: 10,
                track: 1,
                title: "Ashita wo Yume Mite",
                japaneseTitle: "明日を夢見て",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Satoru Kobayashi",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network anime “Meitantei Conan”（名探偵コナン）Ending Theme"
                ]
            },
            {
                disc: 10,
                track: 2,
                title: "Toki no Tsubasa",
                japaneseTitle: "時間（とき）の翼",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Satoru Kobayashi",
                karaoke: false,
                tieup: [
                    "NTT West “FLET'S ISDN”（フレッツISDN）CF Song"
                ]
            },
            {
                disc: 10,
                track: 3,
                title: "Motto Chikaku de Kimi no Yokogao Mitetai",
                japaneseTitle: "もっと近くで君の横顔見ていたい",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Gekkeikan “Tsuki”（月）CM Song"
                ]
            },
            {
                disc: 10,
                track: 4,
                title: "pray",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Akihito Tokunaga / Arrangement: Satoru Kobayashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 10,
                track: 5,
                title: "Deai Soshite Wakare",
                japaneseTitle: "出逢いそして別れ",
                credit: "Lyrics: Izumi Sakai / Music: Michiya Haruhata / Arrangement: Michiya Haruhata, Daisuke Ikeda",
                karaoke: false,
                tieup: null
            },
            {
                disc: 10,
                track: 6,
                title: "Tomatteita Tokei ga Ima Ugokidashita",
                japaneseTitle: "止まっていた時計が今動き出した",
                credit: "Lyrics: Izumi Sakai / Music: Yuri Nakamura / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "TV Asahi drama “Igi Ari! Onna Bengoshi Ooka Norie”（異議あり! 女弁護士大岡法江）Theme Song"
                ]
            },
            {
                disc: 10,
                track: 7,
                title: "Hitomi Tojite",
                japaneseTitle: "瞳閉じて",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "Fuji TV Network sports program “Kandou Factory Suporuto!”（感動ファクトリー すぽると!）Image Song"
                ]
            },
            {
                disc: 10,
                track: 8,
                title: "Sawayakana Kimi no Kimochi (Album Ver.)",
                japaneseTitle: "さわやかな君の気持ち (Album Ver.)",
                credit: "Lyrics: Izumi Sakai / Music: Akihito Tokunaga / Arrangement: Dr.Terachi, Pierrot Le Fou",
                karaoke: false,
                tieup: [
                    "Nivea-Kao “8×4 (Eight Four)” CM Song"
                ]
            },
            {
                disc: 10,
                track: 9,
                title: "Ai de Anata wo Sukuimashou",
                japaneseTitle: "愛であなたを救いましょう",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 10,
                track: 10,
                title: "Tenshi no You na Egao de",
                japaneseTitle: "天使のような笑顔で",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: null
            },
            {
                disc: 10,
                track: 11,
                title: "Kanashii Hodo Kyou wa Ame demo",
                japaneseTitle: "悲しいほど 今日は雨でも",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Satoru Kobayashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 11,
                track: 1,
                title: "Natsu wo Matsu Sail (Ho) no You ni",
                japaneseTitle: "夏を待つセイル(帆)のように",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Nationwide Toho Youga-kei Roadshow “Meitantei Conan Movie 09: Suihei Senjou no Strategy”（名探偵コナン 水平線上の陰謀）Theme Song"
                ]
            },
            {
                disc: 11,
                track: 2,
                title: "Sayonara made no Distance",
                japaneseTitle: "サヨナラまでのディスタンス",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: 11,
                track: 3,
                title: "Kakegae no Nai Mono",
                japaneseTitle: "かけがえのないもの",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Satoru Kobayashi",
                karaoke: false,
                tieup: [
                    "TBS TV Network dating variety show “Koisuru Hanikami!”（恋するハニカミ!）Theme Song"
                ]
            },
            {
                disc: 11,
                track: 4,
                title: "Kyou wa Yukkuri Hanasou",
                japaneseTitle: "今日はゆっくり話そう",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "Gekkeikan “Tsuki”（月）CM Song"
                ]
            },
            {
                disc: 11,
                track: 5,
                title: "Kimi to no Fureai",
                japaneseTitle: "君とのふれあい",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: 11,
                track: 6,
                title: "Separate Ways",
                japaneseTitle: "セパレート・ウェイズ",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Hirohito Furui",
                karaoke: false,
                tieup: null
            },
            {
                disc: 11,
                track: 7,
                title: "Last Good-bye",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Yoshio Tatano / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: 11,
                track: 8,
                title: "Hoshi no Kagayaki yo",
                japaneseTitle: "星のかがやきよ",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network anime “Meitantei Conan”（名探偵コナン）Opening Theme"
                ]
            },
            {
                disc: 11,
                track: 9,
                title: "Tsuki ni Negai wo",
                japaneseTitle: "月に願いを",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Satoru Kobayashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 11,
                track: 10,
                title: "Anata to Tomo ni Ikite Yuku",
                japaneseTitle: "あなたと共に生きてゆく",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Satoru Kobayashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 11,
                track: 11,
                title: "I can't tell",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: 11,
                track: 12,
                title: "good-night sweet heart",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Akihito Tokunaga / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: 11,
                track: 13,
                title: "Kimi to Kyou no Koto wo Isshou Wasurenai",
                japaneseTitle: "君と今日の事を一生忘れない",
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: null
            },
            {
                disc: 12,
                track: 1,
                title: "Ano Hohoemi wo Wasurenaide (2012 Movie-theme ver.)",
                japaneseTitle: "あの微笑みを忘れないで (2012 Movie-theme ver.)",
                credit: "Lyrics: Izumi Sakai / Music: Daria Kawashima / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Fuji TV-produced film “Utahime Kanojotachi no Smoke on the Water”（ウタヒメ 彼女たちのスモーク・オン・ザ・ウォーター）Theme Song"
                ]
            },
            {
                disc: 12,
                track: 2,
                title: "Don't you see! (TV on-air ver.)",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / TV Version Arrangement: Uncredited",
                karaoke: false,
                tieup: [
                    "Fuji TV Network anime “Dragon Ball GT”（ドラゴンボールGT）2nd Ending Theme"
                ]
            },
            {
                disc: 12,
                track: 3,
                title: "Eien (English ver. on 1chorus)",
                japaneseTitle: "永遠 (English ver. on 1chorus)",
                credit: "Lyrics: Izumi Sakai / Music: Akihito Tokunaga / Version Arrangement: Uncredited",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network drama “Shitsurakuen”（失楽園）Theme Song",
                    "Canon “NEW EOS Kiss” CM Song"
                ]
            },
            {
                disc: 12,
                track: 4,
                title: "Unmei no Roulette Mawashite (TV on-air ver.)",
                japaneseTitle: "運命のルーレット廻して (TV on-air ver.)",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / TV Version Arrangement: Uncredited",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network anime “Meitantei Conan”（名探偵コナン）Opening Theme"
                ]
            },
            {
                disc: 12,
                track: 5,
                title: "Sawayakana Kimi no Kimochi (CM on-air ver.)",
                japaneseTitle: "さわやかな君の気持ち (CM on-air ver.)",
                credit: "Lyrics: Izumi Sakai / Music: Akihito Tokunaga / CM Version Arrangement: Uncredited",
                karaoke: false,
                tieup: [
                    "Nivea-Kao “8×4 (Eight Four)” CM Song"
                ]
            },
            {
                disc: 12,
                track: 6,
                title: "Ashita wo Yume Mite (TV on-air ver.)",
                japaneseTitle: "明日を夢見て (TV on-air ver.)",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / TV Version Arrangement: Uncredited",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network anime “Meitantei Conan”（名探偵コナン）Ending Theme"
                ]
            },
            {
                disc: 12,
                track: 7,
                title: "Natsu wo Matsu Sail (Ho) no You ni (Theater-CM ver.)",
                japaneseTitle: "夏を待つセイル(帆)のように (Theater-CM ver.)",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Theater-CM Arrangement: Uncredited",
                karaoke: false,
                tieup: [
                    "Nationwide Toho Youga-kei Roadshow “Meitantei Conan Movie 09: Suihei Senjou no Strategy”（名探偵コナン 水平線上の陰謀）Theme Song"
                ]
            },
            {
                disc: 12,
                track: 8,
                title: "Tooi Hi no Nostalgia (Acoustic Arrange ver.)",
                japaneseTitle: "遠い日のNostalgia (Acoustic Arrange ver.)",
                credit: "Lyrics: Izumi Sakai / Music: Eisuke Mochizuki / Acoustic Arrangement: Uncredited",
                karaoke: false,
                tieup: null
            },
            {
                disc: 12,
                track: 9,
                title: "LOVE ~Nemurezu ni Kimi no Yokogao Zutto Miteitai~ (Another Arrange ver.)",
                japaneseTitle: "LOVE ～眠れずに君の横顔ずっと見ていた～ (Another Arrange ver.)",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Uncredited",
                karaoke: false,
                tieup: null
            },
            {
                disc: 12,
                track: 10,
                title: "O・mo・hi・de (Another Arrange ver.)",
                japaneseTitle: "お・も・ひ・で (Another Arrange ver.)",
                credit: "Lyrics: Izumi Sakai / Music: Hiroshi Terao / Arrangement: Uncredited",
                karaoke: false,
                tieup: [
                    "TV Asahi Network information program “Zeitaku na Kyuujitsu”（贅沢な休日）Theme Song",
                    "“Change IZU 2000!”（チェンジ伊豆2000!）Image Song"
                ]
            },
            {
                disc: 12,
                track: 11,
                title: "Motto Chikaku de Kimi no Yokogao Mitetai (Another Arrange ver.)",
                japaneseTitle: "もっと近くで君の横顔見ていたい (Another Arrange ver.)",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Uncredited",
                karaoke: false,
                tieup: [
                    "Gekkeikan “Tsuki”（月）CM Song"
                ]
            },
            {
                disc: 12,
                track: 12,
                title: "Demo -2",
                japaneseTitle: null,
                credit: "Lyrics & Music: Izumi Sakai / Arrangement: Demo",
                karaoke: false,
                tieup: null
            },
            {
                disc: 12,
                track: 13,
                title: "Saraba Seishun no Kage yo Demo",
                japaneseTitle: "さらば青春の影よDemo",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: null
            }
        ],
        related: [
            {
                title: "Wiki",
                href: "https://ja.wikipedia.org/wiki/ZARD_ALBUM_COLLECTION_%E3%80%9C20th_ANNIVERSARY%E3%80%9C"
            },
            {
                title: "PV/CM",
                href: "#"
            }
        ]
    },


    {
        type: "album",
        id: "best05",
        order: null,
        category: "Best",
        title: "ZARD Forever Best ~25th Anniversary~",
        japaneseTitle: null,
        releases: [
            {
                format: "4CD",
                label: "B-Gram Records",
                catalog: "JBCJ-9055-9058",
                edition: "25th Anniversary Edition",
                released: "2016.02.10"
            },
            {
                format: "4CD",
                label: "B-Gram Records",
                catalog: "JBCJ-9055Z",
                edition: "Early Spring Jacket",
                released: "2017.02.08"
            },
            {
                format: "4CD",
                label: "B-Gram Records",
                catalog: "JBCJ-9055A",
                edition: "Early Summer Jacket",
                released: "2017.05.17"
            },
            {
                format: "4CD",
                label: "B-Gram Records",
                catalog: "JBCJ-9055R",
                edition: "Midsummer Jacket",
                released: "2017.08.09"
            },
            {
                format: "4CD",
                label: "B-Gram Records",
                catalog: "JBCJ-9055D",
                edition: "Autumn/Winter Jacket",
                released: "2017.11.15"
            },
            {
                format: "4CD",
                label: "B-Gram Records",
                catalog: "JBCJ-9055B",
                edition: "Rose Jacket",
                released: "2022.09.28"
            }
        ],
        cover: {
            src: "assets/disc_photo/al/best05.jpg"
        },
        tracks: [
            {
                disc: 1,
                track: 1,
                title: "Don't you see!",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Fuji TV Network anime “Dragon Ball GT”（ドラゴンボールGT）2nd Ending Theme"
                ]
            },
            {
                disc: 1,
                track: 2,
                title: "My Friend",
                japaneseTitle: "マイ フレンド",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "TV Asahi Network anime “SLAM DUNK”（スラムダンク）4th Ending Theme"
                ]
            },
            {
                disc: 1,
                track: 3,
                title: "Kono Ai ni Oyogi Tsukarete mo",
                japaneseTitle: "この愛に泳ぎ疲れても",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Kansai TV/Fuji TV Network drama “Ai to Giwaku no Suspense”（愛と疑惑のサスペンス）Opening Theme"
                ]
            },
            {
                disc: 1,
                track: 4,
                title: "Good-bye My Loneliness",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Fuji TV Network drama “Kekkon no Risou to Genjitsu”（結婚の理想と現実）Theme Song",
                    "Clarion（クラリオン）Karaoke CF Song"
                ]
            },
            {
                disc: 1,
                track: 5,
                title: "WAKE UP MAKE THE MORNING LAST ~Wasuregataki Hito e~",
                japaneseTitle: "WAKE UP MAKE THE MORNING LAST～忘れがたき人へ～",
                credit: "Lyrics: Izumi Sakai / Music: Hiroya Fukuyama / Arrangement: Hirohito Furui",
                karaoke: false,
                tieup: null
            },
            {
                disc: 1,
                track: 6,
                title: "Kimi ni Aitaku Nattara...",
                japaneseTitle: "君に逢いたくなったら…",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "TBS TV Network drama “Risou no Kekkon”（理想の結婚）Opening Theme"
                ]
            },
            {
                disc: 1,
                track: 7,
                title: "Iki mo Dekinai",
                japaneseTitle: "息もできない",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Fuji TV Network anime “Chuuka Ichiban!”（中華一番!）2nd Opening Theme"
                ]
            },
            {
                disc: 1,
                track: 8,
                title: "Ima Sugu Ai ni Kite",
                japaneseTitle: "今すぐ会いに来て",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 1,
                track: 9,
                title: "High Heel Nugi Sutete",
                japaneseTitle: "ハイヒール脱ぎ捨てて",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Fuji TV “OIOI TOKYO TASTE ROOMS” Ending Theme"
                ]
            },
            {
                disc: 1,
                track: 10,
                title: "Forever you",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Documentary film “Princess Diana” Theme Song"
                ]
            },
            {
                disc: 1,
                track: 11,
                title: "Ashita wo Yume Mite",
                japaneseTitle: "明日を夢見て",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Satoru Kobayashi",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network anime “Meitantei Conan”（名探偵コナン）Ending Theme"
                ]
            },
            {
                disc: 1,
                track: 12,
                title: "Tsubasa wo Hirogete",
                japaneseTitle: "翼を広げて",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Nationwide Toho Youga-kei Roadshow “Meitantei Conan Movie 12: Senritsu no Full Score”（名探偵コナン 戦慄の楽譜）Theme Song"
                ]
            },
            {
                disc: 1,
                track: 13,
                title: "Ai wa Kurayami no Naka de featuring Aya Kamiki",
                japaneseTitle: "愛は暗闇の中で featuring Aya Kamiki",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Siyon Morishita",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network anime “Meitantei Conan”（名探偵コナン）Opening Theme"
                ]
            },
            {
                disc: 2,
                track: 1,
                title: "Hoshi no Kagayaki yo",
                japaneseTitle: "星のかがやきよ",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network anime “Meitantei Conan”（名探偵コナン）Opening Theme"
                ]
            },
            {
                disc: 2,
                track: 2,
                title: "Natsu wo Matsu Sail (Ho) no You ni",
                japaneseTitle: "夏を待つセイル(帆)のように",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Nationwide Toho Youga-kei Roadshow “Meitantei Conan Movie 09: Suihei Senjou no Strategy”（名探偵コナン 水平線上の陰謀）Theme Song"
                ]
            },
            {
                disc: 2,
                track: 3,
                title: "Kimi ga Inai",
                japaneseTitle: "君がいない",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network drama “Kanojo no Kirai na Kanojo”（彼女の嫌いな彼女）Theme Song"
                ]
            },
            {
                disc: 2,
                track: 4,
                title: "Kokoro wo Hiraite",
                japaneseTitle: "心を開いて",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Otsuka Pharmaceutical “Pocari Sweat” CM Song",
                    "Mitsubishi Motors Corporation ⑭ CM Song"
                ]
            },
            {
                disc: 2,
                track: 5,
                title: "Yureru Omoi",
                japaneseTitle: "揺れる想い",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Otsuka Pharmaceutical “Pocari Sweat” CM Song",
                    "Chiba TV Network music program' “MU-GEN〜Music Generations〜” October 2006 Opening Theme",
                    "Spotify (@SpotifyJP) “Anata no Hibi ni Ongaku wo: Jikka no Katazuke-hen 30-byou”（「あなたの日々に音楽を」実家の片付け篇 30秒）TV CM Song"
                ]
            },
            {
                disc: 2,
                track: 6,
                title: "Sunao ni Ienakute ~featuring Mai Kuraki~",
                japaneseTitle: "素直に言えなくて ～featuring Mai Kuraki～",
                credit: "Lyrics & Music: Izumi Sakai / Arrangement: Hitoshi Okamoto",
                karaoke: false,
                tieup: null
            },
            {
                disc: 2,
                track: 7,
                title: "Oh my love",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 2,
                track: 8,
                title: "Ame ni Nurete",
                japaneseTitle: "雨に濡れて",
                credit: "Lyrics: Izumi Sakai, Show Wesugi / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 2,
                track: 9,
                title: "I still remember",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 2,
                track: 10,
                title: "Rainen no Natsu mo",
                japaneseTitle: "来年の夏も",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 2,
                track: 11,
                title: "Anata ni Kaeritai",
                japaneseTitle: "あなたに帰りたい",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 2,
                track: 12,
                title: "Ai ga Mienai",
                japaneseTitle: "愛が見えない",
                credit: "Lyrics: Izumi Sakai / Music: Masazumi Ozawa / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Bristol-Myers Squibb “SEA BREEZE '95” CM Song"
                ]
            },
            {
                disc: 2,
                track: 13,
                title: "Hateshinai Yume wo",
                japaneseTitle: "果てしない夢を",
                credit: "Lyrics: Show Wesugi, Izumi Sakai / Music: Masayuki Deguchi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Nippon TV professional baseball broadcast image song"
                ]
            },
            {
                disc: 3,
                track: 1,
                title: "Kakegae no Nai Mono",
                japaneseTitle: "かけがえのないもの",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Satoru Kobayashi",
                karaoke: false,
                tieup: [
                    "TBS TV Network dating variety show “Koisuru Hanikami!”（恋するハニカミ!）Theme Song"
                ]
            },
            {
                disc: 3,
                track: 2,
                title: "Tooi Hoshi wo Kazoete",
                japaneseTitle: "遠い星を数えて",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: null
            },
            {
                disc: 3,
                track: 3,
                title: "Kaze ga Toori Nukeru Machi he",
                japaneseTitle: "風が通り抜ける街へ",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "Japan Racing Association “'97 Summer JRA” Campaign Song"
                ]
            },
            {
                disc: 3,
                track: 4,
                title: "DAN DAN Kokoro Hikareteku",
                japaneseTitle: "DAN DAN 心魅かれてく",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: null
            },
            {
                disc: 3,
                track: 5,
                title: "Totsuzen",
                japaneseTitle: "突然",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: 3,
                track: 6,
                title: "Today is another day",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Nippon TV anime special “YAWARA! Zutto Kimi no Koto ga…”（YAWARA! ずっと君のことが…）Theme Song"
                ]
            },
            {
                disc: 3,
                track: 7,
                title: "Season",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: 3,
                track: 8,
                title: "Nemurenai Yoru wo Daite",
                japaneseTitle: "眠れない夜を抱いて",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi, Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "TV Asahi Network wide show “Tonight”（トゥナイト）Ending Theme",
                    "TV Asahi Network drama “Love Story wo Kimi ni '92 〜Nemurenai Yoru wo Daite〜”（ラブストーリーを君に'92〜眠れない夜を抱いて〜）Theme Song"
                ]
            },
            {
                disc: 3,
                track: 9,
                title: "Konna ni Soba ni Iru no ni",
                japaneseTitle: "こんなにそばに居るのに",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Boutique JOY（ブティックJOY）TV-CF Image Song"
                ]
            },
            {
                disc: 3,
                track: 10,
                title: "Eien",
                japaneseTitle: "永遠",
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network drama “Shitsurakuen”（失楽園）Theme Song",
                    "Canon “NEW EOS Kiss” CM Song"
                ]
            },
            {
                disc: 3,
                track: 11,
                title: "Sayonara wa Ima mo Kono Mune ni Imasu",
                japaneseTitle: "サヨナラは今もこの胸に居ます",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Toei “Bokutachi no Eiga Series”（ぼくたちの映画シリーズ）film “Shiratori Reiko de Gozaimasu!”（白鳥麗子でございます!）Theme Song",
                    "Nationwide 28-Station Network program “J-ROCK ARTIST Count Down 50” Ending Theme"
                ]
            },
            {
                disc: 3,
                track: 12,
                title: "Nemuri",
                japaneseTitle: "眠り",
                credit: "Lyrics & Music: Izumi Sakai / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: null
            },
            {
                disc: 3,
                track: 13,
                title: "Ano Hohoemi wo Wasurenaide",
                japaneseTitle: "あの微笑みを忘れないで",
                credit: "Lyrics: Izumi Sakai / Music: Daria Kawashima / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Fuji TV Network “Kinyou Entertainment”（金曜エンタテイメント）drama series “Udemakuri Kangofu”（腕まくり看護婦）Theme Song"
                ]
            },
            {
                disc: 4,
                track: 1,
                title: "Mou Sukoshi Ato Sukoshi...",
                japaneseTitle: "もう少し あと少し…",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "TV Asahi Network drama “Lullaby Keiji '93”（ララバイ刑事'93）Ending Theme"
                ]
            },
            {
                disc: 4,
                track: 2,
                title: "Get U're Dream",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "NHK Sydney Olympics Broadcast Theme Song"
                ]
            },
            {
                disc: 4,
                track: 3,
                title: "IN MY ARMS TONIGHT",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Michiya Haruhata / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "TBS TV Network drama “Gakkou ga Abunai”（学校があぶない）Ending Theme"
                ]
            },
            {
                disc: 4,
                track: 4,
                title: "Unmei no Roulette Mawashite",
                japaneseTitle: "運命のルーレット廻して",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network anime “Meitantei Conan”（名探偵コナン）Opening Theme"
                ]
            },
            {
                disc: 4,
                track: 5,
                title: "Shoujo no Koro ni Modotta Mitai ni",
                japaneseTitle: "少女の頃に戻ったみたいに",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Nationwide Toho Youga-kei Roadshow “Meitantei Conan Movie 02: 14-banme no Target”（名探偵コナン １４番目の標的）Theme Song"
                ]
            },
            {
                disc: 4,
                track: 6,
                title: "Kitto Wasurenai",
                japaneseTitle: "きっと忘れない",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Fuji TV Network drama “Bokutachi no Drama Series”（ボクたちのドラマシリーズ）“Shiratori Reiko de Gozaimasu! Season 2”（白鳥麗子でございます! 第2シリーズ）Ending Theme"
                ]
            },
            {
                disc: 4,
                track: 7,
                title: "Konna ni Aishitemo",
                japaneseTitle: "こんなに愛しても",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 4,
                track: 8,
                title: "promised you",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Cybersound",
                karaoke: false,
                tieup: [
                    "TV Asahi Network two-hour drama program “Doyou Wide Gekijou”（土曜ワイド劇場）Ending Theme"
                ]
            },
            {
                disc: 4,
                track: 9,
                title: "GOOD DAY",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Masaaki Watanuki / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Beautylabo “Natural Color”（ナチュラルカラー）CM Song"
                ]
            },
            {
                disc: 4,
                track: 10,
                title: "My Baby Grand ~Nukumori ga Hoshikute~",
                japaneseTitle: "My Baby Grand～ぬくもりが欲しくて～",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "NTT DoCoMo “DoCoMo '97 Winter”（ドコモ ’97-冬）CM Song"
                ]
            },
            {
                disc: 4,
                track: 11,
                title: "Glorious Mind",
                japaneseTitle: "グロリアス マインド",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network anime “Meitantei Conan”（名探偵コナン）Opening Theme",
                    "TV Asahi Network news program “Super J Channel”（スーパーJチャンネル）Ending Theme for the December 14, 2007 Broadcast",
                    "Chiba TV Network music information program “MU-GEN〜Music Generations〜” December 2007 Opening Theme"
                ]
            },
            {
                disc: 4,
                track: 12,
                title: "Anata wo Kanjiteitai",
                japaneseTitle: "あなたを感じていたい",
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Tetsuro Oda",
                karaoke: false,
                tieup: [
                    "NTT DoCoMo pager “Palfy V”（パルフィー V）CM Song"
                ]
            },
            {
                disc: 4,
                track: 13,
                title: "Makenaide",
                japaneseTitle: "負けないで",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Fuji TV Network drama “Bokutachi no Drama Series”（ボクたちのドラマシリーズ）“Shiratori Reiko de Gozaimasu! Season 1”（白鳥麗子でございます! 第1シリーズ）Ending Theme",
                    "TV Saitama “Sydney 2000 Olympic Asian Qualifiers Send-Off Match”（シドニーオリンピック2000アジア地区予選 壮行試合）Theme Song",
                    "Nippon TV Network “13th All Japan High School Quiz Championship”（第13回全国高等学校クイズ選手権）Ending Theme",
                    "NTT DoCoMo Vancouver Olympics-related “Ou'en in Vancouver-hen”（応援 in バンクーバー篇）CM Song from February 10, 2010"
                ]
            }
        ],
        related: [
            {
                title: "Wiki",
                href: "https://ja.wikipedia.org/wiki/ZARD_Forever_Best_%E3%80%9C25th_Anniversary%E3%80%9C"
            },
            {
                title: "PV/CM",
                href: "#"
            }
        ]
    },


    {
        type: "album",
        id: "best06",
        order: null,
        category: "Best",
        title: "ZARD Best Request ~35th Anniversary~",
        japaneseTitle: null,
        releases: [
            {
                format: "3CD+Memorial Acrylic Photo Block",
                label: "B-Gram Records",
                catalog: "JBCJ-9083-9085",
                edition: "Complete Production Limited Edition",
                released: "2025.02.10"
            },
            {
                format: "3CD",
                label: "B-Gram Records",
                catalog: "JBCJ-9086-9088",
                edition: "Regular Edition",
                released: "2025.02.10"
            },
            {
                format: "3CD+Lyric Block",
                label: "B-Gram Records",
                catalog: "JBCJ-9086-9088-01-35",
                edition: "Musing Exclusive / 35 Jacket Variants",
                released: "2025.02.10"
            }
        ],
        cover: {
            src: "assets/disc_photo/al/best06.jpg"
        },
        tracks: [
            {
                disc: 1,
                track: 1,
                title: "Kokoro wo Hiraite",
                japaneseTitle: "心を開いて",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Otsuka Pharmaceutical “Pocari Sweat” CM Song",
                    "Mitsubishi Motors Corporation ⑭ CM Song"
                ]
            },
            {
                disc: 1,
                track: 2,
                title: "Ano Hohoemi wo Wasurenaide",
                japaneseTitle: "あの微笑みを忘れないで",
                credit: "Lyrics: Izumi Sakai / Music: Daria Kawashima / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Fuji TV Network “Kinyou Entertainment”（金曜エンタテイメント）drama series “Udemakuri Kangofu”（腕まくり看護婦）Theme Song"
                ]
            },
            {
                disc: 1,
                track: 3,
                title: "My Friend",
                japaneseTitle: "マイ フレンド",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "TV Asahi Network anime “SLAM DUNK”（スラムダンク）4th Ending Theme"
                ]
            },
            {
                disc: 1,
                track: 4,
                title: "Yureru Omoi",
                japaneseTitle: "揺れる想い",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Otsuka Pharmaceutical “Pocari Sweat” CM Song",
                    "Chiba TV Network music program' “MU-GEN〜Music Generations〜” October 2006 Opening Theme",
                    "Spotify (@SpotifyJP) “Anata no Hibi ni Ongaku wo: Jikka no Katazuke-hen 30-byou”（「あなたの日々に音楽を」実家の片付け篇 30秒）TV CM Song"
                ]
            },
            {
                disc: 1,
                track: 5,
                title: "Don't you see!",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Fuji TV Network anime “Dragon Ball GT”（ドラゴンボールGT）2nd Ending Theme"
                ]
            },
            {
                disc: 1,
                track: 6,
                title: "Makenaide",
                japaneseTitle: "負けないで",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Fuji TV Network drama “Bokutachi no Drama Series”（ボクたちのドラマシリーズ）“Shiratori Reiko de Gozaimasu! Season 1”（白鳥麗子でございます! 第1シリーズ）Ending Theme",
                    "TV Saitama “Sydney 2000 Olympic Asian Qualifiers Send-Off Match”（シドニーオリンピック2000アジア地区予選 壮行試合）Theme Song",
                    "Nippon TV Network “13th All Japan High School Quiz Championship”（第13回全国高等学校クイズ選手権）Ending Theme",
                    "NTT DoCoMo Vancouver Olympics-related “Ou'en in Vancouver-hen”（応援 in バンクーバー篇）CM Song from February 10, 2010"
                ]
            },
            {
                disc: 1,
                track: 7,
                title: "Iki mo Dekinai",
                japaneseTitle: "息もできない",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Fuji TV Network anime “Chuuka Ichiban!”（中華一番!）2nd Opening Theme"
                ]
            },
            {
                disc: 1,
                track: 8,
                title: "Kimi ni Aitaku Nattara...",
                japaneseTitle: "君に逢いたくなったら…",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "TBS TV Network drama “Risou no Kekkon”（理想の結婚）Opening Theme"
                ]
            },
            {
                disc: 1,
                track: 9,
                title: "Oh my love",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 1,
                track: 10,
                title: "Tooi Hi no Nostalgia",
                japaneseTitle: "遠い日のNostalgia",
                credit: "Lyrics: Izumi Sakai / Music: Eisuke Mochizuki / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 2,
                track: 1,
                title: "Kakegae no Nai Mono",
                japaneseTitle: "かけがえのないもの",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Satoru Kobayashi",
                karaoke: false,
                tieup: [
                    "TBS TV Network dating variety show “Koisuru Hanikami!”（恋するハニカミ!）Theme Song"
                ]
            },
            {
                disc: 2,
                track: 2,
                title: "Eien",
                japaneseTitle: "永遠",
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network drama “Shitsurakuen”（失楽園）Theme Song",
                    "Canon “NEW EOS Kiss” CM Song"
                ]
            },
            {
                disc: 2,
                track: 3,
                title: "Good-bye My Loneliness",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Fuji TV Network drama “Kekkon no Risou to Genjitsu”（結婚の理想と現実）Theme Song",
                    "Clarion（クラリオン）Karaoke CF Song"
                ]
            },
            {
                disc: 2,
                track: 4,
                title: "DAN DAN Kokoro Hikareteku",
                japaneseTitle: "DAN DAN 心魅かれてく",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: null
            },
            {
                disc: 2,
                track: 5,
                title: "Kitto Wasurenai",
                japaneseTitle: "きっと忘れない",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Fuji TV Network drama “Bokutachi no Drama Series”（ボクたちのドラマシリーズ）“Shiratori Reiko de Gozaimasu! Season 2”（白鳥麗子でございます! 第2シリーズ）Ending Theme"
                ]
            },
            {
                disc: 2,
                track: 6,
                title: "Natsu wo Matsu Sail (Ho) no You ni",
                japaneseTitle: "夏を待つセイル(帆)のように",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Nationwide Toho Youga-kei Roadshow “Meitantei Conan Movie 09: Suihei Senjou no Strategy”（名探偵コナン 水平線上の陰謀）Theme Song"
                ]
            },
            {
                disc: 2,
                track: 7,
                title: "Today is another day",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Nippon TV anime special “YAWARA! Zutto Kimi no Koto ga…”（YAWARA! ずっと君のことが…）Theme Song"
                ]
            },
            {
                disc: 2,
                track: 8,
                title: "Nemurenai Yoru wo Daite",
                japaneseTitle: "眠れない夜を抱いて",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi, Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "TV Asahi Network wide show “Tonight”（トゥナイト）Ending Theme",
                    "TV Asahi Network drama “Love Story wo Kimi ni '92 〜Nemurenai Yoru wo Daite〜”（ラブストーリーを君に'92〜眠れない夜を抱いて〜）Theme Song"
                ]
            },
            {
                disc: 2,
                track: 9,
                title: "Forever you",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Documentary film “Princess Diana” Theme Song"
                ]
            },
            {
                disc: 2,
                track: 10,
                title: "Rainen no Natsu mo",
                japaneseTitle: "来年の夏も",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 2,
                track: 11,
                title: "Unmei no Roulette Mawashite",
                japaneseTitle: "運命のルーレット廻して",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Yomiuri TV/Nippon TV Network anime “Meitantei Conan”（名探偵コナン）Opening Theme"
                ]
            },
            {
                disc: 2,
                track: 12,
                title: "Suki na You ni Odoritai no",
                japaneseTitle: "好きなように踊りたいの",
                credit: "Lyrics: Izumi Sakai / Music: Kazuya Izumi / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: 3,
                track: 1,
                title: "IN MY ARMS TONIGHT",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Michiya Haruhata / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "TBS TV Network drama “Gakkou ga Abunai”（学校があぶない）Ending Theme"
                ]
            },
            {
                disc: 3,
                track: 2,
                title: "My Baby Grand ~Nukumori ga Hoshikute~",
                japaneseTitle: "My Baby Grand～ぬくもりが欲しくて～",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "NTT DoCoMo “DoCoMo '97 Winter”（ドコモ ’97-冬）CM Song"
                ]
            },
            {
                disc: 3,
                track: 3,
                title: "Anata wo Kanjiteitai",
                japaneseTitle: "あなたを感じていたい",
                credit: "Lyrics: Izumi Sakai / Music & Arrangement: Tetsuro Oda",
                karaoke: false,
                tieup: [
                    "NTT DoCoMo pager “Palfy V”（パルフィー V）CM Song"
                ]
            },
            {
                disc: 3,
                track: 4,
                title: "Shoujo no Koro ni Modotta Mitai ni",
                japaneseTitle: "少女の頃に戻ったみたいに",
                credit: "Lyrics: Izumi Sakai / Music: Aika Ohno / Arrangement: Daisuke Ikeda",
                karaoke: false,
                tieup: [
                    "Nationwide Toho Youga-kei Roadshow “Meitantei Conan Movie 02: 14-banme no Target”（名探偵コナン １４番目の標的）Theme Song"
                ]
            },
            {
                disc: 3,
                track: 5,
                title: "Ame ni Nurete",
                japaneseTitle: "雨に濡れて",
                credit: "Lyrics: Izumi Sakai, Show Wesugi / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: null
            },
            {
                disc: 3,
                track: 6,
                title: "Totsuzen",
                japaneseTitle: "突然",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: 3,
                track: 7,
                title: "Tomatteita Tokei ga Ima Ugokidashita",
                japaneseTitle: "止まっていた時計が今動き出した",
                credit: "Lyrics: Izumi Sakai / Music: Yuri Nakamura / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: [
                    "TV Asahi drama “Igi Ari! Onna Bengoshi Ooka Norie”（異議あり! 女弁護士大岡法江）Theme Song"
                ]
            },
            {
                disc: 3,
                track: 8,
                title: "Season",
                japaneseTitle: null,
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: null
            },
            {
                disc: 3,
                track: 9,
                title: "Kono Ai ni Oyogi Tsukarete mo",
                japaneseTitle: "この愛に泳ぎ疲れても",
                credit: "Lyrics: Izumi Sakai / Music: Tetsuro Oda / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "Kansai TV/Fuji TV Network drama “Ai to Giwaku no Suspense”（愛と疑惑のサスペンス）Opening Theme"
                ]
            },
            {
                disc: 3,
                track: 10,
                title: "Mou Sukoshi Ato Sukoshi...",
                japaneseTitle: "もう少し あと少し…",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Masao Akashi",
                karaoke: false,
                tieup: [
                    "TV Asahi Network drama “Lullaby Keiji '93”（ララバイ刑事'93）Ending Theme"
                ]
            },
            {
                disc: 3,
                track: 11,
                title: "Sayonara wa Ima mo Kono Mune ni Imasu",
                japaneseTitle: "サヨナラは今もこの胸に居ます",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Toei “Bokutachi no Eiga Series”（ぼくたちの映画シリーズ）film “Shiratori Reiko de Gozaimasu!”（白鳥麗子でございます!）Theme Song",
                    "Nationwide 28-Station Network program “J-ROCK ARTIST Count Down 50” Ending Theme"
                ]
            },
            {
                disc: 3,
                track: 12,
                title: "Ai ga Mienai",
                japaneseTitle: "愛が見えない",
                credit: "Lyrics: Izumi Sakai / Music: Masazumi Ozawa / Arrangement: Takeshi Hayama",
                karaoke: false,
                tieup: [
                    "Bristol-Myers Squibb “SEA BREEZE '95” CM Song"
                ]
            },
            {
                disc: 3,
                track: 13,
                title: "Tooi Hoshi wo Kazoete",
                japaneseTitle: "遠い星を数えて",
                credit: "Lyrics: Izumi Sakai / Music: Seiichiro Kuribayashi / Arrangement: Akihito Tokunaga",
                karaoke: false,
                tieup: null
            }
        ],
        related: [
            {
                title: "Wiki",
                href: "https://ja.wikipedia.org/wiki/ZARD_Best_Request_%E3%80%9C35th_Anniversary%E3%80%9C"
            },
            {
                title: "PV/CM",
                href: "#"
            }
        ]
    }
];
