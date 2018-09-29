const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');

gulp.task("buildDev", () => {
  return watch('./src/nodeuii/**/*.js', {ignoreInitial: false}, () => {
    gulp.src('./src/nodeuii/**/*.js').pipe(babel({
      babelrc: false,
      plugins: [
        'transform-es2015-modules-commonjs'
      ]
    })).pipe(gulp.dest('dist'));
  });
});

let _task = ["buildDev"];

gulp.task('default', _task);