import { browser, $, element, by } from "protractor"

describe('Interact with dropdown', () => {

    xit('Select your fav fruit', async () => {

        await browser.get("https://play.letcode.in/dropdown");
        // let select = await $("#Index");
        await element(by.cssContainingText('option', 'Apple')).click()
        await browser.sleep(5000)
    })

    it('Semantic UI dropdown', async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get("https://semantic-ui.com/modules/dropdown.html");
        await $('.ui.selection.dropdown').click();
        await browser.sleep(2000)
        await element(by.cssContainingText('div.item', 'Female')).click();
    })

})
// element(by.id("Index"))