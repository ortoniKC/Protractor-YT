const { browser, by, element } = require("protractor");

describe("Actions", () => {

    beforeAll(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get("https://www.flipkart.com/");
    })

    it("Mouse Hover", async () => {
        await element(by.buttonText('✕')).click();
        let electronics = element(by.xpath("//span[.='Electronics']"));
        await browser.actions()
            .mouseMove(await electronics.getWebElement())
            .perform();
        await browser.sleep(3000);
        await element(by.linkText('Sony PS4 Pro & Slim')).click();
        await browser.sleep(5000);
    })
})