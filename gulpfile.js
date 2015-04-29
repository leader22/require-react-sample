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
var amdOptimize = require('amd-optimize');
var concat  = require('gulp-concat');
var uglify  = require('gulp-uglify');
var rename  = require('gulp-rename');


/**
 *
 * Constants
 *
 */
var PATH = {
    SCRIPT: {
        SRC:  ['./src/script/**/*.js', './src/script/**/*.jsx'],
        DIST: './dist/script'
    },
    STYLE: {}
};


/**
 *
 * Tasks
 *
 */
gulp.task('clean:script', function() {
    return del([PATH.SCRIPT.DIST]);
});

gulp.task('init', ['clean:script', 'compile:script'], function() {
    return bower();
});

gulp.task('compile:script', function () {
    return gulp
        .src(PATH.SCRIPT.SRC)
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(changed(PATH.SCRIPT.DIST))
        .pipe(babel())
        .pipe(gulp.dest(PATH.SCRIPT.DIST));
});

gulp.task('watch:script', ['compile:script'], function(){
    return gulp
        .watch(PATH.SCRIPT.SRC, ['compile:script']);
});

gulp.task('bundle:script', function() {
    var config = require('./dist/script/RequireConfig.js');

    return gulp.src(PATH.SCRIPT.DIST+'/**/*.js')
        .pipe(amdOptimize('app/Main', config))
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/bundle'));
});

/**
 *
 * Aliases
 *
 */
gulp.task('w', ['watch:script']);
gulp.task('default', ['init']);
