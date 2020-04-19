import { browser } from "protractor"

describe('Chrome Extension Automation', () => {

    it('Launch browser with chrome extension', () => {

        browser.get('https://letcode.in/');
        browser.pause(10000);
    })
})