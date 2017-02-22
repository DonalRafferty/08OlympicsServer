var gulp = require('gulp');
var mocha = require('gulp-mocha');
var nodemon = require('gulp-nodemon');

gulp.task('test', function() {
    gulp.src('./app/tests/*.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}))
        .once('error', function(){
            process.exit(1);
        })
        .once('end', function() {
            process.exit();
        })
});

gulp.task('run', function(){
    nodemon({ script: 'server.js'
        , ext: 'html js'
        , ignore: ['ignored.js']
        , tasks: ['lint'] })
        .on('restart', function () {
            console.log('restarted!')
        })
});

gulp.task('default', [ 'test', 'run' ]);