import { Link } from "expo-router";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.text}>
          Hello, Expo + TypeScript + React Native!
        </Text>
        <Link href="/about" style={styles.link}>
          Go to About
        </Link>
        {/* @ts-ignore */}
        <Link href="/radnom-area" style={styles.link}>
          Go to random url
        </Link>
      </View>
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
