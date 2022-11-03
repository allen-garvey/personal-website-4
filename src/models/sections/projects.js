const projects = [
    {
        title: 'Dithermark',
        github: 'dithermark',
        demoUrl: 'https://dithermark.com',
        logo: 'dithermark-icon.svg',
        description: 'Web app that allows you to quickly and easily transform photos into original pixel art. It includes variations on many popular image dithering algorithms, as well as original color quantization algorithm research. Built with Vue, it uses the Canvas API, Web Workers, WebGL and the Unsplash photo API for random images.'
    },
    {
        title: 'Reason Sound Pack Viewer',
        github: 'reason-sound-pack-viewer',
        demoUrl: 'https://reason.pluginista.com',
        logo: 'reason-packs-icon.svg',
        description: '<a href="https://www.reasonstudios.com/">Reason+</a> is a subscription service that allows users to download sounds and presets in the form of sound packs for use in Reason. Using the desktop companion app, subscribers can view and download the packs, but non-subscribers and users that don\'t have the app are limited to the <a href="https://share.reasonstudios.com/">Reason+ share site.</a> I reversed engineered the API, and used Vue to create a fully featured single page app so users can quickly and easily preview all the sound packs.',
    },
    {
        title: 'WebAssembly Error Diffusion Dither Performance Comparison',
        github: 'wasm-error-diffusion-dither-comparison',
        demoUrl: 'https://wasm.dithermark.com',
        logo: 'wasm-comparison-icon.svg',
        description: 'Web app built with Vue that allows the user to compare the performance of JavaScript against WebAssembly generated from C++, D, Rust and Zig for dithering an image using the Stucki error diffusion algorithm.'
    },
    {
        title: 'Capricornus Squadron',
        github: 'capricornus-squadron',
        demoUrl: 'https://allen-garvey.github.io/capricornus-squadron',
        logo: 'capricornus-squadron-icon.svg',
        description: '2D turn-based strategy browser game in the style of Advance Wars. I created the custom game engine, user interface and music while acting as the lead developer for two other students. Uses the browser Canvas and Web Audio APIs. While playable using touch input, for the best experience a mouse is recommended.'
    },
    {
        title: 'Chess Scout',
        github: 'chess-scout-react',
        demoUrl: 'https://chess-scout-react.netlify.app/',
        logo: 'chess-scout-icon.svg',
        description: 'Opening preparation is a key component of chess success. I built an app that uses the Lichess API to download a player\'s games and visually display their opening repertoire and statistics. This can be used to prepare against tough opponents or to evaluate your own strengths and weaknesses. Built with React, it uses a custom PGN parser and chess rendering engine to display chess games using the browser Canvas API.',
    },
    {
        title: 'Umbrella CMS',
        github: 'phoenix-umbrella',
        demoUrl: 'https://strangescenery.com',
        logo: 'umbrella-icon.svg',
        description: 'A project created using Elixir and the Phoenix Framework to house various custom content management systems (CMS). These include organization for book and movie reviews, bookmarks, my music library, inspirational quotes, artwork and photography. <br><br>It is structured as an umbrella project, which allows the advantages of a monolith, as projects can easily share code and use the same instance of the BEAM virtual machine for increased efficiency, while also having the flexibility of microservices, as each sub-project can have its own dependencies and configuration. Each sub-project uses the same custom authentication middleware, which allows the sharing of users for an SSO-like seamless authentication flow. It also includes custom mix (scripting) tasks to import and convert images for my photo library and to generate the static site for my artwork at <a href="https://strangescenery.com">strangescenery.com</a>.',
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