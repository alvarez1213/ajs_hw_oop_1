/* eslint-disable max-classes-per-file */
class Character {
  constructor(name, type, attack, defence) {
    const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (name.length < 2 || name.length > 10) {
      throw new Error('"name" does not meet the length');
    } else if (!validTypes.includes(type)) {
      throw new Error('invalid "type"');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }
}

class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman', 25, 25);
  }
}

class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman', 40, 10);
  }
}

class Magician extends Character {
  constructor(name) {
    super(name, 'Magician', 10, 40);
  }
}

class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon', 10, 40);
  }
}

class Undead extends Character {
  constructor(name) {
    super(name, 'Undead', 25, 25);
  }
}

class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie', 40, 10);
  }
}

export {
  Character,
  Bowman,
  Swordsman,
  Magician,
  Daemon,
  Undead,
  Zombie,
};
