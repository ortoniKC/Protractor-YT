const { browser, element, by } = require("protractor");

describe("Expected Conditions", () => {
    beforeAll(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get("https://www.flipkart.com/");
        await browser.manage().window().maximize()
    })
    it("Wait for URL", async () => {
        await element(by.buttonText('✕')).click();
        let electronics = element(by.xpath("//span[.='Electronics']"));
        await browser.actions()
            .mouseMove(await electronics.getWebElement())
            .perform();
        let mi = element(by.linkText('Mi'));
        let ec = browser.ExpectedConditions;
        await browser.wait(ec.elementToBeClickable(mi), 5000)
        await mi.click();
        await browser.wait(ec.titleContains("Mi Mobile"), 5000)
        expect(await browser.getTitle()).toContain("Mi Mobile")
    })

})