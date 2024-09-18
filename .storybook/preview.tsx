import React from "react";
import YosoThemeProvider from "../src/providers/YosoThemeProvider";
import { Preview } from "@storybook/react";

const preview: Preview = {
  decorators: [
    (Story) => (
      <YosoThemeProvider>
        <Story />
      </YosoThemeProvider>
    ),
  ],
};

export default preview;
