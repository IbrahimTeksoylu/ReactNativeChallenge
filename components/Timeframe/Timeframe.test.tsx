import { render, screen } from "@testing-library/react-native";
import { composeStories } from "@storybook/react";
import * as stories from "./Timeframe.stories";

const {  Default, VeryLowTime, LowTime, ModerateTime, HighTime, VeryHighTime } = composeStories(stories);

describe("TimeFrame", () => {
  it("Default - renders correctly", () => {
    render(<Default />);
    expect(screen.getByText("12:00 - 12:30")).toBeTruthy();
  });

  it("Very Low Time - renders correctly", () => {
    render(<VeryLowTime />);
    expect(screen.getByText("08:00 - 08:30")).toBeTruthy();
  });
  it("Low Time - renders correctly", () => {
    render(<LowTime />);
    expect(screen.getByText("10:00 - 10:30")).toBeTruthy();
  });
  it("Moderate - renders correctly", () => {
    render(<ModerateTime />);
    expect(screen.getByText("12:00 - 12:30")).toBeTruthy();
  });
  it("High Time - renders correctly", () => {
    render(<HighTime />);
    expect(screen.getByText("13:30 - 14:00")).toBeTruthy();
  });
  it("Very High Time - renders correctly", () => {
    render(<VeryHighTime />);
    expect(screen.getByText("17:30 - 18:00")).toBeTruthy();
  });
});
