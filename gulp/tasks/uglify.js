var uglify = require('gulp-uglify');
var gulp = require('gulp');
var config = require('../config').js;

gulp.task('uglify', function(){
  return gulp.src(config.app)
    .pipe(uglify())
    .pipe(gulp.dest(config.dest));
});
