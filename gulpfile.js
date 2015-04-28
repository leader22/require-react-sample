'use strict';

var gulp    = require('gulp');
var babel   = require('gulp-babel');
var plumber = require('gulp-plumber');
var notify  = require('gulp-notify');

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
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(babel())
        .pipe(gulp.dest(PATH.SCRIPT.DEST));
});

gulp.task('watch', function(){
    gulp.watch(PATH.SCRIPT.SRC, ['compileScript']);
});
