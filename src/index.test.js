import { add, subtract } from './index.js';

test('adds', () => {
    expect(add(2, 2)).toEqual(4);
});

test('subtracts', () => {
    expect(subtract(2, 2)).toEqual(0);
});
