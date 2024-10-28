class Char {
  constructor() {
    this.damage = null
    this.state = null;
  }
  attack(range) {
    const ratio = this.ratio(range);
		const reducedDmg = this.damage * ratio.ratio - ratio.stoned
    return reducedDmg>0 ? reducedDmg : 0
  }
  ratio(range) {
    const ratio = 1 - ((range - 1) / 10);
    let stoned = 0;
    switch (this.state) {
      case 'stoned':
        stoned = Math.log2(range) * 5;
        return { ratio, stoned };

      default:
        return { ratio, stoned };
    }
  }
  setState(state) {
    this.state = state;
  }
}

export class Magician extends Char {
  constructor(damage) {
    super(damage);
		this.damage = damage;
    this.state = 'normal';
  }
}

export class Daemon extends Char {
  constructor(damage) {
    super(damage)
    this.damage = damage
    this.state = 'normal'
  }
}