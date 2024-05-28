// U6899-7808

//Step 1: Employee Class
class Employee {
    constructor(name, salary){
        this.name = name
        this.salary = salary
                console.log(`Name: ${this.name}`)
                console.log(`Monthly Salary: $${this.salary}`)               
    }
    annualSalary(){
        return this.salary * 12
    }

}