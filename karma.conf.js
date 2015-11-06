module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    reporters: ['spec'],
    browsers: ['PhantomJS'],
    files: [
      'libs/jquery.min.js',
      'libs/jasmine-jquery.js',
      'src/jquery.menu-anchor.js',
      'test/**/*.spec.js'
    ]
  });
};