const { A, B } = require('./functions.js');
const fileReader = require('../fileReader.js');

const input = fileReader('./day1/test.txt');

describe('Day 1 Tests', () => {
    test('Solution A', () => {
        expect(A(input)).toBe(7);
    });
    
    test('Solution B', () => {
        expect(B(input)).toBe(5);
    });
});