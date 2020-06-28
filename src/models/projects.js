const projects = [
    {
        title: 'Dithermark',
        completionDate: '2018-08-01',
        github: 'dithermark',
        demoUrl: 'https://dithermark.com',
        logo: 'dithermark-icon.svg',
        description: 'Web application that allows you to easily create original pixel art. Includes variations on many popular image dithering algorithms, as well as original color quantization algorithm research. Uses <a href=\'https://vuejs.org/\'>Vue.js</a>, the <a href=\'https://unsplash.com/developers\'>Unsplash photo API</a> and modern JavaScript features such as: ES6 syntax, Web Workers, Canvas API, and WebGL.'
    },
    {
        title: 'Artour',
        completionDate: '2017-03-10',
        github: 'artour',
        demoUrl: 'https://strangescenery.com',
        logo: 'artour-icon.svg',
        description: 'Custom CMS, blog engine and static site generator specifically designed for artwork and photography blogs. Made with <a href=\'http://elixir-lang.org/\'>Elixir</a> and the <a href=\'http://www.phoenixframework.org/\'>Phoenix Framework.</a> Features include: separate admin section, custom tags and categories, multiple image asset size support, organizing images in albums using drag-and-drop, and image carousels with optional captions and lazy asset loading.'
    },
    {
        title: 'Capricornus Squadron',
        completionDate: '2017-06-10',
        github: 'capricornus-squadron',
        demoUrl: 'https://allen-garvey.github.io/capricornus-squadron',
        logo: 'capricornus-squadron-icon.svg',
        description: '2D turn-based strategy browser game in the style of Advance Wars. Created the game engine, user interface and music while acting as the lead engineer for two other students. Uses the browser Canvas and Web Audio APIs.'
    },
    {
        title: 'dminjs',
        completionDate: '2018-01-08',
        github: 'dminjs',
        logo: 'dminjs-icon.svg',
        description: 'JavaScript minifier that strips comments and excess whitespace in the spirit of <a href=\'https://www.crockford.com/javascript/jsmin.html\'>jsmin.</a> Written in D and compiles to a native binary, which allows faster startup speed than <a href=\'https://github.com/mishoo/UglifyJS\'>UglifyJS</a> or <a href=\'https://developers.google.com/closure/compiler/\'>Google Closure Compiler.</a> Uses single-pass parsing with single character lookahead for increased speed and reduced memory usage, and supports ES5, ES2015, ES6 and ES7 versions of JavaScript syntax.'
    },
    {
        title: 'CSV Parser',
        completionDate: '2016-04-25',
        github: 'csv-parser-js',
        logo: 'csv-parser-icon.svg',
        description: 'CSV parser written in JavaScript that is currently being used in production as part of a corporate LMS (learning management system). Compatible with the CSV output from Excel, Google Sheets, and Apple Numbers and can be used either in the browser or on a server using <a href=\'https://nodejs.org\'>Node.js.</a> Includes unit tests using the <a href=\'https://jasmine.github.io/index.html\'>Jasmine test framework.</a>'
    }
].map((project) => {
    project.githubUrl = `https://github.com/allen-garvey/${project.github}`;
    project.url = project.demoUrl || project.githubUrl;
    return project;
});


module.exports = {
    slug: 'projects',
    heading: 'Projects',
    content: {
        projects,
    }    
};