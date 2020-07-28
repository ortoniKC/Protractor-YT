import { element, by, browser, $ } from "protractor";

describe('Interact with buttons', () => {

    beforeAll(async () => {
        await browser.get('https://play.letcode.in/button')
    })
    it('Protractor specific locator', async () => {
        let text = await element(by.buttonText('Goto Home')).getText()
        console.log(text);
    });

    it('Get Position', async () => {
        let location = await $('#button2').getLocation()
        console.log(location.x);
        console.log(location.y);
    });

    it('Button color', async () => {
        let color = await $('.btn.btn-primary').getCssValue('background-color')
        console.log(color);
    });

    it('Find the height and width', async () => {
        let size = await element(by.buttonText('Submit Button')).getSize()
        console.log(size.height);
        console.log(size.width);
    });
})