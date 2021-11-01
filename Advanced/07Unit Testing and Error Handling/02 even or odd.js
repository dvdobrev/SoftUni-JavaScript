let {assert} = require('chai');


function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe('isOddOrEven', () => {
    it('some test', () => {
        assert.equal(isOddOrEven(undefined), undefined);
        assert.equal(isOddOrEven(null), undefined);
        assert.equal(isOddOrEven(1), undefined);
    });

    it('should return with even string', () => {
        assert.equal(isOddOrEven('some'), 'even');
        assert.equal(isOddOrEven('ok'), 'even');
    });

    it('should return with odd string', () => {
        assert.equal(isOddOrEven('somek'), 'odd');
        assert.equal(isOddOrEven('oko'), 'odd');
    });

})