import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { Card } from "./Card";

const meta = {
  title: "Card",
  component: Card,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, paddingHorizontal: 15, justifyContent: "center", alignItems: "center" }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    from: "2018-01-20T12:00Z",
    to: "2018-01-20T12:30Z",
    intensity: {
      forecast: 266,
      actual: 263,
      index: "moderate"
    }
  },
};

export const MultipleCards: Story = {
  args: {
    from: "2018-01-20T12:00Z",
    to: "2018-01-20T12:30Z",
    intensity: {
      forecast: 266,
      actual: 263,
      index: "default"
    }
  },
  render: () => {
    const data = [
      { from: "2018-01-20T08:00Z", to: "2018-01-20T08:30Z", intensity: { forecast: 45, actual: 70, index: "very-low" } },
      { from: "2018-01-20T10:00Z", to: "2018-01-20T10:30Z", intensity: { forecast: 80, actual: 90, index: "low" } },
      { from: "2018-01-20T12:00Z", to: "2018-01-20T12:30Z", intensity: { forecast: 120, actual: 122, index: "moderate" } },
      { from: "2018-01-20T13:30Z", to: "2018-01-20T14:00Z", intensity: { forecast: 200, actual: 195, index: "high" } },
      { from: "2018-01-20T17:30Z", to: "2018-01-20T18:00Z", intensity: { forecast: 280, actual: 265, index: "very-high" } },
    ];

    return (
      <View>
        {data.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </View>
    );
  },
};