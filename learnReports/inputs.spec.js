const { browser, element, by } = require("protractor")

describe('Interact with inputs' + Date.now(), () => {

    beforeAll(async () => {
        await browser.get("https://play.letcode.in/edit")
        await browser.manage().window().maximize();
    })

    it('Enter first and last name', async () => {
        await element(by.id("fullName"))
            .sendKeys("Koushik Chatterje");
    });
    it('Append and Tab', async () => {
        await element(by.id("join"))
            .sendKeys("person", protractor.Key.TAB);
    });
    it('Get the value', async () => {
        let getMe = element(by.id("getMe"))
        let value = await getMe.getAttribute("value");
        console.log(value);
    });
    it('Clear me', async () => {
        await element(by.id("clearMe"))
            .clear();
    })
    xit('Confirm that edit field is disabled', async () => {
        let isEditable = element(by.id("noEdit"));
        expect(await isEditable.isEnabled()).toBe(false)
    })
})
