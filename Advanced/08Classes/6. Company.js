class Company {
    constructor(){
        this.departments = {}
    }
        addEmployee(name, salary, position, department) {
            if(Company.isValid(name) || Company.isValid(position) || Company.isValid(department) || salary <= 0){
                throw new Error("Invalid input!")
            } else {
                let departmentObject = {
                    name: name,
                    salary: salary,
                    position: position
            }
                if(!this.departments[department]){
                    this.departments[department] = [{'totalSalary': 0}, {'averageSalary': 0}];            
                    };
                this.departments[department][0]['totalSalary'] += salary;
                let totalSalary = this.departments[department][0]['totalSalary'];
                this.departments[department].push(departmentObject);
                this.departments[department][1]['averageSalary'] = totalSalary / (this.departments[department].length - 2).toFixed(2);
                return `New employee is hired. Name: ${name}. Position: ${position}`
                }
                
            }
                   
        static isValid(element) {
            if(element === "" || element === undefined || element === null){
                throw new Error('Invalid input!')
            }
        }

        bestDepartment() {
            let bestDepartment = undefined;
            let bestAverageSalary = 0;
           
            for (let [department, obj] of Object.entries(this.departments)){
                let currentAverageSalary = ((obj[1]['averageSalary']));
                if (bestAverageSalary < currentAverageSalary) {
                    bestAverageSalary = currentAverageSalary.toFixed(2);
                    bestDepartment = department;
                }
            }
            
            let bestDepartmentObject = this.departments[bestDepartment];
            let slicedDepartmentObj = bestDepartmentObject.slice(2)           
            let sortedObject = slicedDepartmentObj.sort((a,b) => b.salary - a.salary || a.name.localeCompare(b.name))

            let bestDepartmentString = `Best Department is: ${bestDepartment}\nAverage salary: ${bestAverageSalary}\n`
            let bestDepartmentEmployeeString = []
          
            slicedDepartmentObj.forEach(element => {
                bestDepartmentEmployeeString.push(`${element.name} ${element.salary} ${element.position}`)
            });
            return `${bestDepartmentString}${bestDepartmentEmployeeString.join('\n')}`                  
            
        }     
}


// let c = new Company();
// c.addEmployee("Stanimir", 2000, "engineer", "Construction");
// c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
// c.addEmployee("Slavi", 500, "dyer", "Construction");
// c.addEmployee("Stan", 2000, "architect", "Construction");
// c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
// c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
// c.addEmployee("Gosho", 1350, "HR", "Human resources");
// console.log(c.bestDepartment());

let c = new Company();
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
