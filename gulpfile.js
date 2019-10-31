var gulp=require('gulp'),
minifycss=require('gulp-minify-css'),
concat = require('gulp-concat'),
uglify=require('gulp-uglify');

gulp.task("compressCSS",async()=>{
    gulp.src(['css/*.css']).pipe(concat('all.css')).pipe(minifycss()).pipe(gulp.dest('./mini/css'))
    console.log("任务一完毕")
})
gulp.task("compressJS",done=>{
    gulp.src(['js/*.js']).pipe(concat('all.js')).pipe(uglify()).pipe(gulp.dest('./min/js'))
    console.log("任务二完毕")
    done()
})
//serise是按照顺序来的，写在前面的会先执行，执行完毕执行下一个任务
gulp.task('default',gulp.series('compressJS','compressCSS',function () {
    console.log("gulp任务完毕")
}));