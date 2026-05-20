const saludo = require('./cadena');

test('la cadena contiene Rodrigo', () => {
    expect(saludo()).toMatch(/Rodrigo/);
});