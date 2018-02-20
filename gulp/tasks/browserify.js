
var config 		= require('../config.json'),
	gulp 		= require('gulp'),
	browserify 	= require('browserify'),
	babelify	= require('babelify'),
	envify		= require('envify/custom'), // Use the envify custom module to specify environment variables
	source		= require('vinyl-source-stream'),
	buffer		= require('vinyl-buffer'),
	glob		= require('glob'),
	vueify		= require('vueify'),
	gutil		= require('gulp-util'),
	$ 			= require('gulp-load-plugins')();

gulp.task('brwsfy', function () {
	var files = glob.sync(config.js + '**/*.js', config.js + '**/*.vue');

	return browserify({
		entries: files,
		debug: true,
		transform:[
			['babelify', {presets: ["node6-es6", "react"]}],
			[vueify]
		]
	})
	.transform(
		envify({ _: 'purge', NODE_ENV: 'production'}),
		{ global: true }
	)
	.bundle()
	.pipe(source('all.min.js'))
	.pipe(buffer())
	.pipe($.uglify())
	.on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
	.pipe(gulp.dest(config.dest.js));

});