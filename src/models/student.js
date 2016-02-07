export default class Student {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    return this.name = name;
  }
}