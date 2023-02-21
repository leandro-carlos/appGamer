import React, { useState, useEffect } from "react";
import { Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { THEME } from "../../theme";
import Duoinfo from "../DuoInfo";

import { DuoPropsBack } from "../../pages/Game";

interface DataBy {
  data: DuoPropsBack;
  onConnect: () => void;
}

export default function DuoCard({ data, onConnect }: DataBy): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Duoinfo title={"Nome"} description={data[0]?.name} />
      <Duoinfo
        title={"Tempo de jogo"}
        description={`${data[0]?.yearsPlaying} anos`}
      />
      <Duoinfo
        title={"Disponibilidade"}
        description={`${data[0]?.weekDays?.length} dias \u2022 ${data[0]?.hourStart} - ${data[0]?.hourEnd}`}
      />
      <Duoinfo
        title={"Chamada de audio?"}
        color={"green"}
        description={data[0]?.useVoiceChannel ? "Sim" : "Não"}
      />
      <TouchableOpacity onPress={onConnect} style={styles.btnConnect}>
        <Text>Conectar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 180,
    borderRadius: 8,
    height: 292,
    padding: 20,
    marginRight: 16,
    backgroundColor: THEME.COLORS.SHAPE,
  },
  btnConnect: {
    backgroundColor: THEME.COLORS.PRIMARY,
    width: "100%",
    height: 36,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
