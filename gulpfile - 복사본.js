var gulp = require('gulp'),
	  sass = require('gulp-sass');

var sassConfig = {
	inputDirectory: 'sample/resources/sass/**/*.scss',
	outputDirectory: 'sample/assets/css',
	options: {
		outputStyle: 'expanded'
	}
}

gulp.task('build-css', function() {
	return gulp
		.src(sassConfig.inputDirectory)
		.pipe(sass(sassConfig.options).on('error', sass.logError))
		.pipe(gulp.dest(sassConfig.outputDirectory));
});

gulp.task('watch', function() {
	gulp.watch('sample/resources/sass/**/*.scss', ['build-css']);
});

// Default Task
gulp.task('default', ['build-css']);

