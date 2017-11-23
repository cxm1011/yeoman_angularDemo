var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../config').server;

function browserSyncInit(baseDir,browser){
  var routes = null;
  routes = {
    '/bower_components': 'bower_components',
    '/app': 'app'
  };

  var server = {
    baseDir : baseDir,
    routes: routes
  }

  browserSync.instance = browserSync.init({
    startPath: '/',
    server: server,
    open:"local",
    browser: browser,  //默认启动的浏览器，与webstorm中setting->tool->web Browser中的name一致
    ghostMode: false
  });
}
gulp.task('serve2', ['deploy'],function () {
  browserSyncInit(config.build,config.browser);
});
