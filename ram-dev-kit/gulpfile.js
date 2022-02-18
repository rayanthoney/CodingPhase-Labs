const gulp = require("gulp");

const sass = require("gulp-sass")(require("sass"));

const autoprefixer = require("gulp-autoprefixer");

const browserSync = require("browser-sync").create();

const reload = browserSync.reload;

const cleanCSS = require("gulp-clean-css");

const sourcemaps = require('gulp-sourcemaps');

const webpack = require('webpack')

const path = require('path')

gulp.task("sass", function () {
  return gulp
    .src("./src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(gulp.dest("./public/css"))
    .pipe(browserSync.stream());
});

// Opens New Browser in Default
gulp.task("browser-sync", function () {
  browserSync.init({
    server: "./public",
    notify: false,
    open: false,
  });
});

gulp.task("sass:minify", function () {
  return gulp
    .src("./public/css/*.css")
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./public/css"));
});

gulp.task("default", ["sass", "browser-sync"], function () {
  gulp.watch("./src/scss/**/*", ["sass"]);
});

gulp.task("production", ["sass:minify"])
