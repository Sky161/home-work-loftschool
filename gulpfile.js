'use strict'
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var watch = require('gulp-watch');
var jade = require('gulp-jade');

var tplPath = './';

gulp.task('scripts', function() {

	gulp.src(tplPath + 'scripts/main.js')
		.pipe(browserify())
		.pipe(plumber())
		.pipe(rename("build.js"))
		.pipe(gulp.dest(tplPath +'/app/'))
});

gulp.task('jade', function () {
	gulp.src(tplPath + '/jade/*.jade')
		.pipe(plumber())
		.pipe(jade({pretty: true}))
		.pipe(gulp.dest(tplPath + './app/'))
		.pipe(browserSync.stream());
});

gulp.task('server', function(){
	browserSync.init({
		server: {
			baseDir: "./app"
		}
	});
});

gulp.task('watch', ['jade', 'scripts', 'server'], function () {
	watch(tplPath + '/scripts/**/*.js', function(){
		gulp.start("scripts");
	});
	watch(tplPath + '/jade/**/*.jade', function(){
		gulp.start("jade");
	});
});

gulp.task('default', ['jade', 'scripts']);
