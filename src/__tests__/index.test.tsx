jest.mock('react-native-swipeable', () => {
  return {
    multiply: (a: number, b: number) => Promise.resolve(a * b),
  };
});

import Swipeable from 'react-native-swipeable';

describe(' Module functions', () => {
  it('Will multiply', () => {
    Swipeable.multiply(2, 3).then((result) => {
      expect(result).toBe(6);
    });
  });
});
