import Character from './Character';

export default class Math extends Character {
  set stoned(stoned) {
    this.isStoned = stoned;
  }

  get stoned() {
    return this.isStoned;
  }

  set attackLevel(square) {
    this.attack -= ((square * 0.1 - 0.1) * this.attack);

    if (this.stoned === true) {
      this.attack -= Math.round(Math.log2(square)) * 5;
    }

    if (this.attack < 0) {
      this.attack = 0;
    }
  }

  get attackLevel() {
    return this.attack;
  }
}
