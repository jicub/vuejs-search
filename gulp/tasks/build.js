/**
 * gulp default
 */

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function (cb) {
  runSequence('html', ['sass', 'lint', 'json', 'brwsfy', 'images', 'fonts'], cb);
});
