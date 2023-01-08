import Math from './Math';

export default class Magician extends Math {
  constructor(name, type = 'Magician') {
    super(name, type);
    this.attack = 50;
    this.defence = 40;
  }
}
