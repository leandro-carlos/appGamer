import React from "react";
import { Text, View, ViewProps } from "react-native";

import { styles } from "./styles";

interface Props extends ViewProps {
  tittle: string;
  subTittle: string;
}

export function Heading({ tittle, subTittle, ...rest }: Props) {
  return (
    <View {...rest} style={styles.containetText}>
      <Text style={styles.tittle}> {tittle} </Text>
      <Text style={styles.subTittle}> {subTittle} </Text>
    </View>
  );
}
