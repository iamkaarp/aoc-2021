const { A, B } = require('./functions.js');
const fileReader = require('../fileReader.js');

const input = fileReader('./day2/test.txt');

describe('Day 2 Tests', () => {
    test('Solution A', () => {
        expect(A(input)).toBe(150);
    });

    test('Solution B', () => {
        expect(B(input)).toBe(900);
    });
});