/*
 * Development tasks.
 * ============================================================================
 */

'use strict';


module.exports = function (gulp, $, config) {

  var browserSync    = require('browser-sync').create();
  var autoprefixer   = require('autoprefixer-core');
  var handleErrors   = require('../lib/handleErrors');
  var mainBowerFiles = require('main-bower-files');

  var dirs  = config.dirs;
  var globs = config.globs;

  // Forget any cached data
  // Reference: https://github.com/gulpjs/gulp/blob/master/docs/recipes/incremental-builds-with-concatenate.md
  function forget (cacheName) {
    return function (e) {
      if (e.type === 'deleted') {
        $.remember.forget(cacheName, e.path);
        delete $.cached.caches[cacheName][e.path];
      }
    };
  }

  // Compile template views into HTML files.
  gulp.task('dev:build:views', function () {
    var viewsGlobs = globs.views;

    return gulp.src(viewsGlobs.templates)
      .pipe($.hb({
        data: viewsGlobs.data,
        partials: viewsGlobs.partials
      }))
      .pipe($.rename({ extname: '.html' }))
      .pipe(gulp.dest(dirs.build))
      .pipe(browserSync.stream());
  });

  // Compile style sheet templates, prefix proposed and non-standard rules.
  gulp.task('dev:build:styles', function () {
    return gulp.src(globs.styles)
      .pipe($.sourcemaps.init())
      .pipe($.less())
      .on('error', handleErrors)
      .pipe($.postcss([
        autoprefixer()
      ]))
      .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest(dirs.build))
      .pipe(browserSync.stream({ match: '**/*.css' }));
  });

  // Compile script files as AMD, bundle them as a single file.
  gulp.task('dev:build:scripts', [ 'dev:lint' ], function () {
    return gulp.src(globs.scripts)
      .pipe($.cached('scripts'))
      .pipe($.sourcemaps.init())
      .pipe($.babel())
      .on('error', handleErrors)
      .pipe($.remember('scripts'))
      .pipe($.concat('game.js'))
      .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest(dirs.build))
      .pipe(browserSync.stream());
  });

  // Concatenates Bower script libraries in a single file.
  gulp.task('dev:build:bundle', function () {
    var libs = [ 'node_modules/babel-core/browser-polyfill.js' ]
      .concat(mainBowerFiles());

    return gulp.src(libs)
      .pipe($.filter('**/*.js'))
      .pipe($.sourcemaps.init({ loadMaps: true }))
      .pipe($.concat('bundle.js'))
      .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest(dirs.build))
      .pipe(browserSync.stream());
  });

  // Instantiate a live web development server for cross-browser, cross-device
  // testing.
  gulp.task('dev:server', [ 'dev:build' ], function () {
    browserSync.init({
      server: {
        baseDir: [
          dirs.static,
          dirs.build
        ]
      },
      ghostMode: false,
      notify: false
    });
  });

  // Monitors files for changes, trigger rebuilds as needed.
  gulp.task('dev:watch', function () {
    gulp.watch(globs.scripts, [ 'dev:build:scripts' ])
      .on('change', forget('scripts'));

    gulp.watch(globs.styles, [ 'dev:build:styles' ]);
    gulp.watch(globs.views.templates, [  'dev:build:views' ]);
    gulp.watch('bower.json', [ 'dev:build:bundle' ]);
  });

  // Pass through modified script files and issue warnings about
  // non-conformances.
  gulp.task('dev:lint', function () {
    return gulp.src([ globs.scripts ])
      .pipe($.cached('dev:lint'))
      .pipe($.eslint())
      .pipe($.eslint.format('stylish', process.stderr));
  });

  // The overall build task.
  gulp.task('dev:build', [
    'dev:build:views',
    'dev:build:bundle',
    'dev:build:styles',
    'dev:build:scripts'
  ]);

  // The main development task.
  gulp.task('dev', [
    'dev:server',
    'dev:watch'
  ]);

  // Aliasing `dev` as default task.
  gulp.task('default', [ 'dev' ]);

};
