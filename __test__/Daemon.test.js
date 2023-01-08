import Daemon from '../src/Daemon';

test('should show attack = 24', () => {
  const daemon = new Daemon('Cole');
  daemon.stoned = 'no';
  daemon.attackLevel = 3;
  const result = daemon.attackLevel;
  expect(result).toBe(24);
});

test('should get stoned and show attack = 6', () => {
  const daemon = new Daemon('Cole');
  daemon.stoned = 'yes';
  daemon.attackLevel = 8;
  const result = daemon.attackLevel;
  expect(result).toBe(6);
});

test('should throw an error because of too short name', () => {
  expect(() => new Daemon('C')).toThrow(new Error('Неверное количество букв в имени!'));
});

test('should throw an error because of wrong type of character', () => {
  expect(() => new Daemon('Cole', 'Demon')).toThrow(new Error('Неверно выбран тип героя'));
});

test('should level up', () => {
  const daemon = new Daemon('Cole');
  daemon.levelUp();
  const expectedDaemon = {
    name: 'Cole',
    type: 'Daemon',
    attack: 36,
    defence: 48,
    health: 100,
    level: 2,
  };
  expect(daemon).toEqual(expectedDaemon);
});

test('should not level up', () => {
  const daemon = new Daemon('Cole');
  daemon.health = 0;
  expect(() => daemon.levelUp()).toThrow(new Error('Нельзя повысить левел умершего!'));
});

test('should make damage', () => {
  const daemon = new Daemon('Cole');
  daemon.damage(10);
  expect(daemon.health).toEqual(94);
});

test('should not make damage', () => {
  const daemon = new Daemon('Cole');
  daemon.health = -10;
  expect(() => daemon.damage(10)).toThrow(new Error('Уже ранен'));
});
