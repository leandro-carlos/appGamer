import React from "react";
import { StyleSheet, ImageBackground } from "react-native";

export default function Background({ children }) {
  interface children {
    Props: React.ReactNode;
  }

  return (
    <ImageBackground
      style={styles.container}
      defaultSource={require("../../assets/background-galaxy.png")}
      source={require("../../assets/background-galaxy.png")}
    >
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
