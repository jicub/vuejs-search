/**
 * gulp html
 */

var config = require('../config.json');
var gulp   = require('gulp');
var pug    = require('gulp-pug');
var $      = require('gulp-load-plugins')();

gulp.task('html', function() {
  gulp.src(config.jade + '**/*.pug')
    .pipe(pug())
    .pipe(gulp.dest(config.dest.dist))
});