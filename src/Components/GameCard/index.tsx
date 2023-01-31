import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { THEME } from "../../theme";

import { styles } from "./styles";

export interface GameCardProps {
  id: string;
  name: string;
  ads: string;
  cover: ImageSourcePropType;
}

interface Props {
  data: GameCardProps;
}

export function GameCard({ data }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground source={data.cover} style={styles.cover}>
        <LinearGradient style={styles.footer} colors={THEME.COLORS.FOOTER}>
          <Text style={styles.txtName}> {data.name} </Text>
          <Text style={styles.txtAds}>{data.ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
