'use strict'
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

var tplPath = './';

gulp.task('scripts', function() {

	gulp.src(tplPath + 'scripts/main.js')
		.pipe(browserify())
		.pipe(plumber())
		.pipe(rename("build.js"))
		.pipe(gulp.dest(tplPath +'/app/'))
});

gulp.task('server', function(){
	browserSync.init({
		server: {
			baseDir: "./app"
		}
	});
});

gulp.task('watch', ['scripts','server'], function () {
	gulp.watch(tplPath + '/scripts/**/*.js', ['scripts']);
});

gulp.task('default', ['scripts']);
