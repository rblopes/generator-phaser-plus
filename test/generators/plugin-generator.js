'use strict';


module.exports = function (gulp, defineTestTask, task) {

  describe('plugin generator', function () {
    before(function () {
      process.chdir(__dirname);
    });

    afterEach(function () {
      gulp.reset();
    });

    it('creates a test plugin', function (done) {
      var mockDest = defineTestTask(task, {
        name: 'TestPlugin',
        description: 'A Test Plugin',
        destDir: '.'
      });

      gulp.start('test').once('stop', function () {
        mockDest.assertDestContains('TestPlugin.js');
        done();
      });
    });

    it('creates another test plugin', function (done) {
      var mockDest = defineTestTask(task, {
        name: 'AnotherTestPlugin',
        description: 'Another Test Plugin',
        destDir: '.'
      });

      gulp.start('test').once('stop', function () {
        mockDest.assertDestContains('AnotherTestPlugin.js');
        done();
      });
    });
  });

};
