import { View, SafeAreaView, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function About() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.container}>
        <Text style={style.text}>About Screen</Text>
        <Link href="/" style={style.link}>
          Go to Home
        </Link>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
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
  }
});
