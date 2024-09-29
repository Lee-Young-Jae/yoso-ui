import { Meta, StoryObj } from "@storybook/react";
import Underline from "./Underline";

const meta = {
  title: "Components/Typography/Underline",
  component: Underline,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
\`Underline\` 컴포넌트는 텍스트를 강조할 때 사용합니다.
        `,
      },
    },
  },
} as Meta<typeof Underline>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Underline",
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
      description: "밑줄의 색상을 지정합니다.",
    },
  },
};

export default meta;
