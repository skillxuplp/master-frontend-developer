const gulp = require("gulp");
const less = require("gulp-less");

const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");

// compile less to css
gulp.task('styles', function() {
    return gulp.src('src/styles/main.less')
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/styles'))
});

// watch for changes
gulp.task('watch', function() {
    gulp.watch('src/styles//*.less', gulp.series('styles'));
});

// default taks
gulp.task('default', gulp.series('styles', 'watch'));