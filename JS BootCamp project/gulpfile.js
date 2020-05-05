var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "public/"
        }
    });
});


//html
gulp.task('html', function () {
    gulp.src('src/*.html')
        .pipe(gulp.dest('public/'))
        .pipe(browserSync.stream());
});


//css
gulp.task('css', function () {
   gulp.src('src/sass/**/*.*')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 10 version', 'ie 11'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.stream());
});


//img
gulp.task('img', function () {
    gulp.src('src/img/**/*.*')
        .pipe(gulp.dest('public/img'))
        .pipe(browserSync.stream());
});


//js
gulp.task('js', function () {
    gulp.src('src/js/**/*.*')
        .pipe(gulp.dest('public/js'))
        .pipe(browserSync.stream());
});


//fonts
gulp.task('fonts', function () {
    gulp.src('src/fonts/*.*')
        .pipe(gulp.dest('public/fonts'))
        .pipe(browserSync.stream());
});



// watch
gulp.task('watch', function () {
    gulp.watch('src/*.html', ['html']);
    gulp.watch('src/sass/**/*.scss', ['css']);
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch('src/img/**', ['img']);
    gulp.watch('src/fonts/**', ['fonts']);
});

//default
gulp.task('default', [ 'browser-sync', 'html', 'css', 'img', 'js', 'fonts', 'watch']);