class Movie {
    constructor (movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];
        this.totalMovieProfit = 0;
        this.totalSoldMovieTickets = 0;
    }

    newScreening(date, hall, description) {
        let newScreening = {
            date,
            hall,
            description
        }

        let ifScreeneing = this.screenings.find(s => s.date === date && s.hall === hall);

        if (ifScreeneing) {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`)

        } else {
            this.screenings.push(newScreening);

            return `New screening of ${this.movieName} is added.`
        }
        } 

        endScreening(date, hall, soldTickets) {
            let ifScreeneing = this.screenings.find(s => s.date === date && s.hall === hall);

            if (!ifScreeneing) {
                throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`)
            
            } else {
                let currentScreeningProfit = soldTickets * this.ticketPrice.toFixed(2);
                this.totalMovieProfit += currentScreeningProfit;
                this.totalSoldMovieTickets += soldTickets;            
                this.screenings = this.screenings.filter(s => s.date !== date || s.hall !== hall)

                return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentScreeningProfit}`
            }
        }

        toString(){
            let result = `${this.movieName} full information:\n`
            let collectedProfitString = `Total profit: ${this.totalMovieProfit}$\nSold Tickets: ${this.totalSoldMovieTickets}\n`

            result += collectedProfitString

            if(this.screenings.length > 0) {
                result += "Remaining film screenings:\n"

                let sortedScreenings = this.screenings
                .sort((a,b) => a.hall.localeCompare(b.hall))
                .forEach(e => result += `${e.hall} - ${e.date} - ${e.description}\n`)

            } else {
                result += 'No more screenings!'
            }

            return result;
        }
            
}


let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());