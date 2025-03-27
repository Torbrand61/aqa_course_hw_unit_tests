class Employee {
  #salary;

  constructor(firstName, lastName, profession, salary) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._profession = profession;
      this.#salary = salary;
  }

  get firstName() {
      return this._firstName;
  }
  get lastName() {
      return this._lastName;
  }
  get profession() {
      return this._profession;
  }
  get salary() {
      return this.#salary;
  }

  set firstName(newFirstName) {
    if (newFirstName.length >= 2 && newFirstName.length <= 50 && /^[a-zA-Z]+$/.test(newFirstName)) {
        this._firstName = newFirstName;
    } else {
        throw new Error("firstName should be a string from 2 to 50 symbols, Latin letters only");
    }
  }
  set lastName(newLastName) {
    if (newLastName.length >= 2 && newLastName.length <= 50 && /^[a-zA-Z]+$/.test(newLastName)) {
      this._lastName = newLastName;
    } else {
        throw new Error("lastName should be a string from 2 to 50 symbols, Latin letters only");
    }
  }
  set profession(newProfession) {
      if (newProfession.trim().length > 0 && /^[a-zA-Z\s]+$/.test(newProfession)) {
        this._profession = newProfession;
    } else {
      throw new Error("profession must be a non-empty string, only Latin letters and spaces.");
    }
  }
  set salary(newSalary) {
    if (typeof newSalary === "number" && newSalary > 0 && newSalary < 10000){
        this.#salary = newSalary;
    } else {
      throw new Error("salary must be greater than 0 and less than 10000");
    }
  }

  getFullName() {
      return `${this._firstName} ${this._lastName}`;
  }
}

class Company {
  #employees = [];

  constructor(title, phone, address) {
      this._title = title;
      this._phone = phone;
      this._address = address;
  }

  addEmployee(employee) {
      if (employee instanceof Employee) {
          this.#employees.push(employee);
      } else {
          throw new Error("Passed object must be an instance of the Employee class");
      }
  }

  getEmployees() {
      return this.#employees;
  }

  findEmployeeByName(firstName) {
    const employee = this.#employees.find(emp => emp.firstName === firstName);
    if (employee) {
        return employee;
    } else {
        throw new Error(`Employee with name ${firstName} not found`);
    }
  }
  #getEmployeeIndex(firstName) {
    return this.#employees.findIndex(emp => emp.firstName === firstName);
  }
  removeEmployee(firstName) {
    const index = this.#getEmployeeIndex(firstName);
    if (index !== -1) {
        this.#employees.splice(index, 1);
    } else {
        throw new Error(`Employee with name ${firstName} not found`);
    }
  }
  getTotalSalary() {
    return this.#employees.reduce((total, emp) => total + emp.salary, 0);
  }
}

// const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
// const emp2 = new Employee('Jane', 'Smith', 'Manager', 5000);
// const emp3 = new Employee('Mark', 'Brown', 'Designer', 4000);

// const company = new Company('Tech Corp', '123-456', 'Main Street');
// company.addEmployee(emp1);
// company.addEmployee(emp2);
// company.addEmployee(emp3);

// console.log(company.getTotalSalary()); // 12000
// console.log(company.findEmployeeByName('Jane')); // Employee { firstName: 'Jane', ... }
// company.removeEmployee('John');
// console.log(company.getEmployees()); // [Employee, Employee]

export { Employee, Company };
