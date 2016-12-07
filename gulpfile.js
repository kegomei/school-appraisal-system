const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload

gulp.task('server', () => {
  return browserSync.init({
    proxy: 'localhost:4000'
  })
})

gulp.task('watch', () => {
  gulp.watch(['Template/**/*.html', 'Static/**/*.*', 'Route/**/*.js'], reload)
})

gulp.task('default', ['server', 'watch'])
