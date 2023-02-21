import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacity,
  View,
  Text,
  TouchableOpacityProps,
} from "react-native";
import { THEME } from "../../theme";

import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

export interface GameCardProps {
  id: string;
  titulo: string;
  _count: { ads: string };
  bannerUrl: string;
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps;
}

export function GameCard({ data, ...rest }: Props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity {...rest} style={styles.container}>
      <ImageBackground source={{ uri: data.bannerUrl }} style={styles.cover}>
        <LinearGradient style={styles.footer} colors={THEME.COLORS.FOOTER}>
          <Text style={styles.txtName}> {data.titulo} </Text>
          <Text style={styles.txtAds}>{data._count.ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
