var gulp = require('gulp');

gulp.task('default',['clean'],function () {
  gulp.start('less','images2','js','watch');
});
