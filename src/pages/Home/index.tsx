import React from "react";
import { View, SafeAreaView, Image, StatusBar, FlatList } from "react-native";
import Background from "../../Components/Background/Background";
import { GameCard } from "../../Components/GameCard";
import { Heading } from "../../Components/Heading";
import { GAMES } from "../../utils/games";

import { styles } from "./styles";

export default function Home() {
  return (
    <Background>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.imageLogo}
            source={require("../../assets/logo-nlw-esports.png")}
          />
        </View>

        <Heading
          tittle="Encontre seu duo"
          subTittle="Selecione o game que deseja jogar..."
        />

        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={GAMES}
          renderItem={({ item }) => <GameCard data={item} />}
        />
      </SafeAreaView>
    </Background>
  );
}
