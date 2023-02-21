import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import { GameCardProps } from "../../Components/GameCard";
import Background from "../../Components/Background/Background";
import { GameParams } from "../../@types/navigation";

import Entypo from "react-native-vector-icons/Entypo";
import { Heading } from "../../Components/Heading";
import DuoCard from "../../Components/DuoCard";
import api from "../../provider/api";
import { THEME } from "../../theme";

export interface DuoPropsBack {
  id: string;
  name: string;
  hourStart: number;
  hourEnd: number;
  weekDays: string[];
  yearsPlaying: number;
  useVoiceChannel: boolean;
}

export default function Game() {
  const route = useRoute();
  const navigation = useNavigation();
  const [duo, setDuos] = useState<DuoPropsBack[]>([]);

  const game = route.params as GameParams;

  useEffect(() => {
    api
      .get(`/games/${game.id}/ads`)
      .then((res) => {
        setDuos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleBack() {
    navigation.goBack();
  }

  return (
    <Background>
      <SafeAreaView style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Entypo color={"white"} size={20} name="chevron-thin-left" />
        </TouchableOpacity>
        <Image
          style={styles.image}
          source={require("../../assets/logo-nlw-esports.png")}
        />
        <View style={styles.right} />
      </SafeAreaView>

      <Image
        resizeMode="cover"
        style={styles.imageParams}
        source={{ uri: game.bannerUrl }}
      />

      <Heading tittle={game.titulo} subTittle={"Encontre seu Duo"} />

      <FlatList
        data={duo}
        horizontal
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>
            Não há anuncios publicados pra esse jogo ainda!
          </Text>
        )}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DuoCard onConnect={() => {}} data={item} />}
        contentContainerStyle={
          duo.length > 0 ? styles.containerFlat : styles.containerContentEmpty
        }
      />
    </Background>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 32,
    marginTop: 50,
    justifyContent: "space-between",
  },
  image: {
    width: 72,
    height: 40,
  },
  right: {
    width: 20,
    height: 20,
  },
  imageParams: {
    width: 311,
    height: 160,
    borderRadius: 8,
    marginTop: 32,
  },
  containerFlat: {
    paddingLeft: 32,
    paddingRight: 64,
  },
  containerContentEmpty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyListText: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.SM,
  },
});
