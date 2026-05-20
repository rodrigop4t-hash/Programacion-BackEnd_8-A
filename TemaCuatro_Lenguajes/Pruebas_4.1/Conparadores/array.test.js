const frutas = require('./array');

test('el array contiene Pera', () => {
    expect(frutas()).toContain('Pera');
})