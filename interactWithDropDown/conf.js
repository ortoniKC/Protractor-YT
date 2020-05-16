require("babel-register")({
    presets: ["es2015"]
});

exports.config = {
    framework: 'jasmine',
    directConnect: true,
    specs: ['*.spec.js'],
    SELENIUM_PROMISE_MANAGER: false,
}