const gulp = require('gulp')

const sass = require('gulp-sass')

gulp.task('sass', function(){

  return gulp
    .src('sccss/**/*.scss')

    .pipe(sass())

    .pipe(gulp.dest('css'))

})
