const numberOperations = {
    powNumber: function (num) {
        return num * num;
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input < 100) {
            return 'The number is lower than 100!';
        } else {
            return 'The number is greater or equal to 100!';
        }
    },
    sumArrays: function (array1, array2) {

        const longerArr = array1.length > array2.length ? array1 : array2;
        const rounds = array1.length < array2.length ? array1.length : array2.length;

        const resultArr = [];

        for (let i = 0; i < rounds; i++) {
            resultArr.push(array1[i] + array2[i]);
        }

        resultArr.push(...longerArr.slice(rounds));

        return resultArr
    }
};

const { expect } = require('chai');


describe("Tests …", function() {

    describe("powNumber", function() {
        it("should return num * num", function() {
            expect(numberOperations.powNumber(5)).to.equal(25);
            expect(numberOperations.powNumber(0)).to.equal(0);
        });
     });

     describe("sumArrays", function() {
        it("arr1 > arr2", function() {
            let arr1 = [1, 2, 3];
            let arr2 = [4, 5];

            expect(numberOperations.sumArrays(arr1, arr2)).to.eql([5, 7, 3]);
            
        });

        it("arr1 < arr2", function() {
            let arr1 = [4, 5];
            let arr2 = [1, 2, 3];

            expect(numberOperations.sumArrays(arr1, arr2)).to.eql([5, 7, 3]);
            
        });
     });

     describe("numberChecker", function() {
        it("should throw an error if input is not a num", function() {
            expect(() => numberOperations.numberChecker('g')).to.throw(`The input is not a number!`);
            expect(() => numberOperations.numberChecker(undefined)).to.throw(`The input is not a number!`);
           
        });

        it("should return msg if num is < 100", function() {
            expect(numberOperations.numberChecker(99)).to.equal(`The number is lower than 100!`);
            
        });

        it("should return msg if num is > 100", function() {
            expect(numberOperations.numberChecker(101)).to.equal(`The number is greater or equal to 100!`);
            expect(numberOperations.numberChecker(100)).to.equal(`The number is greater or equal to 100!`);
            
        });
     });
    
});

