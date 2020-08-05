
const { browser, $ } = require("protractor");

describe("Actions", () => {

    beforeAll(async () => {
        await browser.waitForAngularEnabled(false)
        await browser.get("http://jsfiddle.net/LysCF/13/");
    })

    it("Click & Hold", async () => {
        await browser.switchTo().frame("result");
        let ele = $(".hold_trigger");
        await browser.actions()
            .mouseDown(await ele.getWebElement())
            .perform();
        await browser.sleep(5000);
        await browser.actions()
            .mouseUp(await ele.getWebElement())
            .perform();
    })

    afterAll(async () => {
        await browser.sleep(5000);
    })
})