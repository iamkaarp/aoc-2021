const { A, B } = require('./functions.js');
const fileReader = require('../fileReader.js');

const input = fileReader('./day#/test.txt');

describe('Day # Tests', () => {
    test('Solution A', () => {
        expect(A(input)).toBe(0);
    });

    test('Solution B', () => {
        expect(B(input)).toBe(0);
    });
});