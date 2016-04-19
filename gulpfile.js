/**
 * Created by olivier on 2016-04-18.
 */

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var concat = require("gulp-concat");
var babel = require('gulp-babel');

gulp.task('default', function() {
    return gulp.src("src/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(babel({presets: ['es2015']}))
        .pipe(concat('server.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'))
});

