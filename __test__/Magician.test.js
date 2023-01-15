import Magician from '../src/Magician';

test('should get stoned and show attack = 30', () => {
  const magician = new Magician('Blake');
  magician.stoned = true;
  magician.attackLevel = 3;
  const result = magician.attackLevel;
  expect(result).toBe(30);
});

test('should get stoned and show attack = 0', () => {
  const magician = new Magician('Blake');
  magician.stoned = true;
  magician.attackLevel = 9;
  const result = magician.attackLevel;
  expect(result).toBe(0);
});
