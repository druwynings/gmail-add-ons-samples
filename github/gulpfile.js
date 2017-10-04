const gulp = require('gulp');
const concat = require('gulp-concat');

const third_party_source = [
	'third_party/moment.gs',
	'third_party/lodash.gs'
];

gulp.task('concat-third-party', function() {
	return gulp.src(third_party_source)
	    .pipe(concat('3p-bundle.gs'))
	    .pipe(gulp.dest('./dist/'));
});

gulp.task('push', function() {
	exec('gasp push');
});

gulp.task('default', ['concat-third-party']);