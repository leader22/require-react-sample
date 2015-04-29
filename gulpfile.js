'use strict';

/**
 *
 * Deps
 *
 */
var gulp    = require('gulp');
var babel   = require('gulp-babel');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var notify  = require('gulp-notify');
var bower   = require('gulp-bower');
var del     = require('del');


/**
 *
 * Constants
 *
 */
var PATH = {
    SCRIPT: {
        SRC:  ['./src/script/**/*.js', './src/script/**/*.jsx'],
        DEST: './dest/script'
    },
    STYLE: {}
};


/**
 *
 * Tasks
 *
 */
gulp.task('clean:script', function() {
    return del([PATH.SCRIPT.DEST]);
});

gulp.task('init', ['clean:script', 'compile:script'], function() {
    return bower();
});

gulp.task('compile:script', function () {
    return gulp
        .src(PATH.SCRIPT.SRC)
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(changed(PATH.SCRIPT.DEST))
        .pipe(babel())
        .pipe(gulp.dest(PATH.SCRIPT.DEST));
});

gulp.task('watch:script', ['compile:script'], function(){
    return gulp
        .watch(PATH.SCRIPT.SRC, ['compile:script']);
});


/**
 *
 * Aliases
 *
 */
gulp.task('w', ['watch:script']);
gulp.task('default', ['init']);
