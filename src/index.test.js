import { jest } from '@jest/globals';

import add from './index.js';

test('does not crash without params', () => {
    expect(add(2, 2)).toEqual(4);
});
