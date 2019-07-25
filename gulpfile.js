var gulp = require('gulp');
// 引入gulp-uglify 混淆代码模块
var uglify = require('gulp-uglify');

// 建立混淆代码任务
gulp.task('hxjs', function () {
    // src方法，指定要处理的文件的路径。
    return gulp.src('./src/Game.js')
    .pipe(uglify())
    .pipe(gulp.dest('./bin'));
});
