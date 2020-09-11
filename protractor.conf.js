require("babel-register")({
    presets: ["es2015"]
});
exports.config = {
    framework: 'jasmine',
    directConnect: true,
    // seleniumAddress: "http://localhost:4444/wd/hub",
    specs: [''],
    SELENIUM_PROMISE_MANAGER: false,
    // allScriptsTimeout: 120000,
    jasmineNodeOpts: {
        defaultTimeoutInterval: 60000
    },
    capabilities: {
        "browserName": "chrome",
        'chromeOptions': {
        }
    }
}