import React from "react";
import { Preview } from "@storybook/react";

import YosoThemeProvider from "../src/providers/YosoThemeProvider";

const preview: Preview = {
  decorators: [
    (Story) => (
      <YosoThemeProvider>
        <Story />
      </YosoThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
};

export default preview;
