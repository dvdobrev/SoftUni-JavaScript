let {assert} = require('chai');
let lookupChar = require('../tests/03 charLookup');

describe('lookupChar', () => {
    it(`should return undefined when first paramerter is not a string`, () => {
        assert.equal(lookupChar(undefined, 1), undefined);
        assert.equal(lookupChar(1, 1), undefined);
    })


    it(`should return undefined when second paramerter is not a string`, () => {
        assert.equal(lookupChar('some', undefined), undefined);
        assert.equal(lookupChar('some', 1.26), undefined);
        assert.equal(lookupChar('some', '1'), undefined);
    })

    it(`should return 'Incorrect index' when second paramerter is not within index range `, () => {
        assert.equal(lookupChar('some', -1), 'Incorrect index');
        assert.equal(lookupChar('some', 5), 'Incorrect index');      
    })

    it(`should return correct char when both parametars are valid `, () => {
        assert.equal(lookupChar('other', 0), 'o');
        assert.equal(lookupChar('some', 2), 'm');      
    })
    
})