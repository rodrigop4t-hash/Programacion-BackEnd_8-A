const valores = require('./valores');

test('debe ser null', () => {
    expect(valores.valorNulo()).toBeNull();
});

test('debe ser undefined', () => {
    expect(valores.valorUndefined()).toBeUndefined();
});

test('debe estar definido', () => {
    expect(valores.valorDefinido()).toBeDefined();
});