import { Meta, StoryObj } from "@storybook/react";
import Highlight from "./Hightlight";

const meta = {
  title: "Components/Typography/Highlight",
  component: Highlight,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
\`Highlight\` 컴포넌트는 텍스트를 강조할 때 사용합니다.
        `,
      },
    },
  },
} as Meta<typeof Highlight>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Highlight",
  },
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    color: {
      control: {
        type: "color",
      },
      table: {
        defaultValue: {
          summary: "theme.defaultColor",
          detail: "string",
        },
      },
      description: "텍스트의 색상을 지정합니다.",
    },
    offsetY: {
      control: {
        type: "number",
      },
      description: "텍스트의 상단 여백을 지정합니다.",
    },
  },
};

export default meta;
