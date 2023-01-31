import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

interface Props {
  tittle: string;
  subTittle: string;
}

export function Heading({ tittle, subTittle }: Props) {
  return (
    <View style={styles.containetText}>
      <Text style={styles.tittle}> {tittle} </Text>
      <Text style={styles.subTittle}> {subTittle} </Text>
    </View>
  );
}
