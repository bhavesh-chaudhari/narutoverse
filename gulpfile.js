import pkg from "gulp"
import gulpSass from "gulp-sass"
import dartSass from "sass"

const {src, dest, watch, series} = pkg
const sass = gulpSass(dartSass)

const buildStyles = ()=>{
    return src("scss/**/*.scss")
    .pipe(sass())
    .pipe(dest("css"))
}

const watcher = ()=>{
    watch(["scss/**/*.scss"], buildStyles)
}

export default series(buildStyles, watcher)