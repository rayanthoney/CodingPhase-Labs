var gulp = require('gulp');

gulp.task('printName', function(){
    console.log('My name is RayAnthoney')
})

gulp.task('printAge', function(){
    console.log('My age is infinite')
})

gulp.task('default', ['printName', 'printAge'])