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
      this._firstName = newFirstName;
  }
  set lastName(newLastName) {
      this._lastName = newLastName;
  }
  set profession(newProfession) {
      this._profession = newProfession;
  }
  set salary(newSalary) {
    if (newSalary >= 0) {
        this.#salary = newSalary;
    } else {
      throw new Error("Salary cannot be negative");
    }
  }

  getFullName() {
      return `${this._firstName} ${this._lastName}`;
  }
}

// const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
// console.log(emp1.firstName); // "John"
// emp1.salary = 3100;
// console.log(emp1.salary); // 3100

class Company {
  #employees = [];

  constructor(title, phone, address) {
      this._title = title;
      this._phone = phone;
      this._address = address;
  }

  get title() {
      return this._title;
  }
  get phone() {
      return this._phone;
  }
  get address() {
      return this._address;
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

  getInfo() {
      return `Компания: ${this._title}\nАдрес: ${this._address}\nКоличество сотрудников: ${this.#employees.length}`;
  }
}

// const company = new Company('Tech Corp', 123456, 'Main Street');
// const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
// const emp2 = new Employee('Barbara', 'Johnson', 'QA', 2500);
// company.addEmployee(emp1);
// company.addEmployee(emp2);
// console.log(company.getEmployees()); // [Employee, Employee]
// console.log(company.getInfo());

export { Employee, Company };
