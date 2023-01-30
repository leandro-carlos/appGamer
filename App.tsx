import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import Background from "./src/Components/Background";
import { THEME } from "./src/theme";

import { GAMES } from "./src/utils/games";

export default function App() {
  return (
    <Background>
      <StatusBar translucent backgroundColor="transparent" style="inverted" />
      <View style={styles.container}>
        <Image
          style={styles.imageLogo}
          source={require("./src/assets/logo-nlw-esports.png")}
        />
        <View style={styles.body}>
          <Text style={styles.txtFindYourDuo}>Encontre seu duo</Text>
          <Text style={styles.txtSelectYourGame}>
            Selecione o game que deseja jogar...
          </Text>
          <FlatList
            horizontal
            data={GAMES}
            renderItem={({ item }) => (
              <Image
                resizeMode="contain"
                style={styles.imageFlatList}
                source={item.cover}
              />
            )}
          />
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 120,
  },
  imageLogo: {},
  txtFindYourDuo: {
    color: "white",
    fontSize: 24,
    // fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
  body: {
    paddingTop: 50,
    paddingHorizontal: 25,
  },
  txtSelectYourGame: {
    color: THEME.COLORS.CAPTION_400,
    fontSize: 16,
  },
  imageFlatList: {
    width: 240,
    height: 320,
    borderRadius: 8,
    // paddingHorizontal: 15,
  },
});
