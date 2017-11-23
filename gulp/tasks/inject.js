var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var wiredep = require('wiredep').stream;
var config = require('../config').inject;
var _ = require('lodash');
// Load the core build.

gulp.task('injectIndex',function () {
  var injectScript = gulp.src(
    'app/scripts/**/*.js',
    {read:false}
  )

  return gulp.src(config.app)
    .pipe($.inject(injectScript))
    .pipe(wiredep(_.extend({},{directory:'bower_components'})))
    .pipe(gulp.dest(config.dest))
})


