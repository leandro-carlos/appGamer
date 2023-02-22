import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  ModalProps,
  TouchableOpacity,
} from "react-native";

import { THEME } from "../../theme";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import { Heading } from "../Heading";

interface Props extends ModalProps {
  discord?: string;
  onClose: () => void;
}

export default function DuoMatch({ discord, onClose, ...rest }: Props) {
  return (
    <Modal style={styles.modalContainerOut} {...rest}>
      <View style={styles.container}>
        <View style={styles.modalBack}>
          <TouchableOpacity onPress={onClose} style={styles.closeIcon}>
            <MaterialIcons
              name="close"
              color={THEME.COLORS.CAPTION_500}
              size={20}
            />
          </TouchableOpacity>
          <View style={styles.body}>
            <Feather
              name="check-circle"
              color={THEME.COLORS.SUCCESS}
              size={48}
            />

            <Heading
              tittle="Let's Play!"
              subTittle="Agora é só começar a jogar!"
            />

            <Text style={styles.addTextDiscord}>Adicione no Discord</Text>

            <TouchableOpacity style={styles.addDiscordBtn}>
              <Text style={styles.label}> {discord} </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainerOut: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBack: {
    backgroundColor: THEME.COLORS.SHAPE,
    width: 311,
    height: 322,
    borderRadius: 8,
    alignItems: "center",
  },
  closeIcon: {
    alignSelf: "flex-end",
    top: 22,
    right: 22,
  },
  body: {
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "white",
  },
  addTextDiscord: {
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.TEXT,
  },
  addDiscordBtn: {
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    width: 200,
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
    marginTop: 20,
  },
});
