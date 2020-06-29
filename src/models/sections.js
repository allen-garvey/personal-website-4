const about = require('./sections/about');
const contact = require('./sections/contact');
const projects = require('./sections/projects');

module.exports = {
    list: ['about', 'projects', 'contact'],
    navList: ['contact', 'about', 'projects'],
    about,
    contact,
    projects,
};