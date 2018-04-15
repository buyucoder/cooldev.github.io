var ftp = require('vinyl-ftp');
var gutil = require('gulp-util');
var minimist = require('minimist');
var args = minimist(process.argv.slice(3));
gulp.task('deploy', function() {
  var remotePath = '/htdocs/test/';
  var conn = ftp.create({
    host: args.host,
    user: args.user,
    password: args.password,
    log: gutil.log
  });
  gulp.src(['index.html', './**/*.css'])
    .pipe(conn.newer(remotePath))
    .pipe(conn.dest(remotePath));
});