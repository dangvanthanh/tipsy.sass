var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch');

var paths = {
  sass: './assets/scss/stylesheet.scss'
};


/* Styles */
gulp.task('styles', function() {
  gulp.src(paths.sass)
      .pipe(sass({errLogToConsole: true}))
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
      .pipe(gulp.dest('./assets/css/'))
      .pipe(rename({suffix: '.min'}))
      .pipe(minifycss())
      .pipe(gulp.dest('./assets/css/'));
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['styles']);
});

gulp.task('default', ['watch']);