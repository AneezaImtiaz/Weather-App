import { Dimensions, PixelRatio } from 'react-native';
const { width } = Dimensions.get('window');

class Responsive {
  // Calculate responsive font size based on screen width and pixel ratio
  static font = (fontSize = 0) => {
    const scaleFactor = width / 375; // You can adjust this based on your design
    const adjustedFontSize = fontSize * scaleFactor;
    return PixelRatio.roundToNearestPixel(adjustedFontSize);
  };
}

export default Responsive;
