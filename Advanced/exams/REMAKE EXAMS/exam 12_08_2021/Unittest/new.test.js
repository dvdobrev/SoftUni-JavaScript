describe("Tests Cinema", function () {
    describe("show movies", function () {
        it("empty arr", function () {
            expect(cinema.showMovies([])).to.be.equal('There are currently no movies to show.')
        });
        it("show arr", function () {
            expect(cinema.showMovies(['jack', 'nickson'])).to.be.equal('jack, nickson')
        });
    });

    describe("ticketPrice", function () {
        it("throw error", function () {
            expect(() => cinema.ticketPrice('')).to.throw(Error, "Invalid projection type.")
            expect(() => cinema.ticketPrice('invalid')).to.throw(Error, "Invalid projection type.")
        });
        it("show current price", function () {
            expect(cinema.ticketPrice('Premiere')).to.be.equal(12.00);
            expect(cinema.ticketPrice('Normal')).to.be.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.be.equal(5.50);
        });
    });

    describe("swapSeatsInHall", function () {
        // it("return unsuccessfull", function () {
        //     expect(cinema.swapSeatsInHall(5)).to.be.equal("Unsuccessful change of seats in the hall.");
        //     expect(cinema.swapSeatsInHall(undefined, 5)).to.be.equal("Unsuccessful change of seats in the hall.");
            
        //     expect(cinema.swapSeatsInHall('5', 5)).to.be.equal("Unsuccessful change of seats in the hall.");
        //     expect(cinema.swapSeatsInHall(5, '5')).to.be.equal("Unsuccessful change of seats in the hall.");
            
        //     expect(cinema.swapSeatsInHall(3.5, 5)).to.be.equal("Unsuccessful change of seats in the hall.");
        //     expect(cinema.swapSeatsInHall(5, 2.4)).to.be.equal("Unsuccessful change of seats in the hall.");
            
        //     expect(cinema.swapSeatsInHall(21, 5)).to.be.equal("Unsuccessful change of seats in the hall.");
        //     expect(cinema.swapSeatsInHall(2, 21)).to.be.equal("Unsuccessful change of seats in the hall.");
            
        //     expect(cinema.swapSeatsInHall(0, 5)).to.be.equal("Unsuccessful change of seats in the hall.");
        //     expect(cinema.swapSeatsInHall(2, 0)).to.be.equal("Unsuccessful change of seats in the hall.");
            
        //     expect(cinema.swapSeatsInHall(-1, 5)).to.be.equal("Unsuccessful change of seats in the hall.");
        //     expect(cinema.swapSeatsInHall(2, -1)).to.be.equal("Unsuccessful change of seats in the hall.");
            
        //     expect(cinema.swapSeatsInHall(5, 5)).to.be.equal("Unsuccessful change of seats in the hall.");
            
        // });
        it("show current price", function () {
            expect(cinema.swapSeatsInHall(1, 20)).to.be.equal("Successful change of seats in the hall.");
        });
    });
});