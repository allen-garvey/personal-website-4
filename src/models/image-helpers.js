const expandImageUrls = (images) =>
    images.map((image) => {
        const ret = {
            ...image,
        };
        Object.keys(image.url).forEach(
            (key) =>
                (ret.url[key] = `https://strangescenery.com${ret.url[key]}`)
        );

        return ret;
    });

module.exports = {
    expandImageUrls,
};
