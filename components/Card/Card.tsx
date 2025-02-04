import React from "react";
import { StyleSheet, View } from "react-native";
import { TimeFrame } from "../Timeframe/Timeframe";
import { List } from "../List/List";
import { colors } from "../../styles/colors";

type CardProps = {
  from: string;
  to: string;
  intensity: {
    forecast: number;
    actual: number;
    index: string;
  };
};

export const Card = ({ from, to, intensity }: CardProps) => {
  return (
    <View style={styles.card} testID="CardContainer">
      <TimeFrame from={from} to={to} />
      <List intensity={intensity} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardBackground,
    padding: 10,
    marginVertical: 8,
    alignItems: "center",
    textAlign: "center",
    borderRadius: 10,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
});
