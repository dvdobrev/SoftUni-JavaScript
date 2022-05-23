const testNumbers = require('./testNumbers.js');
const { expect, assert} = require('chai');
const { sumNumbers } = require('./testNumbers.js');

describe("numberTests", function() {
    
    describe("SumNumbers", function() {
        it("check if parameters are numbers", function() {
            expect(testNumbers.sumNumbers(1, 2)).to.equal('3.00');
            expect(testNumbers.sumNumbers(-1, 2)).to.equal('1.00');
            expect(testNumbers.sumNumbers(1, 2)).to.equal('3.00');
        });

        it('return undeifned',  () => {
            expect(testNumbers.sumNumbers('j', 'h')).to.equal(undefined)
        })
     });

    describe("numberChecker", function(input) {
        it("check if number is even", function() {
            expect(testNumbers.numberChecker('2')).to.equal('The number is even!')
            expect(testNumbers.numberChecker(4)).to.equal('The number is even!')
    });

        it("check if number is odd", function() {
            expect(testNumbers.numberChecker('1')).to.equal('The number is odd!')
            expect(testNumbers.numberChecker(3)).to.equal('The number is odd!')
    });

        it("have to throw error", function() {
            expect(() => testNumbers.numberChecker('h')).to.throw('The input is not a number!')
        })
    });

    describe("averageSumArray", function(arr) {
        it("check if arry sum is correct", function() {
            expect(testNumbers.averageSumArray([1, 2, 3, 6])).to.equal(3);
    });
    });
     
});