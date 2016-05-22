var gulp = require("gulp");
var gutil = require("gulp-util");
var connect = require('gulp-connect');

// CONCAT
var browserify = require('gulp-browserify');
var concat = require("gulp-concat");

// SASS
var compass = require('gulp-compass');
var sassSources = ['components/sass/style.scss'];


var jsSources = ["components/scripts/nav.js"];
var htmlSources = ['builds/development/*.html'];
 
gulp.task("js", function(){ 

	gulp.src(jsSources)
	.pipe(concat('app.js'))
	.pipe(browserify())
	.pipe(gulp.dest("builds/development/js"))
  .pipe(connect.reload());

});



gulp.task('compass', function() {
  gulp.src(sassSources)
    .pipe(compass({
      sass: 'components/sass',
      image: 'builds/development/img',
     require:['susy', 'breakpoint']
    })
    .on('error', gutil.log))
    .pipe(gulp.dest('builds/development/css'))
    .pipe(connect.reload())
});



gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch('components/sass/*.scss', ['compass']);
  gulp.watch(htmlSources, ['html']);
});

gulp.task('html', function() {
  gulp.src(htmlSources)
    .pipe(connect.reload())
});

gulp.task('connect', function() {
  connect.server({
    root: 'builds/development/',
    livereload: true
  });
});

gulp.task('default', ['html', 'js', 'compass', 'connect', 'watch']);

