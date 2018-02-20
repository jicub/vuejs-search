/**
 * gulp fonts
 */

var config = require('../config.json');
var gulp   = require('gulp');

gulp.task('fonts', function () {
  return gulp.src([config.fonts + '**'])
    .pipe(gulp.dest(config.dest.fonts));
})
