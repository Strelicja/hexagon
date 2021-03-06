var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
  return gulp.src('main.scss')
  .pipe(sass())
  .pipe(gulp.dest('css'))
  .pipe(sourcemaps.write())
});


gulp.task('watch', function(){
  gulp.watch('*.scss', ['sass']);
});

gulp.task("default",["sass","watch"]);
