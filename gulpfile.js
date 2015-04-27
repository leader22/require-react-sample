'use strict';

var gulp  = require('gulp');
var babel = require('gulp-babel');
var react = require('gulp-react');

var PATH = {
    SCRIPT: {
        SRC:  './src/script/**/*.js',
        DEST: './dest/script'
    },
    STYLE: {}
};

gulp.task('compileScript', function () {
    return gulp
        .src(PATH.SCRIPT.SRC)
        .pipe(babel())
        .pipe(react())
        .pipe(gulp.dest(PATH.SCRIPT.DEST));
});

gulp.task('watch', function(){
    gulp.watch(PATH.SCRIPT.SRC, ['compileScript']);
});
