// 引入 gulp
var gulp = require('gulp');
 
// 引入组件
var  
    minifycss = require('gulp-minify-css'),//css压缩
     
    uglify = require('gulp-uglify'),//js压缩
    concat = require('gulp-concat'),//文件合并
    rename = require('gulp-rename'),//文件更名
    notify = require('gulp-notify');//提示信息
 
 
 
 
// 合并、压缩、重命名css
gulp.task('css', function() {
  return gulp.src('public/devmag.css')
    
    .pipe(gulp.dest('dest/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('dest/css'))
    .pipe(notify({ message: 'css task ok' }));
});
 
 
// 合并、压缩js文件
gulp.task('js', function() {
  return gulp.src('public/devmag.js')
     
    .pipe(gulp.dest('dest/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dest/js'))
    .pipe(notify({ message: 'js task ok' }));
});
 