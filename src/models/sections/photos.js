const { expandImageUrls } = require('../image-helpers');

const images = [
    {
        caption: null,
        description: 'A photo of guitarist Bill Frisell',
        id: 380,
        url: {
            large: '/media/images/photos-bill-frisell-jersey-city-dithermark-med.jpg',
            medium: '/media/images/photos-bill-frisell-jersey-city-dithermark-med.jpg',
            small: '/media/images/photos-bill-frisell-jersey-city-dithermark-sm.jpg',
            thumbnail:
                '/media/images/photos-bill-frisell-jersey-city-dithermark-thumb.jpg',
        },
    },
    {
        caption: null,
        description: 'A photo of a man walking between two cruise ships',
        id: 379,
        url: {
            large: '/media/images/photos-two-worlds-ships-med.jpg',
            medium: '/media/images/photos-two-worlds-ships-med.jpg',
            small: '/media/images/photos-two-worlds-ships-sm.jpg',
            thumbnail: '/media/images/photos-two-worlds-ships-thumb.jpg',
        },
    },
    {
        caption: null,
        description: 'A photo of lake in a park at sunset',
        id: 385,
        url: {
            large: '/media/images/photos-park-sunset-dithermark-lg.jpg',
            medium: '/media/images/photos-park-sunset-dithermark-med.jpg',
            small: '/media/images/photos-park-sunset-dithermark-sm.jpg',
            thumbnail: '/media/images/photos-park-sunset-dithermark-thumb.jpg',
        },
    },
    {
        caption: null,
        description: 'Photo art of tree bark and a terrarium',
        id: 389,
        url: {
            large: '/media/images/photos-crystal-remembrances-sphere-lg.jpg',
            medium: '/media/images/photos-crystal-remembrances-sphere-med.jpg',
            small: '/media/images/photos-crystal-remembrances-sphere-sm.jpg',
            thumbnail:
                '/media/images/photos-crystal-remembrances-sphere-thumb.jpg',
        },
    },
    {
        caption: null,
        description: 'A photo of a two people in front of a mountain',
        id: 386,
        url: {
            large: '/media/images/photos-iceland-mountain-oilify-lg.jpg',
            medium: '/media/images/photos-iceland-mountain-oilify-med.jpg',
            small: '/media/images/photos-iceland-mountain-oilify-sm.jpg',
            thumbnail: '/media/images/photos-iceland-mountain-oilify-thumb.jpg',
        },
    },
    {
        caption: null,
        description: 'A photo of house with a grass roof',
        id: 387,
        url: {
            large: '/media/images/photos-torshavn-house-lg.jpg',
            medium: '/media/images/photos-torshavn-house-med.jpg',
            small: '/media/images/photos-torshavn-house-sm.jpg',
            thumbnail: '/media/images/photos-torshavn-house-thumb.jpg',
        },
    },
];

module.exports = {
    slug: 'photos',
    template: 'slideshow',
    heading: 'Photography & Photo Art',
    navHeading: 'Photos',
    headingLink: {
        text: 'Instagram',
        url: 'https://www.instagram.com/strangescenery/',
    },
    content: {
        images: expandImageUrls(images),
    },
};
