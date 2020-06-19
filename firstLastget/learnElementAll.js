const { browser, element, by } = require("protractor");

describe("Learn element.all", () => {

    beforeAll(() => {
        browser.get("https://play.letcode.in/checkbox")
    })

    xit("Get function", async () => {
        let labels = element.all(by.tagName("label"))
        let size = await labels.count();
        let firstLabel = labels.get(-1);
        console.log(await firstLabel.getText());
        // expect(await firstLabel.getText()).toBe('Select all the fruits')
    });
    it("first function", async () => {
        let labels = element.all(by.tagName("label"));
        let first = labels.first();
        console.log(await first.getText());
        console.log(await first.getTagName());
        expect(first.getTagName()).toBe('label');
    });
    it("last function", async () => {
        let labels = element.all(by.tagName("label"));
        let last = labels.last();
        console.log(await last.getText());
    });

});