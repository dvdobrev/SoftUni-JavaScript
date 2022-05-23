const { expect } = require('chai');

const companyAdministration = {

    hiringEmployee(name, position, yearsExperience) {
        if (position == "Programmer") {
            if (yearsExperience >= 3) {
                return `${name} was successfully hired for the position ${position}.`;
            } else {
                return `${name} is not approved for this position.`;
            }
        }
        throw new Error(`We are not looking for workers for this position.`);
    },
    calculateSalary(hours) {

        let payPerHour = 15;
        let totalAmount = payPerHour * hours;

        if (typeof hours !== "number" || hours < 0) {
            throw new Error("Invalid hours");
        } else if (hours > 160) {
            totalAmount += 1000;
        }
        return totalAmount;
    },
    firedEmployee(employees, index) {

        let result = [];

        if (!Array.isArray(employees) || !Number.isInteger(index) || index < 0 || index >= employees.length) {
            throw new Error("Invalid input");
        }
        for (let i = 0; i < employees.length; i++) {
            if (i !== index) {
                result.push(employees[i]);
            }
        }
        return result.join(", ");
    }

}

describe("Tests …", function() {
    
    describe("hiringEmployee", function() {

        it("check if postion and exp are valid", function() {
          expect(companyAdministration.hiringEmployee('Dobri', 'Programmer', 3)).to.be.equal(`Dobri was successfully hired for the position Programmer.`);
          expect(companyAdministration.hiringEmployee('Dobri', 'Programmer', 5.5)).to.be.equal(`Dobri was successfully hired for the position Programmer.`);
        });

        it("shpould return msg if exp is not valid", function() {
            expect(companyAdministration.hiringEmployee('Dobri', 'Programmer', 2)).to.be.equal(`Dobri is not approved for this position.`);

          });

        it("should throw and error when wrong postiotin given", function() {
            expect(() => companyAdministration.hiringEmployee('Dobri', 'kelner', 2)).to.throw(`We are not looking for workers for this position.`);
            expect(() => companyAdministration.hiringEmployee('Dobri', 'kelner', 5)).to.throw(`We are not looking for workers for this position.`);
        });
     });

     describe("calculateSalary", function() {
        
        it("should throw error by invalid input", function() {
            expect(() => companyAdministration.calculateSalary('h')).to.throw(`Invalid hours`);
            expect(() => companyAdministration.calculateSalary(undefined)).to.throw(`Invalid hours`);
            expect(() => companyAdministration.calculateSalary([])).to.throw(`Invalid hours`);
            expect(() => companyAdministration.calculateSalary('3')).to.throw(`Invalid hours`);


            expect(() => companyAdministration.calculateSalary(-3)).to.throw(`Invalid hours`);
            expect(() => companyAdministration.calculateSalary(-5.5)).to.throw(`Invalid hours`);
        });

        it("shold return the salary +1000 when > 160", function() {
            expect(companyAdministration.calculateSalary(161)).to.be.equal(3415);
            expect(companyAdministration.calculateSalary(200)).to.be.equal(4000);
           
          });

          it("shold return the salary when < 160", function() {
            expect(companyAdministration.calculateSalary(100)).to.be.equal(1500);         
            expect(companyAdministration.calculateSalary(160)).to.be.equal(2400);         
           
          });
     });

     describe("firedEmployee", function() {
        
        it("should throw error by invalid input", function() {
            let arr = ['ep1', 'ep2', 'ep3']

            expect(() => companyAdministration.firedEmployee({}, 2)).to.throw(`Invalid input`);
            expect(() => companyAdministration.firedEmployee([], 2)).to.throw(`Invalid input`);

            expect(() => companyAdministration.firedEmployee(arr, 'h')).to.throw(`Invalid input`);
            expect(() => companyAdministration.firedEmployee(arr, undefined)).to.throw(`Invalid input`);
            expect(() => companyAdministration.firedEmployee(arr, [])).to.throw(`Invalid input`);

            expect(() => companyAdministration.firedEmployee(arr, -3)).to.throw(`Invalid input`);

            expect(() => companyAdministration.firedEmployee(arr, 5)).to.throw(`Invalid input`);
            expect(() => companyAdministration.firedEmployee(arr, 5)).to.throw(`Invalid input`);
            expect(() => companyAdministration.firedEmployee(arr, 2.5)).to.throw(`Invalid input`);
            expect(() => companyAdministration.firedEmployee(arr, '0.5')).to.throw(`Invalid input`);
            expect(() => companyAdministration.firedEmployee(arr, 5.5)).to.throw(`Invalid input`);
       
        });

        it("should return msg", function() {
            let arr = ['ep1', 'ep2', 'ep3']

            expect(companyAdministration.firedEmployee(arr, 1)).to.be.equal(`ep1, ep3`);
            expect(companyAdministration.firedEmployee(arr, 2)).to.be.equal(`ep1, ep2`);
            expect(companyAdministration.firedEmployee(arr, 0)).to.be.equal(`ep2, ep3`);

        });

     });   
});