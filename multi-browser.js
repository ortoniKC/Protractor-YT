require("babel-register")({
    presets: ["es2015"]
});

// To run in  different browser parallel
exports.config = {
    framework: 'jasmine',
    directConnect: true,
    specs: ['findMultipleElement/crickets.spec.js'],
    SELENIUM_PROMISE_MANAGER: false,
    multiCapabilities: [
        {
            "browserName": "chrome"
        }
        ,
        {
            "browserName": "firefox"
        }
    ]
}