import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";

const PlaceholderImage = require("@/assets/images/background-image.png");

import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";

export default function Index() {
  // persisteing the current selected image
  const [selectedImage, setSelectedImage] = React.useState<string | null>();
  const [isShownOptions, setIsShownOptions] = React.useState(false);
  const [isEmojiPickerVisible, setIsEmojiPickerVisible] = React.useState(false);
  const [pickedEmoji, setPickedEmoji] = useState<any>();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
      setSelectedImage(result?.assets[0].uri);
      setIsShownOptions(true);
    } else {
      alert("You did not select any image.");
    }
  };

  // removing the options
  // removing the selected emoji
  const onReset = () => {
    setIsShownOptions(false);
    setPickedEmoji(null);
  };

  // adding the sticker
  // showing the emoji picker
  const onAddSticker = () => {
    setIsEmojiPickerVisible(true);
  };

  // closing the emoji picker
  const onCloseEmojiPicker = () => {
    setIsEmojiPickerVisible(false);
  };

  const onDownload = async () => {
    // we are downloading the image and saving it
  };

  const setPickedEmojiFn = (emoji: any) => {
    setPickedEmoji(emoji);
    setIsEmojiPickerVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        {/* showing the selected emoji on the image.... */}
        <ImageViewer source={PlaceholderImage} selectedImage={selectedImage} />
        {pickedEmoji && (
          <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
        )}
      </View>
      {isShownOptions ? (
        // show options
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="download" label="download" onPress={onDownload} />
          </View>
        </View>
      ) : (
        <View style={{ alignItems: "center" }}>
          <Button
            title="choose a photo"
            onPressFn={() => pickImage()}
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
              setIsShownOptions(true);
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
        </View>
      )}

      <EmojiPicker
        isVisible={isEmojiPickerVisible}
        onClose={onCloseEmojiPicker}
      >
        <EmojiList
          onCloseModal={onCloseEmojiPicker}
          onSelect={setPickedEmojiFn}
        />
      </EmojiPicker>
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
  optionsContainer: {
    marginTop: 20,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
