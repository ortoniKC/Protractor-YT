const driver = require("protractor")

describe('Protractor Demo App', function () {
    it('should have a title', function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
        driver.browser.sleep(5000)
        // browser.sleep()
        // expect(browser.getTitle()).toEqual('Super Calculator');
    });
    // it('should have a title', function () {
    //     browser.get('http://juliemr.github.io/protractor-demo/');
    //     browser.sleep(5000)
    //     // expect(browser.getTitle()).toEqual('Super Calculator');
    // });
});