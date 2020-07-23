const { browser, $, element, by } = require("protractor");
const { protractor } = require("protractor/built/ptor");

describe("Actions", () => {

    beforeAll(async () => {
        await browser.get("https://play.letcode.in/aui");
    })

    it("Select using Chord - Keys", async () => {
        let sachin = element(by.xpath("//li[text()='Sachin']"))
        let ganguly = element(by.xpath("//li[text()='Ganguly']"))
        let zaheer = element(by.xpath("//li[text()='Zaheer']"))

        await browser.actions()
            .sendKeys(protractor.Key.CONTROL)
            .click(await sachin.getWebElement())
            .click(await ganguly.getWebElement())
            .click(await zaheer.getWebElement())
            .perform()

    })
})