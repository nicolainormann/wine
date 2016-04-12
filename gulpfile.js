var gulp = require('gulp');
var gulputil = require('gulp-util');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var ts = require('gulp-typescript');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var prompt = require('gulp-prompt');
var imagemin = require('gulp-imagemin');

var autoprefix = require('autoprefixer');
var browsersync = require('browser-sync').create();
var fs = require('fs-extra');


/* SETTINGS START - DO NOT CHANGE - IF YOU HAVE TO CHANGE THESE DO IT IN THE SETTINGS.JSON AND FTP.JSON */
var pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
var version = pkg.version;

try{
    var settings = JSON.parse(fs.readFileSync('settings.json', 'utf8'));
    
    var design = settings.design;
    var assets = design + '/' + settings.assets + '/';
    var master = design + '/' + settings.master;
}
catch(error){
    gulputil.log('settings.json is missing');   
}

/* SETTINGS END - DO NOT CHANGE - IF YOU HAVE TO CHANGE THESE DO IT IN THE SETTINGS.JSON AND FTP.JSON */

/* FILE MASKS START */
var watchSync = [
    design + '/**/*.html',
    design + '/**/*.min.css',
    design + '/**/*.min.js',
    design + '/**/*.json'
];

var watchSass = [
    design + '/**/scss/**/*.scss',
];

var watchTs = [
    design + '/**/ts/**/*.ts'
];

var library = {
	css: [
	    design + '/Content/bootstrap.css'
    ],
	js: [
        design + '/Scripts/angular.js',
        design + '/Scripts/angular-ui-router.js',
        design + '/Scripts/jquery-2.2.2.js',
        design + '/Scripts/bootstrap.js'
    ]
};

var imgTypes = [
    design + '/assets/img/*.png',
    design + '/assets/img/*.jpg',
    design + '/assets/img/*.svg',
    design + '/assets/img/*.gif'
];
/* FILE MASKS END */

gulp.task('default', ['browsersync', 'watchSync', 'watchSass', 'watchTs']);

gulp.task('library', ['libraryCss', 'libraryJs']);

gulp.task('browsersync', function(){
    browsersync.init({
        server: {
            baseDir: "D:/GIT/wine/wine"
        }
    });
});

gulp.task('watchSync', function(){
    gulp.watch(watchSync).on('change', function(file) {
        return gulp.src(file.path, {base: design + '/', buffer: false})
            .pipe(browsersync.stream())
    });
});

gulp.task('watchSass', function(){
    gulp.watch(watchSass, ['sass']);
});

gulp.task('watchTs', function(){
    gulp.watch(watchTs, ['ts']);
});

gulp.task('sass', function(){
    return gulp.src(assets + 'scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(concat('main.min.css'))
        .pipe(sass())
        .pipe(cssnano())
        .pipe(sourcemaps.write('map/'))
        .pipe(gulp.dest(assets + 'min/'))
});

gulp.task('ts', function(){
    return gulp.src(assets + 'ts/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts({sortOutput:true}))
        .pipe(concat('main.min.js'))
        .pipe(uglify({mangle: false}))
        .pipe(sourcemaps.write('map/'))
        .pipe(gulp.dest(assets + 'min/'))
});

gulp.task('libraryJs', function(){
    return gulp.src(library.js)
        .pipe(sourcemaps.init())
        .pipe(concat('library.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('map/'))
        .pipe(gulp.dest(assets + 'min/'))
});

gulp.task('libraryCss', function(){
    return gulp.src(library.css)
        .pipe(sourcemaps.init())
        .pipe(concat('library.min.css'))
        .pipe(cssnano())
        .pipe(sourcemaps.write('map/'))
        .pipe(gulp.dest(assets + 'min/'))
});

gulp.task('imagemin', function(){
    return gulp.src(imgTypes)
        .pipe(imagemin({progressive: true}))
        .pipe(gulp.dest(design + '/assets/img/'))
});