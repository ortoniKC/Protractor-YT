import { browser, element, by } from "protractor";

describe("Learn Each", () => {

    it('Select all the fruits', async () => {
        await browser.get("https://play.letcode.in/checkbox");
        let allLabels = element.all(by.tagName("label"))
        allLabels.each(async (ele) => {
            let text = await ele.getText();
            console.log(text);
        })
        expect(await allLabels.count()).toBe(4);
    })
})