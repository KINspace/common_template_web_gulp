var gulp = require('gulp'),
	//connect sass
	sass = require('gulp-sass');

//to perform task in console type : gulp taskname
gulp.task('sass', function() {
	return gulp.src('app/sass/main.sass')
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
});

// //Common
// gulp.task('mytask', function() {
// 	// console.log('World of Tasks!');
// 	return gulp.src('source-files') // take a file
// 	.pipe(plugin()) // perform action on file
// 	.pipe(gulp.dest('folder')) // extract result
// });





