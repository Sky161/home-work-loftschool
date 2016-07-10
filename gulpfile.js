'use strict'
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var run = require('gulp-run');

var tplPath = './';

gulp.task('scripts', function() {

	gulp.src(tplPath + 'scripts/main.js')
		.pipe(browserify())
		.pipe(plumber())
		.pipe(rename("build.js"))
		.pipe(gulp.dest(tplPath +'/app/'))
		.pipe(run("node ./app/build.js").exec())
});

gulp.task('server', function(){
	browserSync.init({
		server: {
			baseDir: "./app"
		}
	});
});

gulp.task('watch', ['scripts'], function () {
	gulp.watch(tplPath + '/scripts/**/*.js', ['scripts']);
});

gulp.task('default', ['scripts']);
