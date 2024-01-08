import Bowman from '../bowman';

test('test correct create Bowman', () => {
  const char = new Bowman('Robin');

  const correctChar = {
    name: 'Robin',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(char).toEqual(correctChar);
});
