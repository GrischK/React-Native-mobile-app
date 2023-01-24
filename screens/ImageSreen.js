import React, { useCallback, useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import * as FileSystem from "expo-file-system";
import { useFocusEffect } from "@react-navigation/native";

export default function ImageScreen() {
  const [imagesURI, setImagesURI] = useState([]);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const images = await FileSystem.readDirectoryAsync(
          FileSystem.cacheDirectory + "ImageManipulator"
        );
        setImagesURI(images);
      })();
    }, [])
  );

  return imagesURI.length > 0 ? (
    <Image
      style={{
        flex: 1,
        resizeMode: "cover",
        height: 500,
      }}
      source={{
        uri: FileSystem.cacheDirectory + "ImageManipulator/" + imagesURI[0],
      }}
    />
  ) : null;
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
