import {
  Bowman, Swordsman, Magician, Daemon, Undead, Zombie, Character,
} from '../character';

test('test Bowerman', () => {
  const bowman = new Bowman('Bowerman');
  expect(bowman.attack).toBe(25);
  expect(bowman.defence).toBe(25);
  expect(bowman.health).toBe(100);
});

test('test Swordsman', () => {
  const swordsman = new Swordsman('Swordsman');
  expect(swordsman.attack).toBe(40);
  expect(swordsman.defence).toBe(10);
});

test('test Magician', () => {
  const magician = new Magician('Magician');
  expect(magician.attack).toBe(10);
  expect(magician.defence).toBe(40);
});

test('test Daemon', () => {
  const daemon = new Daemon('Daemon');
  expect(daemon.defence).toBe(40);
  expect(daemon.level).toBe(1);
});

test('test Undead', () => {
  const undead = new Undead('Undead');
  expect(undead.attack).toBe(25);
  expect(undead.name).toBe('Undead');
});

test('test Zombie', () => {
  const zombie = new Zombie('Zombie');
  expect(zombie.type).toBe('Zombie');
  expect(zombie.health).toBe(100);
});

test('test "type" Error', () => {
  expect(() => new Character('qwerty', 'qwerty', 0, 0)).toThrow(Error('invalid "type"'));
});

test('test "name" Error', () => {
  expect(() => new Magician('Reeeeeally Long Name')).toThrow(Error('"name" does not meet the length'));
});
