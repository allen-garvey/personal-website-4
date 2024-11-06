const { expandImageUrls } = require('../image-helpers');

const images = [
    {
        caption: null,
        description: 'A painting of a man',
        id: 360,
        url: {
            large: '/media/images/2024-purple-man-painting-med.jpg',
            medium: '/media/images/2024-purple-man-painting-med.jpg',
            small: '/media/images/2024-purple-man-painting-sm.jpg',
            thumbnail: '/media/images/2024-purple-man-painting-thumb.jpg',
        },
    },
    {
        caption: null,
        description: 'Digital painting of the Church Mission House',
        id: 113,
        url: {
            large: '/media/images/church-mission-house-painting-med.jpg',
            medium: '/media/images/church-mission-house-painting-med.jpg',
            small: '/media/images/church-mission-house-painting-sm.jpg',
            thumbnail: '/media/images/church-mission-house-painting-thumb.jpg',
        },
    },
    {
        caption: null,
        description: 'Digital painting of a bungalow style house',
        id: 153,
        url: {
            large: '/media/images/stamford-roadside-bungalow-painting-lg.jpg',
            medium: '/media/images/stamford-roadside-bungalow-painting-med.jpg',
            small: '/media/images/stamford-roadside-bungalow-painting-sm.jpg',
            thumbnail:
                '/media/images/stamford-roadside-bungalow-painting-thumb.jpg',
        },
    },
    {
        caption: null,
        description: 'Crayon drawing of a cone flower',
        id: 166,
        url: {
            large: '/media/images/cone-flower-med.jpg',
            medium: '/media/images/cone-flower-med.jpg',
            small: '/media/images/cone-flower-sm.jpg',
            thumbnail: '/media/images/cone-flower-thumb.jpg',
        },
    },
    {
        caption: null,
        description: 'Crayon, pencil and ink drawing of peeling tree bark',
        id: 172,
        url: {
            large: '/media/images/peeling-tree-med.jpg',
            medium: '/media/images/peeling-tree-med.jpg',
            small: '/media/images/peeling-tree-sm.jpg',
            thumbnail: '/media/images/peeling-tree-thumb.jpg',
        },
    },
    {
        caption: null,
        description: 'Crayon and ink drawing of a withered maple leaf',
        id: 176,
        url: {
            large: '/media/images/withered-maple-leaf-med.jpg',
            medium: '/media/images/withered-maple-leaf-med.jpg',
            small: '/media/images/withered-maple-leaf-sm.jpg',
            thumbnail: '/media/images/withered-maple-leaf-thumb.jpg',
        },
    },
    {
        caption: null,
        description: 'Portrait of a man on tan paper',
        id: 212,
        url: {
            large: '/media/images/shadow-lennon-tan-med.jpg',
            medium: '/media/images/shadow-lennon-tan-med.jpg',
            small: '/media/images/shadow-lennon-tan-sm.jpg',
            thumbnail: '/media/images/shadow-lennon-tan-thumb.jpg',
        },
    },
    {
        caption: null,
        description: 'Digital painting of flowers on a deck',
        id: 229,
        url: {
            large: '/media/images/deck-flower-garden-painting-lg.jpg',
            medium: '/media/images/deck-flower-garden-painting-med.jpg',
            small: '/media/images/deck-flower-garden-painting-sm.jpg',
            thumbnail: '/media/images/deck-flower-garden-painting-thumb.jpg',
        },
    },
    {
        caption: null,
        description: 'A digital painting of a woman',
        id: 346,
        url: {
            large: '/media/images/woman-with-halo-bangs-painting-med.jpg',
            medium: '/media/images/woman-with-halo-bangs-painting-med.jpg',
            small: '/media/images/woman-with-halo-bangs-painting-sm.jpg',
            thumbnail: '/media/images/woman-with-halo-bangs-painting-thumb.jpg',
        },
    },
    {
        caption: null,
        description: 'A painting of the interior of a house',
        id: 349,
        url: {
            large: '/media/images/midnight-cabin-interior-painting-med.jpg',
            medium: '/media/images/midnight-cabin-interior-painting-med.jpg',
            small: '/media/images/midnight-cabin-interior-painting-sm.jpg',
            thumbnail:
                '/media/images/midnight-cabin-interior-painting-thumb.jpg',
        },
    },
    {
        caption: null,
        description: 'A painting of a cabin',
        id: 356,
        url: {
            large: '/media/images/colorado-wood-cabin-painting-lg.jpg',
            medium: '/media/images/colorado-wood-cabin-painting-med.jpg',
            small: '/media/images/colorado-wood-cabin-painting-sm.jpg',
            thumbnail: '/media/images/colorado-wood-cabin-painting-thumb.jpg',
        },
    },
    {
        caption: null,
        description: 'A painting of a woman',
        id: 375,
        url: {
            large: '/media/images/2024-purple-lady-n-painting-med.jpg',
            medium: '/media/images/2024-purple-lady-n-painting-med.jpg',
            small: '/media/images/2024-purple-lady-n-painting-sm.jpg',
            thumbnail: '/media/images/2024-purple-lady-n-painting-thumb.jpg',
        },
    },
];

module.exports = {
    slug: 'artwork',
    template: 'slideshow',
    heading: 'Artwork',
    headingLink: {
        text: 'Full catalog',
        url: 'https://strangescenery.com',
    },
    content: {
        images: expandImageUrls(images),
    },
};
