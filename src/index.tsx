import { NativeModules } from 'react-native';

type SwipeableType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Swipeable } = NativeModules;

export default Swipeable as SwipeableType;
