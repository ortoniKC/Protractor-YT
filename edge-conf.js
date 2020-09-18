require("babel-register")({
    presets: ["es2015"]
});
exports.config = {
    framework: 'jasmine',
    // directConnect: true,
    seleniumAddress: "http://localhost:4444/wd/hub",
    specs: ['interactWithAlerts/alerts.spec.js'],
    SELENIUM_PROMISE_MANAGER: false,
    jasmineNodeOpts: {
        defaultTimeoutInterval: 60000
    },
    capabilities: {
        "browserName": "MicrosoftEdge",
    }
}

// -Dwebdriver.edge.driver=msedgedriver.exe