const Intern = require('../lib/intern');

test('Check creating an Intern', () => {
    const intern = new Intern('intern','Alex', 1, 'email@email.com','school');


    expect(intern.title).toBe('intern');
    expect(intern.name).toBe('Alex');
    expect(intern.id).toBe(1);
    expect(intern.email).toBe('email@email.com');
    expect(intern.school).toBe('school');
  });