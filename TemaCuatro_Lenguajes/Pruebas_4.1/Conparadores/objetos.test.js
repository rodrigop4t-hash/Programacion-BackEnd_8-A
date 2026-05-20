const crearObjeto = require('./objetos');

test('los objetos deben ser iguales', () => {
    expect(crearObjeto()).toEqual({
        nombre: 'Rodrigo',
        edad: 20
    });
});