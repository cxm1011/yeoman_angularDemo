var gulp = require('gulp');
var config = require('../config').styles;

gulp.task('styles', function () {
  return gulp.src(config.app)
    .pipe(gulp.dest(config.dest));
})
