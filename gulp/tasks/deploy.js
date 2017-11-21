var gulp = require('gulp');

gulp.task('deploy', ['clean'],function () {
  gulp.start('less','images2','js');
});
