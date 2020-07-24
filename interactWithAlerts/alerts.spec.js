import { element, by, browser, $ } from "protractor";

describe('Interact with Alert', () => {
    beforeAll(async () => {
        await browser.get('https://play.letcode.in/alert')
    })

    it('Simple Alert', async () => {
        await element(by.buttonText("Simple")).click();
        // console.log(await browser.getTitle());
        await browser.sleep(3000);
        (await browser.switchTo().alert()).accept()
    });

    it('Confirm Alert', async () => {
        await element(by.buttonText('Confirm')).click();
        await browser.sleep(3000);
        console.log(await (await browser.switchTo().alert()).getText());
        (await browser.switchTo().alert()).dismiss();
    });

    it('Prompt Alert', async () => {
        await element(by.buttonText('Prompt')).click()
        await browser.sleep(3000);
        let alert = await browser.switchTo().alert();
        await alert.sendKeys("koushik");
        await alert.accept();
    });

    it('Sweet Alert', async () => {
        await element(by.buttonText('Sweet')).click();
        await browser.sleep(2000)
        await element(by.buttonText('OK')).click();
    });
})