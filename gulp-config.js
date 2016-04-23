"use strict";

var config = {};


/*
* JavaScript configuration
*/
config.js = {};
config.js.SOURCE_DIR = __dirname + '/_js_source/';
config.js.DEST_DIR = __dirname + '/_includes/';
config.js.DIST_NAME = 'app'; //name of compiled file to be served i.e. app.js and app.min.js
config.js.HEAD_DIST_NAME = 'head';
config.js.head_files = ['head']; //js for html head
config.js.app_files = ['aquery', 'routing', 'email'];

//add source dir prefix and .js suffix to js source files
config.js.app_files = config.js.app_files.map(function(file){return config.js.SOURCE_DIR + file + '.js';});
config.js.head_files = config.js.head_files.map(function(file){return config.js.SOURCE_DIR + file + '.js';});


/*
* Sass/Styles configuration
*/
config.styles = {};
config.styles.SOURCE_DIR = __dirname + '/_sass/';
config.styles.DEST_DIR = __dirname + '/css/';
config.styles.sass_options = {
  errLogToConsole: true,
  // sourceComments: true, //turns on line number comments 
  outputStyle: 'compressed' //options: expanded, nested, compact, compressed
};


/*
* Export config
*/
module.exports = config;



