const gulp = require('gulp');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('compile', () => {
  const tsResult = tsProject
    .src()
    .pipe(sourcemaps.init())
    .pipe(tsProject());
  return tsResult.js
    .pipe(sourcemaps.write('.', {sourceRoot: '/src'}))
    .pipe(gulp.dest('www'));
});

gulp.task('watch', ['compile'], () => {
  gulp.watch('src/**/*.ts', ['compile']);
});

gulp.task('default', ['watch']);