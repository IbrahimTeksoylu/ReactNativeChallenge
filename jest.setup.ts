import { setProjectAnnotations } from "@storybook/react";
import * as previewAnnotations from "./.storybook/preview";
import "@testing-library/react-native/extend-expect";

jest.useFakeTimers();

setProjectAnnotations([previewAnnotations]);

jest.mock("@expo/vector-icons", () => ({
    Feather: "FeatherMock",
  }));
  