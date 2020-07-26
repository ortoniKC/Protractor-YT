require("babel-register")({
    presets: ["es2015"]
});
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    framework: 'jasmine',
    directConnect: true,
    specs: ['inputs.spec.js'],
    SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
        "browserName": "chrome",
    },
    onPrepare: function () {
        jasmine.getEnv().addReporter(
            new SpecReporter({
                suite: {
                    displayNumber: true // display each suite number (hierarchical)
                },
                spec: {
                    displayPending: false, // display each pending spec
                    displayDuration: true // display each spec duration
                },
                summary: {
                    displaySuccesses: true, // display summary of all successes after execution
                    displayFailed: true, // display summary of all failures after execution
                    displayPending: true // display summary of all pending specs after execution
                }
            })
        );
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter());
        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
        jasmine.getEnv().beforeEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });

    }
}