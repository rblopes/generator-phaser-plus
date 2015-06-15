'use strict';


module.exports = function (gulp, defineTestTask, task) {

  describe('object generator', function () {
    before(function () {
      process.chdir(__dirname);
    });

    afterEach(function () {
      gulp.reset();
    });

    it('creates a object file', function (done) {
      var mockDest = defineTestTask(task, {
        name: 'TestObject',
        description: 'A Test Object',
        baseClass: 'Sprite',
        destDir: '.'
      });

      gulp
        .start('test')
        .once('stop', function () {
          mockDest.assertDestContains('TestObject.js');
          done();
        });
    });

    it('creates another object file', function (done) {
      var mockDest = defineTestTask(task, {
        name: 'AnotherTestObject',
        description: 'A Test Object',
        baseClass: 'Image',
        destDir: '.'
      });

      gulp
        .start('test')
        .once('stop', function () {
          mockDest.assertDestContains('AnotherTestObject.js');
          done();
        });
    });
  });

};
