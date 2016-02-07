import Student from './student'

export default class Person extends Student {
  constructor(name, age, citizen) {
    super(name, age);
    this.citizen = citizen;
  }

  getCitizen() {
    return this.citizen;
  }

  getName() {
    return `Person: ${super.getName()}`
  }
}