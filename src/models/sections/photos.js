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
        description: 'Red abstract photo art of twisting buildings',
        id: 381,
        url: {
            large: '/media/images/photos-red-viginette-oilify-lg.jpg',
            medium: '/media/images/photos-red-viginette-oilify-med.jpg',
            small: '/media/images/photos-red-viginette-oilify-sm.jpg',
            thumbnail: '/media/images/photos-red-viginette-oilify-thumb.jpg',
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
        description: 'A photo of the stars in the sky at night',
        id: 382,
        url: {
            large: '/media/images/photos-starry-night-lg.jpg',
            medium: '/media/images/photos-starry-night-med.jpg',
            small: '/media/images/photos-starry-night-sm.jpg',
            thumbnail: '/media/images/photos-starry-night-thumb.jpg',
        },
    },
    {
        caption: null,
        description: 'A photo of a suburban street in autumn',
        id: 378,
        url: {
            large: '/media/images/photos-autumn-street-lg.jpg',
            medium: '/media/images/photos-autumn-street-med.jpg',
            small: '/media/images/photos-autumn-street-sm.jpg',
            thumbnail: '/media/images/photos-autumn-street-thumb.jpg',
        },
    },
    {
        caption: null,
        description:
            'A photo of three people on top of a mountain looking at the sea',
        id: 383,
        url: {
            large: '/media/images/photos-tauranga-lg.jpg',
            medium: '/media/images/photos-tauranga-med.jpg',
            small: '/media/images/photos-tauranga-sm.jpg',
            thumbnail: '/media/images/photos-tauranga-thumb.jpg',
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
    {
        caption: null,
        description: 'A photo of metal sphere sculpture',
        id: 384,
        url: {
            large: '/media/images/photos-wellington-sphere-lg.jpg',
            medium: '/media/images/photos-wellington-sphere-med.jpg',
            small: '/media/images/photos-wellington-sphere-sm.jpg',
            thumbnail: '/media/images/photos-wellington-sphere-thumb.jpg',
        },
    },
    {
        caption: null,
        description: 'A photo of bridge',
        id: 388,
        url: {
            large: '/media/images/photos-forth-bridge-lg.jpg',
            medium: '/media/images/photos-forth-bridge-med.jpg',
            small: '/media/images/photos-forth-bridge-sm.jpg',
            thumbnail: '/media/images/photos-forth-bridge-thumb.jpg',
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
