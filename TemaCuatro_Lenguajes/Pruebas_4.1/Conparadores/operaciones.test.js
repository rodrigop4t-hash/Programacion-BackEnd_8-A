const suma = require('./operaciones');

test('10 + 10 debe ser igual a 20', () => {
    expect(suma()).toBe(20);
});