class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];
    }

    registerParticipant (name, condition, money) {
        money = Number(money);

        let currentParticipant = {
            name,
            condition,
            power: 100,
            wins: 0
        }

        let searchedObject = this.listOfParticipants.filter(p => p.name === name);      

        if (!this.priceForTheCamp[condition]) {
            throw new Error("Unsuccessful registration at the camp.")
        }
        
        // if (searchedObject.name == name) {
        //     return `The ${name} is already registered at the camp.`
        
        // }

        if (this.listOfParticipants.some(p => p.name == name)) {
            
            return `The ${name} is already registered at the camp.`
        }
        
        if(this.priceForTheCamp[condition] > money) {
            return `The money is not enough to pay the stay at the camp.`
        } 

        this.listOfParticipants.push(currentParticipant)
        return `The ${name} was successfully registered.`
        
        }

    unregisterParticipant (name) {

        let searchedObject = this.listOfParticipants.filter(p => p.name === name);
        
        if (searchedObject === undefined || searchedObject.length === 0) {
            throw new Error(`The ${name} is not registered in the camp.`)

        } else {

            this.listOfParticipants = this.listOfParticipants.filter(p => p.name !== name)            
            return `The ${name} removed successfully.`
        }
    }

    timeToPlay (typeOfGame, participant1, participant2) {
        let p1 = this.getObject(participant1)
        let p2 = this.getObject(participant2)
        let allNames = [];

        this.listOfParticipants.forEach(element => {
            allNames.push(element.name)
            
        });
        
        

        if (typeOfGame === 'Battleship') {
            if (!this.listOfParticipants.some(p => p.name === participant1)) {
                throw new Error( `Invalid entered name/s.`)
            }

            p1.power += 20;
            return `The ${p1.name} successfully completed the game ${typeOfGame}.`

        } else {

            if (!allNames.includes(participant1) || !allNames.includes(participant2)) {
                throw new Error( `Invalid entered name/s.`)
            }
    
            if(p1.condition !== p2.condition) {
                throw new Error(`Choose players with equal condition.`)
            }
    
            if (p1.power > p2.power) {
                p1.wins += 1;
            
                return  `The ${p1.name} is winner in the game ${typeOfGame}.`

            } else if (p1.power < p2.power) {
                p2.wins += 1;
               
                return  `The ${p2.name} is winner in the game ${typeOfGame}.`

            } else {
                return `There is no winner.`
            }
        }       
     }
    
    toString () {
        // let result = `${organizer} will take ${this.listOfParticipants.length} participants on camping to ${location}`
        // let sortedParicipiants = this.listOfParticipants.sort((a,b) => b.wins - a.wins)

        // sortedParicipiants.forEach(p => result+= `${p.name} - ${p.condition} - ${p.power} - ${p.wins}\n`)

        // return result;
        let output = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];
        this.listOfParticipants.sort((p1, p2) => p2.wins - p1.wins).forEach(p => {
            output.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`);
        });
        return output.join('\n');

    }

    getPrice(condition) {
       
        let price = this.priceForTheCamp[condition];
        return price;
        
    }   
    
    getObject(player) {
        let searchedObject = this.listOfParticipants.find(p => p.name === player);
        return searchedObject;
    }
}
