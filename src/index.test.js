import { add, subtract, multiply } from './index.js';

test('adds', () => {
    expect(add(2, 2)).toEqual(4);
});

test('subtracts', () => {
    expect(subtract(2, 2)).toEqual(0);
});

test('multiplies', () => {
    expect(multiply(2, 2)).toEqual(4);
});
