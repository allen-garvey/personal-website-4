const about = require('./sections/about');
const contact = require('./sections/contact');
const projects = require('./sections/projects');
const videos = require('./sections/videos');
const music = require('./sections/music');
const artwork = require('./sections/artwork');
const photos = require('./sections/photos');

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
