"use strict";

var config = {};


/*
* JavaScript configuration
*/
config.js = {};
config.js.SOURCE_DIR = __dirname + '/_js_source/';
config.js.DEST_DIR = __dirname + '/_includes/';
config.js.DIST_NAME = 'app'; //name of compiled file to be served i.e. app.js and app.min.js
config.js.app_files = ['routing', 'email'];

//add source dir prefix and .js suffix to js source files
config.js.app_files = config.js.app_files.map(function(file){return config.js.SOURCE_DIR + file + '.js';});





/*
* Export config
*/
module.exports = config;



