import { render, screen } from "@testing-library/react-native";
import { composeStories } from "@storybook/react";
import * as stories from "./List.stories";

const { Default, VeryLowIntensity, LowIntensity, Moderate, HighIntensity, VeryHighIntensity } = composeStories(stories);

describe("List", () => {
  it("Default - renders correctly", () => {
    render(<Default />);
    expect(screen.getByText(/266/)).toBeTruthy(); 
    expect(screen.getByText(/263/)).toBeTruthy(); 
    expect(screen.getByText(/default/)).toBeTruthy();
  });

  it("Very Low - renders correctly", () => {
    render(<VeryLowIntensity />);
    expect(screen.getByText(/45/)).toBeTruthy(); 
    expect(screen.getByText(/70/)).toBeTruthy(); 
    expect(screen.getByText(/very-low/)).toBeTruthy();
  });

  it("Low - renders correctly", () => {
    render(<LowIntensity />);
    expect(screen.getByText(/80/)).toBeTruthy(); 
    expect(screen.getByText(/90/)).toBeTruthy(); 
    expect(screen.getByText(/low/)).toBeTruthy();
  });
  it("Moderate - renders correctly", () => {
    render(<Moderate />);
    expect(screen.getByText(/120/)).toBeTruthy(); 
    expect(screen.getByText(/122/)).toBeTruthy(); 
    expect(screen.getByText(/moderate/)).toBeTruthy();
  });

  it("High - renders correctly", () => {
    render(<HighIntensity />);
    expect(screen.getByText(/200/)).toBeTruthy(); 
    expect(screen.getByText(/195/)).toBeTruthy(); 
    expect(screen.getByText(/high/)).toBeTruthy();
  });

  it("Very High - renders correctly", () => {
    render(<VeryHighIntensity />);
    expect(screen.getByText(/280/)).toBeTruthy(); 
    expect(screen.getByText(/265/)).toBeTruthy(); 
    expect(screen.getByText(/very-high/)).toBeTruthy();
  });
});
