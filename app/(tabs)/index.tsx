import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer source={PlaceholderImage} />
      </View>
      <Button
        title="choose a photo"
        onPressFn={() => {
          console.log("button pressed");
        }}
        btnStyle={{
          backgroundColor: "#1A1A1A",
          marginTop: 20,
          borderWidth: 1,
          borderColor: "gray",
        }}
        textStyle={{ color: "white", fontWeight: "bold" }}
      />

      <Button
        title="use this photo"
        onPressFn={() => {
          console.log("button pressed");
        }}
        btnStyle={{
          backgroundColor: "#1A1A1A",
          marginTop: 20,
          marginBottom: 20,
          borderWidth: 1,
          borderColor: "gray",
        }}
        textStyle={{ color: "white", fontWeight: "bold" }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "#FFFFFF",
  },
  link: {
    marginTop: 20,
    fontSize: 16,
    color: "#1E90FF",
  },
});
