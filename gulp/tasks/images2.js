var gulp = require('gulp');
var config = require('../config').images;

gulp.task('images2',function () {
   return gulp.src(config.app)
     .pipe(gulp.dest(config.dest))
});
