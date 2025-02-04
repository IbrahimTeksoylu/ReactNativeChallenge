import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DateTime } from 'luxon';

type TimeFrameProps = {
  from: string;
  to: string;
};

export const TimeFrame = ({ from, to }: TimeFrameProps) => {
  const fromDate = DateTime.fromISO(from).toFormat('HH:mm');
  const toDate = DateTime.fromISO(to).toFormat('HH:mm');
  
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{`${fromDate} - ${toDate}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  date: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
