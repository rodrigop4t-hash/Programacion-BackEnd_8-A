test('comparaciones numéricas', () => {
    const numero = 10;

    expect(numero).toBeGreaterThan(5);

    expect(numero).toBeLessThan(20);

    expect(numero).toBeGreaterThanOrEqual(10);
});