const { requireUncached } = require('../helpers/live-reload');

const about = requireUncached(require.resolve('./sections/about'));
const contact = requireUncached(require.resolve('./sections/contact'));
const projects = requireUncached(require.resolve('./sections/projects'));
const videos = requireUncached(require.resolve('./sections/videos'));
const music = requireUncached(require.resolve('./sections/music'));
const artwork = requireUncached(require.resolve('./sections/artwork'));
const photos = requireUncached(require.resolve('./sections/photos'));

const nav = [projects, artwork, music, photos, videos, contact].map(
    (module) => ({
        slug: module.slug,
        heading: module.navHeading || module.heading,
    })
);

module.exports = {
    nav,
    list: [about.slug].concat(nav.map((item) => item.slug)),
    about,
    contact,
    projects,
    videos,
    music,
    artwork,
    photos,
};
