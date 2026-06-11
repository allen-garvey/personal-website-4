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
        description: 'A digital painting of a man',
        id: 423,
        url: {
            large: '/media/images/2025-painting-8-med.webp',
            medium: '/media/images/2025-painting-8-med.webp',
            small: '/media/images/2025-painting-8-sm.webp',
            thumbnail: '/media/images/2025-painting-8-thumb.webp',
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
        description: 'A digital painting of a woman',
        id: 415,
        url: {
            large: '/media/images/2025-painting-7-med.webp',
            medium: '/media/images/2025-painting-7-med.webp',
            small: '/media/images/2025-painting-7-sm.webp',
            thumbnail: '/media/images/2025-painting-7-thumb.webp',
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
