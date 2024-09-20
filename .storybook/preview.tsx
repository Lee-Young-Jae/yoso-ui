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
};

export default preview;
