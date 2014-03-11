var gulp = require('gulp'),
    compass = require('gulp-compass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch');


/* Styles */
gulp.task('styles', function() {
  gulp.src('./assets/scss/stylesheet.scss')
      .pipe(compass({
        css: './assets/css/',
        sass: './assets/scss/',
        comments: false
      }))
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
      .pipe(gulp.dest('./assets/css/'))
      .pipe(rename({suffix: '.min'}))
      .pipe(minifycss())
      .pipe(gulp.dest('./assets/css/'));
});

gulp.task('watch', function() {
  gulp.watch('./assets/scss/stylesheet.scss', function() {
    gulp.run('styles');
  });
});

gulp.task('default', ['watch']);