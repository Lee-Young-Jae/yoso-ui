import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Button from "./Button";
import { CgShoppingCart, CgZoomIn } from "react-icons/cg";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    tags: ["autodocs"],
    docs: {
      description: {
        component:
          "`버튼` 컴포넌트의 기본 색상은 `theme`의 `defaultColor`를 수정하여 변경할 수 있습니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "color",
      table: {
        category: "Style",
      },
    },
    children: {
      control: "text",
      description: "버튼의 텍스트 혹은 `ReactNode`를 전달합니다.",
      table: {
        category: "Content",
      },
    },
    disabled: {
      control: "boolean",
      table: {
        category: "State",
      },
    },
    fullWidth: {
      control: "boolean",
      table: {
        category: "Style",
      },
    },
    variant: {
      control: "radio",
      table: {
        category: "Style",
      },
    },
    size: {
      control: "radio",
      table: {
        category: "Style",
      },
    },
    rightIcon: {
      control: "select",
      options: ["null", "shoppingCart", "zoomIn"],
      mapping: {
        null: null,
        shoppingCart: <CgShoppingCart />,
        zoomIn: <CgZoomIn />,
      },
      table: {
        category: "Content",
      },
    },
    leftIcon: {
      control: "select",
      options: ["null", "shoppingCart", "zoomIn"],
      mapping: {
        null: null,
        shoppingCart: <CgShoppingCart />,
        zoomIn: <CgZoomIn />,
      },
      table: {
        category: "Content",
      },
    },
    outline: {
      table: {
        category: "Style",
      },
    },
    radius: {
      control: "radio",
      table: {
        category: "Style",
      },
    },
    onClick: {
      action: "clicked",
      table: {
        category: "Events",
      },
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "Primary",
  args: {
    children: "Button",
    variant: "default",
    disabled: false,
    fullWidth: false,
    outline: false,
    size: "medium",
    radius: "medium",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    size: "large",
  },
};

export const LeftIcon: Story = {
  args: {
    children: "Left Icon Button",
    leftIcon: <CgShoppingCart />,
    outline: true,
    variant: "danger",
  },
};
