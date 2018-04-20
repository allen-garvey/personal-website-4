"use strict";

let path = require('path');
let config = {};


/*
* JavaScript configuration
*/
config.js = {};
config.js.SOURCE_DIR = path.join(__dirname, 'js_source');
config.js.DEST_DIR = path.join(__dirname, 'php', 'inc', 'js');
config.js.DIST_NAME = 'app'; //name of compiled file to be served i.e. app.js and app.min.js
config.js.HEAD_DIST_NAME = 'head';
config.js.head_files = ['head']; //js for html head
config.js.app_files = ['aquery', 'routing', 'email'];

//add source dir prefix and .js suffix to js source files
config.js.app_files = config.js.app_files.map((file)=>{return path.join(config.js.SOURCE_DIR, `${file}.js`);});
config.js.head_files = config.js.head_files.map((file)=>{return path.join(config.js.SOURCE_DIR, `${file}.js`);});

/*
* Sass/Styles configuration
*/
config.styles = {};
config.styles.SOURCE_DIR = path.join(__dirname, 'sass/');
config.styles.DEST_DIR = path.join(__dirname, 'docs/');
config.styles.sass_options = {
  errLogToConsole: true,
  // sourceComments: true, //turns on line number comments 
  outputStyle: 'compressed' //options: expanded, nested, compact, compressed
};

/*
* Export config
*/
module.exports = config;



