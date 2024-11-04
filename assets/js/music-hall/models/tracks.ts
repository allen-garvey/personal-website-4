export interface Track {
    title: string;
    year: number;
    length: number; // length in seconds
    filename: string;
    description?: string;
    isMp3?: boolean;
}

interface AlbumMeta {
    slug: string;
}

export interface Album {
    meta: AlbumMeta;
    tracks: Track[];
}

export const albums: Album[] = [
    {
        meta: {
            slug: 'current-best-of',
        },
        tracks: [
            {
                title: 'Thoughts of Canada',
                // completion_date: '2023-11-06',
                year: 2023,
                filename: 'rise-and-fall/thoughts-of-canada',
                length: 184,
            },
            {
                title: 'Adieu',
                // completion_date: '2020-06-25',
                year: 2020,
                filename: 'rise-and-fall/adieu',
                length: 101,
            },
            {
                title: 'We Are All On The Same Team',
                // completion_date: '2022-11-19',
                year: 2022,
                filename: 'swiss-army-band/we-are-all-on-the-same-team',
                length: 97,
            },
            {
                title: 'Acid Confusion',
                // completion_date: '2022-10-20',
                year: 2022,
                filename: 'secondary-colors/acid-confusion',
                length: 144,
            },
            {
                title: 'Shattered Horizons',
                year: 2021,
                filename: 'secondary-colors/shattered-horizons',
                length: 95,
            },
            {
                title: 'Psychic Cleansing',
                // completion_date: '2022-11-02',
                year: 2019,
                filename: 'nightscapes-dreamscapes/psychic-cleansing',
                length: 79,
            },
        ],
    },
];
