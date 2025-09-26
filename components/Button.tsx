import { Pressable, Text, View } from "react-native";

export default function Button({
  title,
  onPressFn,
  btnStyle,
  textStyle,
  internalIcon,
}: {
  title: string;
  onPressFn: () => void;
  btnStyle?: object;
  textStyle?: object;
  internalIcon?: string;
}) {
  return (
    <View style={{ width: "80%" }}>
      <Pressable
        onPress={onPressFn}
        style={{
          padding: 10,
          borderRadius: 8,
          ...btnStyle,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            color: "#FFFFFF",
            ...textStyle,
          }}
        >
          {internalIcon} {title}
        </Text>
      </Pressable>
    </View>
  );
}
