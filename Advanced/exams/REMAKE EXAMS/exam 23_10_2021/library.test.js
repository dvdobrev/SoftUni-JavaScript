const library = require('./library.js');
const { expect } = require('chai');

describe("Tests …", function() {

    describe("calcPriceOfBook", function() {

        it("should throw error", function() {
            expect(() => library.calcPriceOfBook('Book name', 'year')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(200, '200')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(200, 'kjkhk')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook([], '200')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook({}, '200')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(undefined, '200')).to.throw('Invalid input');
         
        });

        it('should get 50% discount if year is less or equal then 1980', function () {
            expect(library.calcPriceOfBook('Book name', 1980)).to.equal(`Price of Book name is 10.00`);
            expect(library.calcPriceOfBook('Book name', 1970)).to.equal(`Price of Book name is 10.00`);
            expect(library.calcPriceOfBook('Book name', 1990)).to.equal(`Price of Book name is 20.00`);
            expect(library.calcPriceOfBook('Book name', 1981)).to.equal(`Price of Book name is 20.00`);
        })
     });

    describe("findBook", function() {

        it("should throw an error if no books", function() {
            expect(() => library.findBook([], 'b3')).to.throw(`No books currently available`);
            
        });

        it("should returen msg if book is found", function() {
            expect(library.findBook(['b1', 'b2'], 'b1')).to.equal(`We found the book you want.`);
        });

        it("should returen msg if book is not found", function() {
            expect(library.findBook(['b1', 'b2'], 'b3')).to.equal(`The book you are looking for is not here!`);
        });
     });
    
    describe("arrangeTheBooks", function() {

    it("should throw an error if input is invalid", function() {
        expect(() => library.arrangeTheBooks('kk')).to.throw(`Invalid input`);
        expect(() => library.arrangeTheBooks(-2)).to.throw(`Invalid input`);
        expect(() => library.arrangeTheBooks({})).to.throw(`Invalid input`);
        expect(() => library.arrangeTheBooks([])).to.throw(`Invalid input`);
        expect(() => library.arrangeTheBooks(' 3')).to.throw(`Invalid input`);
        
    });

    it("should return a msg if books are arranged", function() {
        expect(library.arrangeTheBooks(3)).to.equal(`Great job, the books are arranged.`);
        expect(library.arrangeTheBooks(40)).to.equal(`Great job, the books are arranged.`);
    });

    it("should return a msg if books are NOT arranged", function() {
        expect(library.arrangeTheBooks(41)).to.equal(`Insufficient space, more shelves need to be purchased.`);
        
    });

    });
    
});