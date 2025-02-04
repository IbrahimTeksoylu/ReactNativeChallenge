import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { List } from "./List";

const meta = {
  title: "List",
  component: List,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof List>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    intensity: {
      forecast: 266,
      actual: 263,
      index: "default",
    },
  },
};
export const VeryLowIntensity: Story = {
  args: {
    intensity: {
      forecast: 45,
      actual: 70,
      index: "very-low",
    },
  },
};
export const LowIntensity: Story = {
  args: {
    intensity: {
      forecast: 80,
      actual: 90,
      index: "low",
    },
  },
};

export const Moderate: Story = {
  args: {
    intensity: {
      forecast: 120,
      actual: 122,
      index: "moderate",
    },
  },
};
export const HighIntensity: Story = {
  args: {
    intensity: {
      forecast: 200,
      actual: 195,
      index: "high",
    },
  },
};
export const VeryHighIntensity: Story = {
  args: {
    intensity: {
      forecast: 280,
      actual: 265,
      index: "very-high",
    },
  },
};
