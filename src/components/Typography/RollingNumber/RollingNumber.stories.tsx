import { Meta, StoryObj } from "@storybook/react";
import RollingNumber from "./RollingNumber";
import { useState } from "react";
import Button from "../../Button/Button";

const meta: Meta<typeof RollingNumber> = {
  title: "Typography/RollingNumber",
  component: RollingNumber,
  parameters: {
    docs: {
      description: {
        component: `
**RollingNumber 컴포넌트**

\`RollingNumber\` 컴포넌트는 숫자가 롤링되면서 변경되는 애니메이션 효과를 제공합니다. 
숫자 포맷팅, 애니메이션 지속 시간, 타이밍 함수 등 다양한 옵션을 지원합니다.
        `,
      },
    },
  },
  argTypes: {
    value: {
      control: "number",
      description: "표시할 숫자 값",
    },
    digits: {
      control: "number",
      description: "표시할 자릿수 (-1은 자동)",
    },
    padWithZero: {
      control: "boolean",
      description: "앞자리를 0으로 채울지 여부",
    },
    duration: {
      control: "number",
      description: "애니메이션 지속 시간 (초)",
    },
    useGrouping: {
      control: "boolean",
      description: "천 단위 구분자 사용 여부",
    },
  },
};

export default meta;

type Story = StoryObj<typeof RollingNumber>;

export const Default: Story = {
  name: "기본",
  args: {
    value: 1234,
    duration: 1,
  },
};

export const WithGrouping: Story = {
  name: "천 단위 구분자",
  args: {
    value: 1234567,
    useGrouping: true,
    duration: 1,
  },
};

export const PaddedNumber: Story = {
  name: "0으로 채우기",
  args: {
    value: 42,
    digits: 4,
    padWithZero: true,
    duration: 1,
  },
};

export const Controlled: Story = {
  name: "동적 변경",
  render: (args) => {
    const [value, setValue] = useState(0);

    return (
      <div>
        <Button
          onClick={() => setValue((prev) => prev + 599)}
          style={{ marginBottom: "1rem" }}
        >
          증가 (+599)
        </Button>
        <RollingNumber {...args} value={value} />
      </div>
    );
  },
};
