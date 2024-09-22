import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "Yoso UI Storybook",
    // brandUrl: "https://yoso.dev",
    // 타이틀 노출
    brandImage:
      "https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2Fc69ede6d-993f-48d5-82e1-e45028b1c670%2Flogo.webp?table=block&id=10981b43-34ec-80c3-909c-f1575d566455&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=1420&userId=&cache=v2",
  }),
});
