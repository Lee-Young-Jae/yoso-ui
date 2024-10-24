import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Radio from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: `
**Radio 컴포넌트**

\`Radio\` 컴포넌트는 여러 옵션 중 하나를 선택할 수 있는 라디오 버튼을 제공합니다. 단일로 사용하거나 \`Radio.Group\` 내에서 그룹으로 관리할 수 있으며, 컨트롤드 및 언컨트롤드 모드를 모두 지원합니다.

### 주요 기능

- **단일 및 그룹 사용 지원**: \`Radio\`를 개별적으로 사용하거나 \`Radio.Group\`을 통해 그룹화할 수 있습니다.
- **컨트롤드 및 언컨트롤드 모드 지원**: \`value\`와 \`defaultValue\`를 통해 상태 관리 방식을 선택할 수 있습니다.
- **접근성 향상**: WAI-ARIA 가이드라인을 준수하여 제작되었으며, 스크린 리더와 키보드 내비게이션을 지원합니다.
- **스타일 커스터마이징 가능**: \`className\`과 \`style\`을 사용하여 커스텀 스타일을 적용할 수 있습니다.
        `,
      },
    },
  },
  argTypes: {
    value: {
      control: "text",
      description: "라디오 버튼의 값",
      table: {
        category: "Input",
      },
    },
    checked: {
      control: "boolean",
      description: "선택 상태 (컨트롤드 모드)",
      table: {
        category: "Input",
      },
    },
    defaultChecked: {
      control: "boolean",
      description: "초기 선택 상태 (언컨트롤드 모드)",
      table: {
        category: "Input",
      },
    },
    disabled: {
      control: "boolean",
      description: "비활성화 여부",
      table: {
        category: "State",
      },
    },
    onChange: {
      action: "changed",
      description: "상태가 변경될 때 호출되는 콜백 함수",
      table: {
        category: "Events",
      },
    },
    color: {
      control: "color",
      description: "라디오 버튼의 커스텀 색상",
      table: {
        category: "Style",
      },
    },
    children: {
      control: "text",
      description: "라벨 내용",
      table: {
        category: "Content",
      },
    },
  },
  args: {
    disabled: false,
    children: "라디오 라벨",
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  name: "기본 라디오",
  render: (args) => <Radio {...args} />,
  parameters: {
    docs: {
      description: {
        story: `
**기본 라디오**

\`Radio\` 컴포넌트를 사용하여 기본 라디오 버튼을 렌더링합니다.

\`\`\`tsx
<Radio value="option1">옵션 1</Radio>
\`\`\`
        `,
      },
    },
  },
};

export const RadioGroupExample: Story = {
  name: "라디오 그룹",
  render: () => {
    const [value, setValue] = useState("option1");

    return (
      <Radio.Group value={value} onChange={(e) => setValue(e.target.value)}>
        <Radio value="option1">옵션 1</Radio>
        <Radio value="option2">옵션 2</Radio>
        <Radio value="option3">옵션 3</Radio>
      </Radio.Group>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
**라디오 그룹**

\`Radio.Group\`을 사용하여 여러 개의 라디오 버튼을 그룹화할 수 있습니다.

\`\`\`tsx
const [value, setValue] = useState("option1");

<Radio.Group value={value} onChange={(e) => setValue(e.target.value)}>
  <Radio value="option1">옵션 1</Radio>
  <Radio value="option2">옵션 2</Radio>
  <Radio value="option3">옵션 3</Radio>
</Radio.Group>
\`\`\`
        `,
      },
    },
  },
};

export const UncontrolledRadioGroup: Story = {
  name: "언컨트롤드 라디오 그룹",
  render: () => (
    <Radio.Group defaultValue="option2">
      <Radio value="option1">옵션 1</Radio>
      <Radio value="option2">옵션 2</Radio>
      <Radio value="option3">옵션 3</Radio>
    </Radio.Group>
  ),
  parameters: {
    docs: {
      description: {
        story: `
**언컨트롤드 라디오 그룹**

\`defaultValue\`를 사용하여 언컨트롤드 모드에서 초기 선택 값을 설정할 수 있습니다.

\`\`\`tsx
<Radio.Group defaultValue="option2">
  <Radio value="option1">옵션 1</Radio>
  <Radio value="option2">옵션 2</Radio>
  <Radio value="option3">옵션 3</Radio>
</Radio.Group>
\`\`\`
        `,
      },
    },
  },
};

export const RadioGroupWithOptions: Story = {
  name: "옵션 배열로 라디오 그룹 생성",
  render: () => {
    const options = [
      { label: "사과", value: "apple" },
      { label: "배", value: "pear" },
      { label: "오렌지", value: "orange", disabled: true },
    ];

    const [value, setValue] = useState("apple");

    return (
      <Radio.Group
        options={options}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
**옵션 배열로 라디오 그룹 생성**

\`options\` 프롭을 사용하여 배열로 라디오 버튼들을 생성할 수 있습니다.

\`\`\`tsx
const options = [
  { label: "사과", value: "apple" },
  { label: "배", value: "pear" },
  { label: "오렌지", value: "orange", disabled: true },
];

const [value, setValue] = useState("apple");

<Radio.Group
  options={options}
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
\`\`\`
        `,
      },
    },
  },
};

export const CustomStyledRadio: Story = {
  name: "커스텀 스타일 라디오",
  render: () => (
    <Radio value="custom" color="#FF5722">
      커스텀 컬러 라디오
    </Radio>
  ),
  parameters: {
    docs: {
      description: {
        story: `
**커스텀 스타일 라디오**

\`color\` 프롭을 사용하여 라디오 버튼의 색상을 커스터마이징할 수 있습니다.

\`\`\`tsx
<Radio value="custom" color="#FF5722">
  커스텀 컬러 라디오
</Radio>
\`\`\`
        `,
      },
    },
  },
};

export const DisabledRadio: Story = {
  name: "비활성화된 라디오",
  render: () => (
    <Radio.Group>
      <Radio value="enabled">활성화된 옵션</Radio>
      <Radio value="disabled" disabled>
        비활성화된 옵션
      </Radio>
    </Radio.Group>
  ),
  parameters: {
    docs: {
      description: {
        story: `
**비활성화된 라디오**

\`disabled\`를 \`true\`로 설정하여 라디오 버튼을 비활성화할 수 있습니다.

\`\`\`tsx
<Radio.Group>
  <Radio value="enabled">활성화된 옵션</Radio>
  <Radio value="disabled" disabled>
    비활성화된 옵션
  </Radio>
</Radio.Group>
\`\`\`
        `,
      },
    },
  },
};
