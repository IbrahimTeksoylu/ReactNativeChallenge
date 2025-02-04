import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../styles/colors";

type ListProps = {
  intensity: {
    forecast: number;
    actual: number;
    index: string;
  };
};

export const List = ({ intensity }: ListProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Feather name="trending-up" size={30} color={colors.forecast} />
        <Text style={styles.text}>{intensity.forecast}</Text>
      </View>
      <View style={styles.item}>
        <Feather name="eye" size={30} color={colors.actual} />
        <Text style={styles.text}>{intensity.actual}</Text>
      </View>
      <View style={styles.item}>
        <Feather
          name="bar-chart-2"
          size={30}
          color={
            intensity.index === "very-low" ? colors.veryLow :
            intensity.index === "low" ? colors.low :
            intensity.index === "moderate" ? colors.moderate :
            intensity.index === "high" ? colors.high : colors.veryHigh
          }
        />
        <Text style={styles.text}>{intensity.index}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '30%',
  },
  text: {
    fontSize: 18,
    },
});
