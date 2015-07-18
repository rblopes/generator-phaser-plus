'use strict';


module.exports = function (gulp, defineTestTask, task) {

  describe('state generator', function () {
    before(function () {
      process.chdir(__dirname);
    });

    afterEach(function () {
      gulp.reset();
    });

    it('creates a state file', function (done) {
      var mockDest = defineTestTask(task, {
        name: 'TestState',
        description: 'A Test State',
        destDir: '.'
      });

      gulp
        .start('test')
        .once('stop', function () {
          mockDest.assertDestContains('TestState.js');
          done();
        });
    });

    it('creates another state file', function (done) {
      var mockDest = defineTestTask(task, {
        name: 'AnotherTestState',
        description: 'A Test State',
        destDir: '.'
      });

      gulp
        .start('test')
        .once('stop', function () {
          mockDest.assertDestContains('AnotherTestState.js');
          done();
        });
    });
  });

};
