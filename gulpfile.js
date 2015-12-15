var browserify = require("browserify");
var gulp = require("gulp");
var source = require("vinyl-source-stream");
var reactify = require("reactify");

gulp.task('js', function(){
	var b = browserify();
	//transform JSX a JS
	b.transform(reactify);
	b.add("./assets/js/app.js");

	return b.bundle()
		.pipe(source("bundle.js"))
		.pipe(gulp.dest("./public/js"));
})

gulp.task("watch", function(){
	gulp.watch("./assets/js/**/*.{js,jsx}", ["js"])
});