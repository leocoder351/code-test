const gulp = require("gulp");
const babel = require("gulp-babel");
const watch = require("gulp-watch");
const rollup = require("gulp-rollup");
const replace = require('rollup-plugin-replace');
const gulpSequence = require('gulp-sequence')
gulp.task("builddev", () => {
    return watch('./src/nodeuii/**/*.js', { ignoreInitial: false }, () => {
        gulp.src('./src/nodeuii/**/*.js').pipe(babel({
            babelrc: false,
            "plugins": [
                "transform-decorators-legacy",
                "transform-es2015-modules-commonjs"
            ]
        }))
            .pipe(gulp.dest('dist'));
    })
});
gulp.task("buildprod", () => {
    gulp.src('./src/nodeuii/**/*.js').pipe(babel({
        babelrc: false,
        ignore:["./src/nodeuii/config/*.js"],
        "plugins": [
            "transform-decorators-legacy",
            "transform-es2015-modules-commonjs"
        ]
    }))
    .pipe(gulp.dest('dist'));
});
//开启清洗流
gulp.task("buildconfig",()=>{
    gulp.src('./src/nodeuii/**/*.js')
      .pipe(rollup({
        output:{
            format:"cjs",
        },
        input: "./src/nodeuii/config/index.js",
        plugins: [
            replace({
              "process.env.NODE_ENV": JSON.stringify('production')
            })
          ]
      }))
    .pipe(gulp.dest('./dist'));
});
let _task = ["builddev"];
if(process.env.NODE_ENV == "production"){
    console.log(1111);
    _task = gulpSequence(["buildprod","buildconfig"])
}
gulp.task("default", _task);

