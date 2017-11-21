var app = './app';
var dest = './build';

module.exports = {
  less:{
    all:app + "/less/**/*.less", //所有less
    app:app + "/less/*.less",    //所有编译的less
    dest:dest + "/css",         //输出目录
    setting:{                   //编译less过程中需要的配置，可以为空

    }
  },
  images: {
    app: app + "/images/**/*",
    dest: dest+"/images"
  },
  js:{
    app: app+"/js/**/*",
    dest: dest+"/js"
  },
  clean:{
    app:dest
  },
  rev:{
    revJson:dest+"/rev/**/*.json",
    app:"*.html",
    dest:""
  },
  inject:{
    app:"./app/index.html",
    dest:"testInject"
  }

}
