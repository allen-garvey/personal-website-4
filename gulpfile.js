"use strict";

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var maps = require('gulp-sourcemaps');
var sass = require('gulp-sass');

var config = require(__dirname + '/gulp-config.js');

/*
* JavaScript Wrappers
*/

function concatScriptsWrapper(files, dist_name){
	return gulp.src(files)
		.pipe(maps.init())
		.pipe(concat(dist_name + '.js'))
		.pipe(maps.write('./'))
		.pipe(gulp.dest(config.js.DEST_DIR));
}

function minifyScriptsWrapper(dist_name){
	return gulp.src(config.js.DEST_DIR + dist_name + '.js')
		.pipe(uglify())
		.pipe(rename(dist_name + '.min.js'))
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
* Sass/Styles Tasks
*/
gulp.task('sass', function() {
    gulp.src(config.styles.SOURCE_DIR + '**/*.scss')
        .pipe(sass(config.styles.sass_options).on('error', sass.logError))
        .pipe(gulp.dest(config.styles.DEST_DIR));
});

/*
* Watch tasks
*/

gulp.task('watchSass',function() {
    gulp.watch(config.styles.SOURCE_DIR + '**/*.scss', ['sass']);
});

gulp.task('watchScripts', function(){
	gulp.watch(config.js.SOURCE_DIR + '**/*.js', ['minifyScripts:footer', 'minifyScripts:head']);
});


/*
* Main gulp tasks
*/
gulp.task('watch', ['build', 'watchScripts', 'watchSass']);
gulp.task('build', ['minifyScripts:footer', 'minifyScripts:head', 'sass']);
gulp.task('default', ['build']);



