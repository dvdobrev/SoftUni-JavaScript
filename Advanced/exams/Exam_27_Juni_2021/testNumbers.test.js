let {assert, expect} = require('chai');
const { numberChecker } = require('./testNumbers');
let testNumbers = require("./testNumbers")


describe("testNumbers", function() {  
    describe("sumNumbers …", function() {  

        it("should  return undefine if the inputs are not nums", () => {

        assert.equal(testNumbers.sumNumbers('a', 3), undefined)
        assert.equal(testNumbers.sumNumbers(3, '-'), undefined)
        })
        
        it("should return sum of both numbs", () => {

            assert.equal(testNumbers.sumNumbers(1, 1), 2)
            assert.equal(testNumbers.sumNumbers(1.10, 1.10), 2.20)
            assert.equal(testNumbers.sumNumbers(1.15, 1.10), 2.25)
            
            })

    })

    describe("sumNumbers", function() {  

       it("should throw an error", () => {
        // let result = () => testNumbers.numberChecker('a');
        // let expected = 'The input is not a number!'
        // let expected2 = 'The input is not'
        
        //assert.throws(result, expected2)
        //assert.throw(() => {testNumbers.numberChecker('l'), 'The input is not a numbe'})

        assert.throw(() => { testNumbers.numberChecker('a'), 'The'; });

        // let result = () => testNumbers.numberChecker('a');
        // let expected = 'The input is not a number!'
        // let expected2 = 'The input is not'

        // assert.throw(result, Error, expected2)


       })


       it('shold return message when even numeer is passed', () => {
           let result = testNumbers.numberChecker(2)
           let expected = 'The number is even!'

           assert.equal(result, expected)
       })

       it('shold return message when odd numeer is passed', () => {
        let result = testNumbers.numberChecker(1)
        let expected = 'The number is odd!'

        assert.equal(result, expected)
    })
    
    })


    describe("sumNumbers", function() {  

        it('should return average sum of array', () => {
            let array = [1, 2, 3];
            let result = testNumbers.averageSumArray(array);
            let expected = 2

            assert.equal(result, expected)
        })
       
     })
    
})
