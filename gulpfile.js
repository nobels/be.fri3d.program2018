var gulp = require('gulp');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');

gulp.task('get_site_less', function() {
    gulp.src(['../fri3d2018-announce/less/*.less'])
        .pipe(gulp.dest('_less/from_mainsite'))
});

gulp.task('cssmin', function() {
    gulp.src(['less/*.less'])
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(gulp.dest('css'))
});

gulp.task('cssdev', function() {
    gulp.src(['_less/*.less'])
        .pipe(less())
        .pipe(gulp.dest('css'));
});

gulp.task('dev', ['get_site_less','cssdev']);

gulp.task('default', ['dev','stream']);

gulp.task('stream', function () {
    // Endless stream mode
    gulp.watch(['_less/*.less','_less/includes/*.less'], ['dev']);
});
