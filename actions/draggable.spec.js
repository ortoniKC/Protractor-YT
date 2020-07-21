const { browser, element, by, $ } = require("protractor")

describe("Actions", () => {

    beforeAll(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get("https://jqueryui.com/draggable/")
    })

    it("Drag me around", async () => {
        await browser.switchTo().frame(0);
        let src = $("#draggable");
        let locationX = (await src.getLocation()).x;
        let locationY = (await src.getLocation()).y;
        await browser.actions().dragAndDrop(
            await src.getWebElement(),
            {
                x: locationX + 30,
                y: locationY + 50
            }
        ).perform()
    })

    afterAll(async () => {
        await browser.sleep(5000);
    })
})