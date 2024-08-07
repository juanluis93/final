// __tests__/app.test.js
const saludo = require('../app');

test('debería devolver "Hola Mundo"', () => {
    expect(saludo()).toBe("Hola Mundo");
});