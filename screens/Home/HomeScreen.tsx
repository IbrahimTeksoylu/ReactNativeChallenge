import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Card } from "../../components/Card/Card";

export const HomeScreen = () => {
  
  const data = [
    { from: "2018-01-20T08:00Z", to: "2018-01-20T08:30Z", intensity: { forecast: 45, actual: 70, index: "very-low" } },
    { from: "2018-01-20T10:00Z", to: "2018-01-20T10:30Z", intensity: { forecast: 80, actual: 90, index: "low" } },
    { from: "2018-01-20T12:00Z", to: "2018-01-20T12:30Z", intensity: { forecast: 120, actual: 122, index: "moderate" } },
    { from: "2018-01-20T13:30Z", to: "2018-01-20T14:00Z", intensity: { forecast: 200, actual: 195, index: "high" } },
    { from: "2018-01-20T17:30Z", to: "2018-01-20T18:00Z", intensity: { forecast: 280, actual: 265, index: "very-high" } },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data.map((d, index) => (
        <Card key={index} from={d.from} to={d.to} intensity={d.intensity} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
});
