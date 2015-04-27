'use strict';

var gulp  = require('gulp');
var babel = require('gulp-babel');
var react = require('gulp-react');

var SRC  = './src/script/**/*.js';
var DEST = './dest/script'

gulp.task('compile_js', function () {
    return gulp
        .src(SRC)
        .pipe(babel())
        .pipe(react())
        .pipe(gulp.dest(DEST));
});

gulp.task('watch', function(){
    gulp.watch(SRC, ['compile_js']);
});
