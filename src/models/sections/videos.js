const videos = [
    {
        title: 'Quest for Solitude',
        url: 'https://www.youtube.com/watch?v=24jL0av_ve8',
        thumbnailUrl: '/images/videos/quest-for-solitude.webp',
    },
    {
        title: `A New World (No Man's Sky 2014 trailer rescore)`,
        url: 'https://www.youtube.com/watch?v=XE7q111QT4w',
        thumbnailUrl: '/images/videos/no-mans-sky.webp',
    },
    {
        title: 'Westworld - World of dreams',
        url: 'https://www.youtube.com/watch?v=jNQIGIsRBj4',
        thumbnailUrl: '/images/videos/westworld.webp',
    },
    {
        title: 'Last Battle - Final Fantasy XIV',
        url: 'https://www.youtube.com/watch?v=WEsaplY1yco',
        thumbnailUrl: '/images/videos/final-fantasy.webp',
    },
];

module.exports = {
    slug: 'videos',
    template: 'videos',
    heading: 'Videos and Rescores',
    headingLink: {
        text: 'YouTube',
        url: 'https://www.youtube.com/@allengarvey',
    },
    content: {
        videos,
    },
};
