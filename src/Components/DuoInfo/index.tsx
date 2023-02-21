import React, { useState, useEffect } from "react";
import { Text, StyleSheet, SafeAreaView, ColorValue } from "react-native";
import { THEME } from "../../theme";

interface Props {
  title: string;
  description: string;
  color?: ColorValue;
}

export default function Duoinfo({ title, description, color }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}> {title} </Text>
      <Text
        style={[
          styles.value,
          { color: color ? color : THEME.COLORS.CAPTION_300 },
        ]}
      >
        {description}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16,
  },
  label: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.SM,
    // fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
  value: {
    fontSize: THEME.FONT_SIZE.SM,
    // fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
});
