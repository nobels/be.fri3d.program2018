var gulp = require('gulp');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var del = require('del');
var rename = require("gulp-rename");
var watch = require("gulp-watch");
var gulpcopy = require("gulp-copy");

gulp.task('get_site_less', function() {
    gulp.src(['../fri3d2018-announce/less/*.less'])
        .pipe(gulp.dest('less/from_mainsite'))
});

gulp.task('cssmin', function() {
    gulp.src(['less/*.less'])
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(gulp.dest('css'))
});

gulp.task('cssdev', function() {
    gulp.src(['less/*.less'])
        .pipe(less())
        .pipe(gulp.dest('css'))
});

gulp.task('dev', ['get_site_less','cssdev']);

gulp.task('default', ['get_site_less','cssmin']);

gulp.task('stream', function () {
    // Endless stream mode
    gulp.watch(['less/*.less','less/includes/*.less'], ['get_site_less','cssdev']);
});
