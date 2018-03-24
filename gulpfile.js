"use strict";

let path = require('path');
let gulp = require('gulp');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');
let rename = require('gulp-rename');

let config = require(path.join(__dirname, 'gulp-config.js'));

/*
* JavaScript Wrappers
*/

function concatScriptsWrapper(files, dist_name){
	return gulp.src(files)
		.pipe(concat(`${dist_name}.js`))
		.pipe(gulp.dest(config.js.DEST_DIR));
}

function minifyScriptsWrapper(dist_name){
	return gulp.src(path.join(config.js.DEST_DIR, `${dist_name}.js`))
		.pipe(uglify())
		.pipe(rename(`${dist_name}.min.js`))
		.pipe(gulp.dest(config.js.DEST_DIR));
}

/*
* JavaScript Tasks
*/
//Footer js
gulp.task('concatScripts:footer', function(){
	return concatScriptsWrapper(config.js.app_files, config.js.DIST_NAME);
});

gulp.task('minifyScripts:footer', ['concatScripts:footer'], function(){
	return minifyScriptsWrapper(config.js.DIST_NAME);
});


//Head JS
gulp.task('concatScripts:head', function(){
	return concatScriptsWrapper(config.js.head_files, config.js.HEAD_DIST_NAME);
});

gulp.task('minifyScripts:head', ['concatScripts:head'], function(){
	return minifyScriptsWrapper(config.js.HEAD_DIST_NAME);
});


/*
* Watch tasks
*/
gulp.task('watchScripts', function(){
	gulp.watch(config.js.SOURCE_DIR + '/**/*.js', ['minifyScripts:footer', 'minifyScripts:head']);
});


/*
* Main gulp tasks
*/
gulp.task('watch', ['build', 'watchScripts']);
gulp.task('build', ['minifyScripts:footer', 'minifyScripts:head']);
gulp.task('default', ['build']);



