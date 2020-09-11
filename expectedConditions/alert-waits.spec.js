const { browser, $ } = require("protractor")

describe("Expected Conditions", () => {

    it("wait for an alert & accept", async () => {
        await browser.get("http://localhost:4200/waits")
        await $("#accept").click();

        let ec = browser.ExpectedConditions;

        await browser.wait(ec.alertIsPresent(), 5000, 'Waiting for an alert');

        (await browser.switchTo().alert()).accept()

    })

})