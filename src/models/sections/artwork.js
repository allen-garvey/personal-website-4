const images = [
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
        images: images.map((image) => {
            const ret = {
                ...image,
            };
            Object.keys(image.url).forEach(
                (key) =>
                    (ret.url[key] = `https://strangescenery.com${ret.url[key]}`)
            );

            return ret;
        }),
    },
};
