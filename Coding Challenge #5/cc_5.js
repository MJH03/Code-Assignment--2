// U6899-7808

//Step 1: Employee Class
class Employee {
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
                console.log(`Name: ${this.name}`);
                console.log(`Monthly Salary: $${this.salary}`);               
    }
    annualSalary(){
        return this.salary * 12;
    }

}
//Step 2: Management Subclass

class Manager extends Employee {
    constructor(name, salary, department)
    {   super(name, salary);
        this.department = department;
                console.log(`Department: ${this.department}`);
    }
    annualSalary(){
        const bonus = 0.15
            console.log(`bonus: $${super.annualSalary() * bonus}`)
return "Annual Salary: $" +((super.annualSalary() * bonus) + super.annualSalary())  
}
}
//Step 3: Instantiate Manager Objects
const Paint = new Manager("Bob Ross", 6600.00, "Digital Marketing")
Paint.annualSalary()

const Goodies = new Manager("Debbie Little", 7205.00, "Finance")
Goodies.annualSalary()