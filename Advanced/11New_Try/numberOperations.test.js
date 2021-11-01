const numberOperations = require('./03. Number Operations_Resources');
const {assert} = require('chai');

describe("numberOperations", function() {
    describe("numberChecker tests", () => {

        it ('it should throw an error if input is not a number', () => {
            let number = 'l'

            let result = () => numberOperations.numberChecker(number)
            let expected = 'The input is not a number!';

            assert.throw(result, expected)

            // from Victor

            assert.throw(() => numberOperations.numberChecker('abc'), Error, 'The input is not a number!')
            assert.throw(() => numberOperations.numberChecker(undefined), Error, 'The input is not a number!')

        })

        it ('it should return a message when the number is under 100', () => {
            let number = 95

            let result = numberOperations.numberChecker(number)
            let expected = 'The number is lower than 100!';

            assert.equal(result, expected)

            // from Victor

            assert.equal(numberOperations.numberChecker(3), 'The number is lower than 100!')
            

        })

        it ('it should return a message when the number is above or equal 100', () => {
            let number = '105'

            let result = numberOperations.numberChecker(number)
            let expected = 'The number is greater or equal to 100!';

            assert.equal(result, expected)
        })
        
     });

     describe("powNumber tests", () => {
         it ('it shold return pow number', () => {
            let num = 2

            let result = numberOperations.powNumber(num)
            let expected = 4;
   
            assert.equal(result, expected)

            assert.equal(numberOperations.powNumber(3), 9);
            assert.equal(numberOperations.powNumber(1.5), 1.5 * 1.5);
            assert.equal(numberOperations.powNumber(-4), 16);
            assert.equal(numberOperations.powNumber(0), 0);
            assert.isNaN(numberOperations.powNumber(NaN));

         })
        
    });

    describe("sumArrays tests", () => {
        
        it("should empty array when called with empty arrays", () => {
           assert.deepEqual(numberOperations.sumArrays([], []), []);
           assert.deepEqual(numberOperations.sumArrays([1], [2]), [3]);
        })

         it("should return empty array when one parameter is empty array", () => {
           assert.deepEqual(numberOperations.sumArrays([1, 2, 3], []), [1, 2, 3]);
           assert.deepEqual(numberOperations.sumArrays([], [1, 2, 3]), [1, 2, 3]);
        })

        it("should return correct result when both parametars ar non empty equal length arrays", () => {
            assert.deepEqual(numberOperations.sumArrays([1, 2, 3], [2, 3, 4]), [3, 5, 7]);
            assert.deepEqual(numberOperations.sumArrays(['a', 'b', 'c'], ['b', 'c', 'd']), ['ab', 'bc', 'cd']);
            
         })

         it("should return correct result when the arrays dont have the same length", () => {
            assert.deepEqual(numberOperations.sumArrays([1, 2, 8], [2, 3]), [3, 5, 8]);
            assert.deepEqual(numberOperations.sumArrays(['a', 'b', 'c'], ['b', 'c']), ['ab', 'bc', 'c']);
            
         })

    });
    
});