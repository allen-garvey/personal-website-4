const videos = [
    {
        title: 'Quest for Solitude',
        url: 'https://www.youtube.com/watch?v=24jL0av_ve8',
        thumbnailUrl:
            'https://i.ytimg.com/vi/24jL0av_ve8/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhaIGUoTDAP&rs=AOn4CLCO5fZ5PPgRNwAKjh1sKrJlSZtDXQ',
    },
    {
        title: `A New World (No Man's Sky 2014 trailer rescore)`,
        url: 'https://www.youtube.com/watch?v=XE7q111QT4w',
        thumbnailUrl:
            'https://i.ytimg.com/vi/XE7q111QT4w/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhYIGUoWjAP&rs=AOn4CLAy6lh17H0hy8zRkVXd0VGbszYrFw',
    },
    {
        title: 'Westworld - World of dreams',
        url: 'https://www.youtube.com/watch?v=jNQIGIsRBj4',
        thumbnailUrl:
            'https://i.ytimg.com/vi/jNQIGIsRBj4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBdRffpHeF47xbrJCkjVGogAGeaA',
    },
    {
        title: 'Last Battle - Final Fantasy XIV',
        url: 'https://www.youtube.com/watch?v=WEsaplY1yco',
        thumbnailUrl:
            'https://i.ytimg.com/vi/WEsaplY1yco/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9vczLystJMziWUF_kGdyLk6doXg',
    },
];

module.exports = {
    slug: 'videos',
    heading: 'Videos and Rescores',
    headingLink: {
        text: 'YouTube',
        url: 'https://www.youtube.com/@allengarvey',
    },
    content: {
        videos,
    },
};
