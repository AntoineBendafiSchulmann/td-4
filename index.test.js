const getRandomNumber = require('./index');

test('getRandomNumber returns a number between 0 and 100', () => {
    const number = getRandomNumber();
    expect(number).toBeGreaterThanOrEqual(0);
    expect(number).toBeLessThanOrEqual(100);
});

