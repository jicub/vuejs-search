/**
 * gulp json
 */
 
var config = require('../config.json');
var gulp   = require('gulp');

gulp.task('json', function () {
  return gulp.src(config.json + '**')
    .pipe(gulp.dest(config.dest.json));
});
