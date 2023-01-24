import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function FeedScreen() {
  return (
    <View style={styles.container}>
      <Text>Feed screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
