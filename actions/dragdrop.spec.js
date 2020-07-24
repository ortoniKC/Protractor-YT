const { browser, element, by } = require("protractor")

describe("Actions", () => {

    beforeAll(async () => {
        await browser.get("https://play.letcode.in/aui");
    })

    it("Drag & Drop", async () => {
        await browser.sleep(5000)
        let source = element(by.id("draggable"));
        let target = element(by.id("droppable"));
        await browser.actions().dragAndDrop(await source.getWebElement(),
            await target.getWebElement())
            .perform();
    })


    afterAll(async () => {
        await browser.sleep(5000);
    })
})