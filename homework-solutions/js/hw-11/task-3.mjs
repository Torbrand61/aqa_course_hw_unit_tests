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
    if (typeof newSalary === "number" && newSalary > 0 && newSalary < 10000) {
      this.#salary = newSalary;
    } else {
      throw new Error("salary must be greater than 0 and less than 10000");
    }
  }

  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

class Developer extends Employee {
  constructor(firstName, lastName, salary, programmingLanguages = []) {
    super(firstName, lastName, "Developer", salary);
    this.programmingLanguages = programmingLanguages
  }
  addProgrammingLanguage(language) {
    if (language.length > 0) {
      this.programmingLanguages.push(language);
    } else {
      throw new Error("Language must be a non-empty string");
    }
  }
}

class Manager extends Employee {
  constructor(firstName, lastName, salary, teamSize = 0) {
    super(firstName, lastName, "Manager", salary);
    this.teamSize = teamSize; 
  }
  increaseTeamSize() {
    this.teamSize += 1;
  }
}

class Designer extends Employee {
  constructor(firstName, lastName, salary, designTools = []) {
    super(firstName, lastName, "Designer", salary);
    this.designTools = designTools;
  }
  addDesignTool(tool) {
    if (tool.length > 0) {
      this.designTools.push(tool);
    } else {
      throw new Error("Tool must be a non-empty string");
    }
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
    if (!(employee instanceof Employee)) {
      throw new Error("Passed object must be an instance of the Employee class");
    }
    if (this.#employees.some(emp => emp.firstName === employee.firstName && emp.lastName === employee.lastName)) {
      throw new Error(`Employee with name ${employee.firstName} ${employee.lastName} already exists`);
    }
    this.#employees.push(employee);
  }

  getEmployees() {
    return this.#employees;
  }

  getEmployeesByProfession(profession) {
    return this.#employees.filter(emp => emp.profession === profession);
  }
}

export { Employee, Company, Designer, Developer, Manager };
