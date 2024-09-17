import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "Yoso UI Storybook",
    brandUrl: "https://yoso.dev",
    brandImage: "https://yoso.dev/logo.svg",
  }),
});
