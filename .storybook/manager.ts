import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "Yoso UI Storybook",
    brandUrl: "https://www.npmjs.com/package/yoso-ui",
    brandImage:
      "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2F18555ad2-d3c3-48ab-a8a9-849c059bc831%2FYoso-icon.png?table=block&id=11d81b43-34ec-806f-85e3-e6abc3ae9dab&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=1420&userId=&cache=v2",
    barHoverColor: "#22cb87",
    barSelectedColor: "#22cb87",
    colorPrimary: "#22cb87",
    colorSecondary: "#22cb87",
  }),
});
