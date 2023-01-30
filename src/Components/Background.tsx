import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function Background({ children }) {
  interface children {
    Props: React.ReactNode;
  }

  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/background-galaxy.png")}
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
