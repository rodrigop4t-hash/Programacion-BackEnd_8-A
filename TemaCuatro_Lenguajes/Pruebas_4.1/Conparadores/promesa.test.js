const promesa = require('./promesa');

test('la promesa debe resolverse', async () => {
    await expect(promesa.promesaCorrecta())
        .resolves.toBe('Promesa resuelta');
});

test('la promesa debe rechazarse', async () => {
    await expect(promesa.promesaIncorrecta())
        .rejects.toBe('Promesa rechazada');
});