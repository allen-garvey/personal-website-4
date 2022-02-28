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
        logo: 'reason-packs-icon.svg',
        description: '<a href="https://www.reasonstudios.com/">Reason+</a> is a subscription service that allows users to download sounds and presets in the form of sound packs for use in Reason. Using the desktop companion app, subscribers can view and download the packs, but for non-subscribers and users that don\'t have the app, they are limited to the <a href="https://share.reasonstudios.com/">Reason+ share site.</a> I reversed engineered the API, and used Vue to create a fully featured single page app so users can quickly and easily preview all the sound packs.',
    },
    {
        title: 'Capricornus Squadron',
        github: 'capricornus-squadron',
        demoUrl: 'https://allen-garvey.github.io/capricornus-squadron',
        logo: 'capricornus-squadron-icon.svg',
        description: '2D turn-based strategy browser game in the style of Advance Wars. I created the custom game engine, user interface and music while acting as the lead developer for two other students. Uses the browser Canvas and Web Audio APIs. While playable on mobile, for the best experience use a device with a mouse.'
    },
    {
        title: 'Chess Scout',
        github: 'chess-scout-react',
        demoUrl: 'https://chess-scout-react.netlify.app/',
        logo: 'chess-scout-icon.svg',
        description: 'A SPA app that uses the Lichess API to visualize a player\'s opening repetoire and move trees. Built with React, it uses a custom PGN parser and chess rendering engine to display chess games using the browser Canvas API.',
    },
    {
        title: 'Umbrella CMS',
        github: 'phoenix-umbrella',
        demoUrl: 'https://strangescenery.com',
        logo: 'umbrella-icon.svg',
        description: 'Custom CMS, blog engine and static site generator specifically designed for artwork and photography blogs. Made with <a href="https://elixir-lang.org">Elixir</a> and the <a href="https://www.phoenixframework.org">Phoenix Framework.</a> Features include: separate admin section, custom tags and categories, multiple image asset size support, organizing images in albums using drag-and-drop, and image carousels with optional captions and lazy asset loading.'
    },
    // {
    //     title: 'dminjs',
    //     github: 'dminjs',
    //     logo: 'dminjs-icon.svg',
    //     description: 'JavaScript minifier that strips comments and excess whitespace in the spirit of <a href="https://www.crockford.com/jsmin.html">jsmin.</a> Written in D and compiles to a native binary, which allows faster startup speed than <a href="https://github.com/mishoo/UglifyJS">UglifyJS</a> or <a href="https://developers.google.com/closure/compiler">Google Closure Compiler.</a> Uses single-pass parsing with single character lookahead for increased speed and reduced memory usage, and supports ES5, ES2015, ES6 and ES7 versions of JavaScript syntax.'
    // },
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