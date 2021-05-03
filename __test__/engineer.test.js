const Engineer = require('../lib/engineer');

test('Check creating an Engineer', () => {
    const engineer = new Engineer('Engineer','Alex', 1, 'email@email.com','github');
    expect(engineer.title).toBe('Engineer');
    expect(engineer.name).toBe('Alex');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('email@email.com');
    expect(engineer.github).toBe('github');
  });