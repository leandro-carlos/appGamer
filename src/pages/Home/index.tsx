import React, { useEffect, useState } from "react";
import { View, SafeAreaView, Image, StatusBar, FlatList } from "react-native";
import Background from "../../Components/Background/Background";
import { GameCard, GameCardProps } from "../../Components/GameCard";
import { Heading } from "../../Components/Heading";
import api from "../../provider/api";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

export default function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    api
      .get("/games")
      .then((games) => {
        setGames(games.data.resultado);
      })
      .catch((err) => console.error(err));
  }, []);

  function handleGame({ id, titulo, bannerUrl }: GameCardProps) {
    navigation.navigate("Game", { id, titulo, bannerUrl });
  }

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
          data={games}
          renderItem={({ item }) => (
            <GameCard onPress={() => handleGame(item)} data={item} />
          )}
        />
      </SafeAreaView>
    </Background>
  );
}
