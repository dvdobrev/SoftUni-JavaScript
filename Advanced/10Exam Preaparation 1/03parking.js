class Parking {
    constructor (capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }
        addCar(carModel, carNumber) {
            if (this.vehicles.length >= this.capacity){
                throw new Error(`Not enough parking space.`)
            } 
            
            let currentCar = {
                carModel,
                carNumber,
                payed: false
            }
            this.vehicles.push(currentCar)
            return `The ${carModel}, with a registration number ${carNumber}, parked.`
            }
        
        removeCar(carNumber) {
            let searchedCar = this.vehicles.find(element => element.carNumber === carNumber);
                   
            if (!searchedCar) {
                throw new Error('The car, you\'re looking for, is not found.')

            } else if (!searchedCar.payed){
                throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)

            } else {
                this.vehicles = this.vehicles.filter(element => element.carNumber != carNumber)
               
                return `${carNumber} left the parking lot.`
            }
        };

        pay(carNumber) {
            let searchedCar = this.vehicles.find(element => element.carNumber === carNumber);

            if (!searchedCar) {
                throw new Error(`${carNumber} is not in the parking lot.`)
            
            } else if (searchedCar.payed) {
                throw new Error(`${carNumber}'s driver has already payed his ticket.`)
            }
            
            this.vehicles.forEach(element => {
                if (element.carNumber == carNumber) {
                    element.payed = true;
                }
            }
            )

            return `${carNumber}'s driver successfully payed for his stay.`
            }
        
        getStatistics(carNumber) {
            if (carNumber) {
                let searchedCar = this.vehicles.find(element => element.carNumber === carNumber);
                return `${searchedCar.carModel} == ${carNumber} - ${searchedCar.payed == true ? "Has payed" : "Not payed"}`
            } else {
                let sortedCars = this.vehicles.sort((a,b) => a.carModel.localeCompare(b.carModel));
                
                let arr = [];
                sortedCars.forEach(c => arr.push(`${c.carModel} == ${c.carNumber} - ${c.payed == true ? "Has payed" : "Not payed"}`))
                let result = `The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.\n`

                result += arr.join('\n');

                return result;
               
            }
    }
            
}
        



// p1 = new Parking(5);
// p1.addCar("reno", 'car1');
// p1.addCar("audi", 'car2');
// //console.log(p1);
// //console.log(p1.removeCar('ca1'))
// console.log(p1.pay('car2'))
// // console.log(p1.getStatistics('car1'));
// // console.log(p1.getStatistics('car2'));
// console.log(p1.getStatistics());

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));

