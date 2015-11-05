module.exports = function(config) {
  config.set({
    frameworks: ['jasmine-jquery', 'jasmine'],
    reporters: ['spec'],
    browsers: ['PhantomJS'],
    files: [
      'libs/jquery.min.js',
      'src/jquery.menu-anchor.js',
      'test/**/*.spec.js',
      { pattern: 'test/**/*.spec.html', served: true, included: false},
    ]
  });
};