export default class Character {
  constructor(name) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Значение name не соответствует правилам');
    }
    this.name = name;
    this.health = 100;
    this.level = 1;
  }
}
