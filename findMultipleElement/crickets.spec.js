import { FindCrickets } from './FindCrickets';
import { browser } from 'protractor';
describe('Find no.of crickets', () => {

    it('Find crickets', async () => {
        await FindCrickets.getCricketsWord();
    });
})