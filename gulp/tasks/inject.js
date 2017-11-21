var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var wiredep = require('wiredep').stream;
var config = require('../config').inject;
var _ = require('lodash');
// Load the core build.

gulp.task('injectIndex',function () {
  return gulp.src(config.app)
    .pipe(wiredep(_.extend({},{directory:'bower_components'})))
    .pipe(gulp.dest(config.dest))
})


