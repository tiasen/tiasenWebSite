var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('sass',function(){
	return gulp.src('./app/sass/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./app/css/'));
});

gulp.task('watch',['sass'],function(){
	gulp.watch('./app/sass/*.scss',['sass']);
});

gulp.task('default',['watch'],function(){
	console.log('默认任务执行完毕。。。。');
});
