const gulp = require("gulp");
const htmlMin = require("gulp-html-minifier2");
const uglify = require("gulp-uglify");
const merge = require("merge-stream");

gulp.task("moveHtml", () => {
  let firstPath = gulp
    .src("./client/index.html")
    .pipe(htmlMin({ collapseWhitespace: true }))
    .pipe(gulp.dest("./dist/client/"));
  let secondPath = gulp
    .src("./client/templates/*.html")
    .pipe(htmlMin({ collapseWhitespace: true }))
    .pipe(gulp.dest("./dist/client/templates/"));
  return merge(firstPath, secondPath);
});

gulp.task("moveAssets", () => {
  gulp
    .src("./client/assets/mock.data.json")
    .pipe(gulp.dest("./dist/client/assets"));
});

gulp.task("uglify", () => {
  let firstPath = gulp
    .src("./client/app.js")
    .pipe(uglify())
    .pipe(gulp.dest("./dist/client/"));
  let secondPath = gulp
    .src("./server.js")
    .pipe(uglify())
    .pipe(gulp.dest("./dist/"));
  let thirdPath = gulp
    .src("./client/controller/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./dist/client/controller/"));
  let fourthPath = gulp
    .src("./client/service/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./dist/client/service/"));
  return merge(firstPath, secondPath, thirdPath, fourthPath);
});

gulp.task("default", ["moveHtml", "moveAssets", "uglify"]);
