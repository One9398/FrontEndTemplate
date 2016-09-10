var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var less = require('gulp-less');
var path = require('path');


gulp.task('less', function () {
    return gulp.src('src/less/**/*.less')
        .pipe(less({
            paths:[path.join(__dirname, 'less', 'includes')]
        })).pipe(gulp.dest('src/css'));
});

gulp.task('serve',['less'], function () {
    browserSync({
        server: {
            baseDir: 'src'
        }
    });

    gulp.watch('src/less/**/*.less', ['less']);
    gulp.watch(['*.html', 'css/**/*.css', 'js/**/*.js'], {cwd: 'src'}, reload);
});

gulp.task('default', ['serve'], function () {
    console.log("gulp start !");
});


gulp.task('dest', function () {
   console.log("ready to distribution");
});
