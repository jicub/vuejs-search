/**
* gulp js
*/

var config 	= require('../config.json'),
	gulp   	= require('gulp'),
	eslint	= require('gulp-eslint'),
	$      	= require('gulp-load-plugins')();

gulp.task('lint', function() {
	return gulp.src([
	config.js + '**/*.js'
	])
	.pipe(eslint())
	.pipe(eslint.format())
	.pipe(eslint.failAfterError());
})
