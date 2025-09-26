import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet } from "react-native";

export default function ImageViewer({
  source,
}: {
  source: ImageSourcePropType;
}) {
  return <Image source={source} style={styles.imageStyle} />;
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
