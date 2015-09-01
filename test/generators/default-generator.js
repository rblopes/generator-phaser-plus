'use strict';


var assert = require('assert');


module.exports = function (gulp, defineTestTask, task) {

  describe('default generator', function () {
    this.timeout(4000);

    var mockDest;

    before(function () {
      process.chdir(__dirname);
    });

    beforeEach(function () {
      mockDest = defineTestTask(task, {
        title: 'A game title',
        description: 'A game description',
        customBuild: 'arcade-physics',
        packageName: 'a-test-game'
      });
    });

    afterEach(function () {
      gulp.reset();
    });

    it('should copy all project files to the current working directory', function (done) {
      gulp
        .start('test')
        .once('stop', function () {
          assert.strictEqual(mockDest.cwd(), __dirname);
          assert.strictEqual(mockDest.basePath(), __dirname);
          done();
        });
    });

    it('should add configuration files in the project root', function (done) {
      gulp
        .start('test')
        .once('stop', function () {
          mockDest.assertDestContains([
            '.babelrc',
            '.editorconfig',
            '.gitattributes',
            '.gitignore',
            '.eslintrc'
          ]);

          done();
        });
    });

    it('should copy bower.json and package.json to the project root', function (done) {
      gulp
        .start('test')
        .once('stop', function () {
          mockDest.assertDestContains([ 'package.json' ]);
          done();
        });
    });

    it('should copy the gulpfile.js modules to the project root', function (done) {
      gulp
        .start('test')
        .once('stop', function () {
          mockDest.assertDestContains([
            'gulpfile.js',
            'gulpfile.js/config/bundle.js',
            'gulpfile.js/config/dirs.js',
            'gulpfile.js/config/globs.js',
            'gulpfile.js/config/index.js',
            'gulpfile.js/config/phaser.js',
            'gulpfile.js/config/pluginOptions.js',
            'gulpfile.js/index.js',
            'gulpfile.js/tasks/dev.js',
            'gulpfile.js/tasks/dist.js',
            'gulpfile.js/tasks/helpers/bundler.js'
          ]);

          done();
        });
    });

    it('should contain a README file and initial project contents', function (done) {
      gulp
        .start('test')
        .once('stop', function () {
          mockDest.assertDestContains([
            'README.md',
            'src/scripts/app.js',
            'src/scripts/app/data/assets.js',
            'src/scripts/app/objects/SplashScreen.js',
            'src/scripts/app/states.js',
            'src/scripts/app/states/Boot.js',
            'src/scripts/app/states/Game.js',
            'src/scripts/app/states/Preload.js',
            'src/styles/styles.less',
            'src/views/data/meta.json',
            'src/views/partials/icons.hbs',
            'src/views/templates/index.hbs'
          ]);

          done();
        });
    });

    it('should contain initial game assets', function (done) {
      gulp
        .start('test')
        .once('stop', function () {
          mockDest.assertDestContains([
            'static/browserconfig.xml',
            'static/favicon.ico',
            'static/manifest.json',
            'static/assets/phaser.png',
            'static/assets/progress-bar.png',
            'static/assets/splash-screen.png',
            'static/icons/android-chrome-192x192.png',
            'static/icons/android-chrome-36x36.png',
            'static/icons/android-chrome-48x48.png',
            'static/icons/android-chrome-72x72.png',
            'static/icons/android-chrome-96x96.png',
            'static/icons/apple-touch-icon-114x114.png',
            'static/icons/apple-touch-icon-120x120.png',
            'static/icons/apple-touch-icon-144x144.png',
            'static/icons/apple-touch-icon-152x152.png',
            'static/icons/apple-touch-icon-180x180.png',
            'static/icons/apple-touch-icon-57x57.png',
            'static/icons/apple-touch-icon-60x60.png',
            'static/icons/apple-touch-icon-72x72.png',
            'static/icons/apple-touch-icon-76x76.png',
            'static/icons/apple-touch-icon.png',
            'static/icons/apple-touch-icon-precomposed.png',
            'static/icons/favicon-160x160.png',
            'static/icons/favicon-16x16.png',
            'static/icons/favicon-196x196.png',
            'static/icons/favicon-32x32.png',
            'static/icons/favicon-96x96.png',
            'static/icons/mstile-144x144.png',
            'static/icons/mstile-150x150.png',
            'static/icons/mstile-310x150.png',
            'static/icons/mstile-310x310.png',
            'static/icons/mstile-70x70.png'
          ]);

          done();
        });
    });
  });

};
