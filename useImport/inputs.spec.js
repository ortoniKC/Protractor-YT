import { browser, element, by } from "protractor"
import { protractor } from "protractor/built/ptor";

describe('Interac with inputs', () => {
    beforeAll(async () => {
        browser.get("https://letcode.in/edit")
        browser.manage().window().maximize();
    })
    // afterEach(() => {
    //     browser.sleep(3000);
    // })
    it('some test', () => {
        browser.get()
        // element(by.)
    })
    it('Enter first and last name', async () => {
        element(by.id("fullName"))
            .sendKeys("Koushik Chatterje");

        // element(by.id("")).sendKeys("")
    });
    it('Append and Tab', async () => {
        element(by.id("join"))
            .sendKeys("person", protractor.Key.TAB);
    });
    it('Get the value', async () => {
        let getMe = element(by.id("getMe"))
        let value = await getMe.getAttribute("value");
        console.log(value);
    });
    it('Clear me', () => {
        element(by.id("clearMe"))
            .clear();
    })
    it('Confirm that edit field is disabled', async () => {
        let isEditable = await element(by.id("noEdit"))
            .isEnabled()
        console.log(isEditable);
        expect(isEditable).toBe(false)
    })
})