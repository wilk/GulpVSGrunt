var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('build', function () {
    return gulp.src('app/**/*.js')
        .pipe(jshint())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});