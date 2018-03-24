"use strict";

let path = require('path');
let gulp = require('gulp');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');

let config = require(path.join(__dirname, 'gulp-config.js'));

/*
* JavaScript Wrappers
*/
function minifyScriptsWrapper(files, dist_name){
	return gulp.src(files)
		.pipe(concat(`${dist_name}.min.js`))
		.pipe(uglify())
		.pipe(gulp.dest(config.js.DEST_DIR));
}

/*
* JavaScript Tasks
*/
//Footer js
gulp.task('minifyScripts:footer', function(){
	return minifyScriptsWrapper(config.js.app_files, config.js.DIST_NAME);
});


//Head JS
gulp.task('minifyScripts:head', function(){
	return minifyScriptsWrapper(config.js.head_files, config.js.HEAD_DIST_NAME);
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



