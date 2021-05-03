const Manager = require('../lib/manager');

test('Check creating an Manager', () => {
    const manager = new Manager('Manager','Alex', 1, 'email@email.com','555555555');


    expect(manager.title).toBe('Manager');
    expect(manager.name).toBe('Alex');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('email@email.com');
    expect(manager.number).toBe('555555555');
  });