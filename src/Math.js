import Character from './Character';

export default class Math extends Character {
  set stoned(stoned) {
    if (stoned === 'yes') {
      this.isStoned = stoned;
    }
  }

  get stoned() {
    return this.isStoned;
  }

  set attackLevel(square) {
    if (this.stoned === 'yes') {
      this.attack -= ((square * 0.1 - 0.1) * this.attack);
      this.attack -= Math.round((Math.log(square) * Math.LOG2E) * 5);
    }
    this.attack -= ((square * 0.1 - 0.1) * this.attack);

    if (this.attack < 0) {
      this.attack = 0;
    }
  }

  get attackLevel() {
    return this.attack;
  }
}
