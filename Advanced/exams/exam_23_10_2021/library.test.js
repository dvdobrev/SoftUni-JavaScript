let {assert, expect} = require('chai');
let library = require("./library")

describe("library", function() {  
    describe("calcPriceOfBook", function() {  

        it("should throw an error if nameOfBook is not string", () => {
            assert.throw(() => (library.calcPriceOfBook(5, 5), Error, 'Invalid inp') );
            assert.throw(() => (library.calcPriceOfBook(undefined, 5), Error, 'Invalid inp') );
            assert.throw(() => (library.calcPriceOfBook({}, 5), Error, 'Invalid inp') );
            
         })
         
        it("should throw an error if year is not a Number", () => {
           
           assert.throw(() => { library.calcPriceOfBook('b1', 'j'), 'Invalid input'; });       
           assert.throw(() => { library.calcPriceOfBook('b1', 5.5), 'Invalid input'; });       
           assert.throw(() => { library.calcPriceOfBook('b1', undefined), 'Invalid input'; });       
         })

        it("should return half book price if year if less than 1980", () => {

            assert.equal(library.calcPriceOfBook('book1', 1970), `Price of book1 is 10.00`);
            assert.equal(library.calcPriceOfBook('book1', 1980), `Price of book1 is 10.00`);
            assert.equal(library.calcPriceOfBook('book1', 2000), `Price of book1 is 20.00`);           
        })
    })

     describe("findBook", function() {  

        it('should throw an error if no book', () => {

            assert.throw(() => { library.findBook([], 'b3'), 'No books currently available'; });        
        })

        it('should return a message when the book is NOT found', () => {

            assert.equal(library.findBook(['b1', 'b2'], 'b3'), 'The book you are looking for is not here!')
              
        })

        it("zero arr throw", function () {
            expect(() => library.findBook ([], 'Troy')).to.throw(Error, "No books currently available");
        });
        it("book in arr", function () {
            expect(library.findBook (["Troy", "Life Style"], 'Troy')).to.be.equal("We found the book you want.");
        });
        it("book not in arr", function () {
            expect(library.findBook (["Troy", "Life Style"], 'Toy')).to.be.equal("The book you are looking for is not here!");
        });     
     })

     describe("arrangeTheBooks", function() {  

        it('should throw an error if input is not a number', () => {

            assert.throw(() => { library.arrangeTheBooks('g'), 'Invalid input'; });
            assert.throw(() => { library.arrangeTheBooks('5'), 'Invalid input'; });
            assert.throw(() => { library.arrangeTheBooks(undefined), 'Invalid input'; });
          
        })

        it('should throw an error if input is less than 0', () => {

            assert.throw(() => { library.arrangeTheBooks(-3), 'Invalid input'; });
          
        })

        it('should return a message if avaible space', () => {
           
            assert.equal(library.arrangeTheBooks(40), "Great job, the books are arranged.")    
          
        })

        it('should return a message if NOT avaible space', () => {
             
            assert.equal(library.arrangeTheBooks(500), 'Insufficient space, more shelves need to be purchased.')
          
        })    
     })

     it("zero arr throw", function () {
        expect(() => library.arrangeTheBooks(-1)).to.throw(Error, "Invalid input");
        expect(() => library.arrangeTheBooks()).to.throw(Error, "Invalid input");
        expect(() => library.arrangeTheBooks(" 4")).to.throw(Error, "Invalid input");
        expect(() => library.arrangeTheBooks(2.5)).to.throw(Error, "Invalid input");
        expect(() => library.arrangeTheBooks([])).to.throw(Error, "Invalid input");
        expect(() => library.arrangeTheBooks({})).to.throw(Error, "Invalid input");
    });
    
})