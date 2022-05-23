const { expect } = require('chai')

const cinema = {
    showMovies: function(movieArr) {

        if (movieArr.length == 0) {
            return 'There are currently no movies to show.';
        } else {
            let result = movieArr.join(', ');
            return result;
        }

    },
    ticketPrice: function(projectionType) {

        const schedule = {
            "Premiere": 12.00,
            "Normal": 7.50,
            "Discount": 5.50
        }
        if (schedule.hasOwnProperty(projectionType)) {
            let price = schedule[projectionType];
            return price;
        } else {
            throw new Error('Invalid projection type.')
        }

    },
    swapSeatsInHall: function(firstPlace, secondPlace) {

        if (!Number.isInteger(firstPlace) || firstPlace <= 0 || firstPlace > 20 ||
            !Number.isInteger(secondPlace) || secondPlace <= 0 || secondPlace > 20 || firstPlace === secondPlace) {
            return "Unsuccessful change of seats in the hall.";
        } else {
            return "Successful change of seats in the hall.";
        }

    }
};

describe("Tests …", function() {

    describe("showMovies", function() {

        // it("should return msg if no movies", function() {
        //     expect(cinema.showMovies([])).to.equal(`There are currently no movies to show.`);
        // });

        // it("should return join arry", function() {
        //     expect(cinema.showMovies(['m1', 'm2'])).to.equal("m1, m2");
        // });

        it("empty arr", function () {
            expect(cinema.showMovies([])).to.be.equal('There are currently no movies to show.')
        });
        it("show arr", function () {
            expect(cinema.showMovies(['jack', 'nickson'])).to.be.equal('jack, nickson')
        });

     });

    describe("ticketPrice", function() {

        it("should return price for premiere ticket", function() {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
        });

        it("should return price for normal ticket", function() {
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
        });

        it("should return price discount ticket", function() {
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        });

        it("should throw an error if wrong projection type", function() {
            expect(() => cinema.ticketPrice('wrong')).to.throw(`Invalid projection type.`);
        });

    });

    describe("swapSeatsInHall", function() {

        it("should return msg for unsuccessful seats change", function() {
            expect(cinema.swapSeatsInHall('p1', 'p2')).to.equal(`Unsuccessful change of seats in the hall.`);

            expect(cinema.swapSeatsInHall('p1', 2)).to.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall(-1, 2)).to.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall(0, 2)).to.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall(21, 2)).to.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall(1, 'p2')).to.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall(1, 0)).to.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall(1, -1)).to.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall(1, 21)).to.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall(1, 1)).to.equal(`Unsuccessful change of seats in the hall.`);
        });

        it("should return successful msg", function() {
            expect(cinema.swapSeatsInHall(1, 20)).to.be.equal(`Successful change of seats in the hall.`);

        });

        // it("show current price", function () {
        //     expect(cinema.swapSeatsInHall(1, 20)).to.be.equal("Successful change of seats in the hall.");
        // });

    });
    
});