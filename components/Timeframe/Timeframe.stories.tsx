import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { TimeFrame } from "./Timeframe";

const meta = {
  title: "TimeFrame",
  component: TimeFrame,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof TimeFrame>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    from: "2018-01-20T12:00Z",
    to: "2018-01-20T12:30Z",
  },
};
export const VeryLowTime: Story = {
  args: {
    from: "2018-01-20T08:00Z",
    to: "2018-01-20T08:30Z",
  },
};
export const LowTime: Story = {
  args: {
    from: "2018-01-20T10:00Z",
    to: "2018-01-20T10:30Z",
  },
};
export const ModerateTime: Story = {
  args: {
    from: "2018-01-20T12:00Z",
    to: "2018-01-20T12:30Z",
  },
};

export const HighTime: Story = {
  args: {
    from: "2018-01-20T13:30Z",
    to: "2018-01-20T14:00Z",
  },
};

export const VeryHighTime: Story = {
  args: {
    from: "2018-01-20T17:30Z",
    to: "2018-01-20T18:00Z",
  },
};
