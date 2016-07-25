// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '..',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher')
    ],
    customLaunchers: {
      // chrome setup for travis CI using chromium
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    files: [
      { pattern: 'dist/vendor/es6-shim/es6-shim.js', included: true, watched: false },
      { pattern: 'dist/vendor/zone.js/dist/zone.js', included: true, watched: false },
      { pattern: 'dist/vendor/reflect-metadata/Reflect.js', included: true, watched: false },
      { pattern: 'dist/vendor/systemjs/dist/system-polyfills.js', included: true, watched: false },
      { pattern: 'dist/vendor/systemjs/dist/system.src.js', included: true, watched: false },
      { pattern: 'dist/vendor/zone.js/dist/async-test.js', included: true, watched: false },
      { pattern: 'dist/vendor/zone.js/dist/fake-async-test.js', included: true, watched: false },
      { pattern: 'dist/bower_components/webcomponentsjs/webcomponents-lite.min.js', included: true, watched: false },
      { pattern: 'dist/elements.html', included: true, watched: false },
      /*{ pattern: 'dist/bower_components/polymer/polymer.html', included: true, watched: false },
      { pattern: 'dist/bower_components/paper-styles/color.html', included: true, watched: false },
      { pattern: 'dist/bower_components/paper-styles/typography.html', included: true, watched: false },
      { pattern: 'dist/bower_components/vaadin-combo-box/vaadin-combo-box.html', included: true, watched: false },
      { pattern: 'dist/bower_components/paper-input/paper-input.html', included: true, watched: false },
      { pattern: 'dist/bower_components/google-youtube/google-youtube.html', included: true, watched: false },*/

      { pattern: 'config/karma-test-shim.js', included: true, watched: true },

      // Distribution folder.
      { pattern: 'dist/**/*', included: false, watched: true }
    ],
    exclude: [
      // Vendor packages might include spec files. We don't want to use those.
      'dist/vendor/**/*.spec.js'
    ],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
