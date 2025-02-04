import { render, screen } from "@testing-library/react-native";
import { composeStories } from "@storybook/react";

import * as stories from "./Card.stories";
const { Default } = composeStories(stories);

describe("Card", () => {
  it("renders correctly", () => {
    render(<Default />);
    expect(screen.getByTestId("CardContainer")).toBeTruthy();
    expect(screen.getByText(/12:00 - 12:30/)).toBeTruthy();
    expect(screen.getByText(/266/)).toBeTruthy();
    expect(screen.getByText(/263/)).toBeTruthy();
    expect(screen.getByText(/moderate/)).toBeTruthy();
  });
});
