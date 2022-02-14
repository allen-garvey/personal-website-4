const projects = [
    {
        title: 'Dithermark',
        github: 'dithermark',
        demoUrl: 'https://dithermark.com',
        logo: 'dithermark-icon.svg',
        description: 'Web application that allows you to easily create original pixel art. Includes variations on many popular image dithering algorithms, as well as original color quantization algorithm research. Uses <a href="https://vuejs.org">Vue.js</a>, the Unsplash photo API for random images and modern JavaScript features such as: Web Workers, Canvas API, and WebGL.'
    },
    {
        title: 'Reason Sound Pack Viewer',
        github: 'reason-sound-pack-viewer',
        demoUrl: 'https://reason-packs.allengarvey.com',
        logo: 'dithermark-icon.svg',
        description: 'A SPA app built with Vue and Vue Router that uses an API from Reason Studios to browse and preview sound packs from their Reason+ subscription service.',
    },
    {
        title: 'Capricornus Squadron',
        github: 'capricornus-squadron',
        demoUrl: 'https://allen-garvey.github.io/capricornus-squadron',
        logo: 'capricornus-squadron-icon.svg',
        description: '2D turn-based strategy browser game in the style of Advance Wars. Created the game engine, user interface and music while acting as the lead engineer for two other students. Uses the browser Canvas and Web Audio APIs.'
    },
    {
        title: 'Chess Scout',
        github: 'chess-scout-react',
        demoUrl: 'https://chess-scout-react.netlify.app/',
        logo: 'dithermark-icon.svg',
        description: 'A SPA app that uses the Lichess API to visualize a player\'s opening repetoire and move trees. Built with React, it uses a custom PGN parser and chess rendering engine to display chess games using the browser Canvas API.',
    },
    {
        title: 'Umbrella CMS',
        github: 'phoenix-umbrella',
        demoUrl: 'https://strangescenery.com',
        logo: 'artour-icon.svg',
        description: 'Custom CMS, blog engine and static site generator specifically designed for artwork and photography blogs. Made with <a href="https://elixir-lang.org">Elixir</a> and the <a href="https://www.phoenixframework.org">Phoenix Framework.</a> Features include: separate admin section, custom tags and categories, multiple image asset size support, organizing images in albums using drag-and-drop, and image carousels with optional captions and lazy asset loading.'
    },
    {
        title: 'dminjs',
        github: 'dminjs',
        logo: 'dminjs-icon.svg',
        description: 'JavaScript minifier that strips comments and excess whitespace in the spirit of <a href="https://www.crockford.com/jsmin.html">jsmin.</a> Written in D and compiles to a native binary, which allows faster startup speed than <a href="https://github.com/mishoo/UglifyJS">UglifyJS</a> or <a href="https://developers.google.com/closure/compiler">Google Closure Compiler.</a> Uses single-pass parsing with single character lookahead for increased speed and reduced memory usage, and supports ES5, ES2015, ES6 and ES7 versions of JavaScript syntax.'
    },
].map((project) => {
    project.githubUrl = `https://github.com/allen-garvey/${project.github}`;
    project.url = project.demoUrl || project.githubUrl;
    return project;
});


module.exports = {
    title: 'Projects',
    slug: 'projects',
    heading: 'Projects',
    content: {
        projects,
    }    
};