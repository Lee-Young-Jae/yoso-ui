import type { StoryObj } from "@storybook/react";

import Tooltip, { TooltipProps } from "./Tooltip";
import Button from "../Button/Button";
import Input from "../Input/Input";

const meta = {
  component: Tooltip,
  title: "Components/Tooltip",
};

export default meta;

type Story = StoryObj<TooltipProps>;

export const Default: Story = {
  name: "기본 툴팁",
  parameters: {},
  args: {
    content: "tooltip 내용입니다.",
    placement: "top",
    trigger: "hover",
    delay: 0,
    disabled: false,
  },
  argTypes: {
    content: {
      control: {
        type: "text",
      },
    },
    trigger: {
      description: "어떤 액션에 툴팁을 표시할지 지정합니다.",
      options: ["hover", "click", "focus"],
      table: {
        type: {
          summary: `"hover" | "click" | "focus"`,
        },
      },
      control: {
        type: "radio",
        labels: {
          hover: "hover",
          click: "click",
          focus: "focus",
        },
      },
    },
    placement: {
      options: ["top", "bottom", "left", "right"],
      defaultValue: "top",
      description: "툴팁이 표시될 위치를 지정합니다.",
      table: {
        type: {
          summary: `"top" | "bottom" | "left" | "right"`,
          // detail: "",
        },
      },
      control: {
        type: "radio",
        labels: {
          top: "top",
          bottom: "bottom",
          left: "left",
          right: "right",
        },
      },
    },
    delay: {
      table: {
        type: {
          summary: "number",
        },
      },
      description: "툴팁이 표시되기 전 지연 시간을 지정합니다.",
      control: {
        type: "range",
        min: 0,
        step: 100,
        max: 5000,
      },
    },
    disabled: {
      table: {
        type: {
          summary: "boolean",
        },
      },
      description: "툴팁을 비활성화합니다.",
      control: {
        type: "boolean",
      },
    },
  },
  render: (props) => (
    <Tooltip {...props}>
      <Button
        onClick={() => {
          console.log({ ...props });
        }}
      >
        툴팁 트리거
      </Button>
    </Tooltip>
  ),
};

export const FocusInput: Story = {
  name: "포커스 툴팁",
  args: {
    content: "포커스 툴팁",
    placement: "bottom",
    trigger: "focus",
  },
  render: (props) => (
    <Tooltip {...props}>
      <Input placeholder="포커스 툴팁" />
    </Tooltip>
  ),
};

export const CustomStyle: Story = {
  name: "커스텀 스타일",
  args: {
    content: "나만의 스타일",
    placement: "right",
    trigger: "hover",
  },
  render: (props) => (
    <Tooltip
      {...props}
      contentStyle={{ backgroundColor: "#000", color: "#fff" }}
      content={
        <span role="img" aria-label="heart">
          ⭐️
        </span>
      }
    >
      <Button>커스텀 스타일</Button>
    </Tooltip>
  ),
};
