const Employee = require('../lib/Employee');

test('Check creating an Employee', () => {
    const employee = new Employee('Engineer','Alex', 1, 'email@email.com');

    expect(employee.title).toBe('Engineer');
    expect(employee.name).toBe('Alex');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('email@email.com');
  });