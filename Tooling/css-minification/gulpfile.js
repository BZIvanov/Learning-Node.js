const gulp = require("gulp");
const minifyCss = require("gulp-clean-css");
const rename = require("gulp-rename");

gulp.task("minify-css", () => {
  return gulp
    .src("styles/*.css")
    .pipe(minifyCss())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("dist/styles"));
});
