/**
* gulp watch
*/

var config = require('../config.json'),
	bSync 	= require('browser-sync'),
	gulp 	= require('gulp'),
	$ 		= require('gulp-load-plugins')();

gulp.task('serve', function () {
	// watch jade files
	gulp.watch(config.jade + '**/*.pug', ['html']);

	// watch sass files
	gulp.watch(config.sass + '**/*.scss', ['sass']);

	// watch js files
	gulp.watch(config.js + '**/*.js', ['lint', 'brwsfy']);

	// watch json files
	gulp.watch(config.json + '**', ['build']);

	// watch vue files
	gulp.watch(config.js + '**/*.vue', ['brwsfy']);

	bSync.init({
	  notify: false,
	  open: "external",
	  logPrefix: 'browser-sync',
	  server: config.dest.dist
	});

	gulp.watch(config.dest.dist + '**/*.{html,css,js,vue,json}').on('change', bSync.reload);
});