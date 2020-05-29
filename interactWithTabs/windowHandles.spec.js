import { element, by, browser, $ } from "protractor";

describe('Interact with Tabs', () => {
    beforeAll(async () => {
        await browser.waitForAngularEnabled(false)
        await browser.get('https://the-internet.herokuapp.com/windows')
    })
    it('Switch to new window', async () => {
        let parentWindow = browser.getWindowHandle();
        console.log(await browser.getTitle());
        await element(by.linkText("Click Here")).click();
        let wins = await browser.getAllWindowHandles();
        console.log(wins);
        console.log(wins.length);
        await browser.switchTo().window(wins[1])
        console.log(await browser.getTitle());
        await browser.sleep(5000)

    })

})