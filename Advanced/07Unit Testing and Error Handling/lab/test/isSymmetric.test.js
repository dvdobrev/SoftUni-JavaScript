const isSymmetric = require('..lab/isSymmetric');
const { assert, expect, should } = require('chai');

describe('Test isSymmetric functionality', () => {
    it('Should pass when symetric array is provided', () => {
        let input = [1, 2, 3, 2, 1];
        let expectedResult = true;

        let actualResult = isSymmetric(input);

        assert.equal(actualResult, expectedResult);
    });
});
