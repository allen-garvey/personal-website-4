const about = require('./sections/about');
const social = require('./sections/social');
const projects = require('./sections/projects');
const videos = require('./sections/videos');
const music = require('./sections/music');

module.exports = {
    list: ['about', 'projects', 'music', 'videos', 'social'],
    about,
    social,
    projects,
    videos,
    music,
};
