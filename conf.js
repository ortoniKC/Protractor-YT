// To run test in sequence & parallel

exports.config = {
    framework: 'jasmine',
    directConnect: true,
    specs: ['actions/contextMenu.spec.js', 'actions/dragdrop.spec.js'],
    SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
        "browserName": "chrome",
        shardTestFiles: true,
        maxInstances: 2
    }
}