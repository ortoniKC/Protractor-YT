import { element, by, browser, $ } from "protractor";

describe('Interact with Frames', () => {
    beforeAll(async () => {
        await browser.get('https://play.letcode.in/frame')
    })
    it('Enter username', async () => {
        await browser.switchTo().frame(1);
        await element(by.id("username")).sendKeys("admin")
    });
    xit('Enter username', async () => {
        await browser.switchTo().frame("myframe");
        await element(by.id("username")).sendKeys("admin")
    });
    xit('Enter username', async () => {
        let frameElement = await element(by.xpath("//iframe[@src='/login']"))
        await browser.switchTo().frame(frameElement.getWebElement());
        await element(by.id("username")).sendKeys("admin")
    });
    xit('switch to default content', async () => {
        await browser.switchTo().defaultContent();

        let header = await element(by.tagName("h1")).getText();
        console.log(header);

    })

    afterEach(async () => {
        await browser.sleep(3000)
    })
});