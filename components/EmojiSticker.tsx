import { ImageSourcePropType, View } from "react-native";
// import { Image } from "expo-image";

import Animated from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type Props = {
  imageSize: number;
  stickerSource: ImageSourcePropType;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  // Inside the EmojiSticker component, create a reference called
  // scaleImage using the useSharedValue() hook. It will take the
  // value of imageSize as its initial value.
  const scaleImage = useSharedValue(imageSize);

  // It is used to create shared values, which are special mutable
  // values that can be safely accessed and updated on both the
  // JavaScript thread and the UI thread.
  // A shared value is like a useState or useRef variable, but
  // optimized for animations.
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  // this will allow us to drag the image around the screen
  // by updating the translateX and translateY shared values
  // based on the gesture's change in position
  const drag = Gesture.Pan().onChange((event) => {
    translateX.value += event.changeX;
    translateY.value += event.changeY;
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  // on double tap we will increase the size of the image
  // if the size is already increased then we will reset it to
  // its original size
  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      if (scaleImage.value !== imageSize * 2) {
        scaleImage.value = scaleImage.value * 2;
      } else {
        scaleImage.value = Math.round(scaleImage.value / 2);
      }
    });

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

  // detecting two gestures (drag and double tap)
  // we need to wrap the image in two GestureDetectors
  // one for each gesture
  return (
    <GestureDetector gesture={drag}>
      <Animated.View style={[containerStyle, { top: -350 }]}>
        <GestureDetector gesture={doubleTap}>
          <Animated.Image
            source={stickerSource}
            resizeMode="contain"
            style={[{ width: imageSize, height: imageSize }, imageStyle]}
          />
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  );
}
