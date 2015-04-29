'use strict';

var gulp    = require('gulp');
var babel   = require('gulp-babel');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var notify  = require('gulp-notify');

var PATH = {
    SCRIPT: {
        SRC:  ['./src/script/**/*.js', './src/script/**/*.jsx'],
        DEST: './dest/script'
    },
    STYLE: {}
};

gulp.task('compileScript', function () {
    return gulp
        .src(PATH.SCRIPT.SRC)
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(changed(PATH.SCRIPT.DEST))
        .pipe(babel())
        .pipe(gulp.dest(PATH.SCRIPT.DEST));
});

gulp.task('watch', ['compileScript'], function(){
    gulp.watch(PATH.SCRIPT.SRC, ['compileScript']);
});
