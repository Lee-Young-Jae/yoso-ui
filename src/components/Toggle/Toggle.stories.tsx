import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Toggle, { ToggleProps } from "./Toggle";

export default {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Toggle 컴포넌트**

\`Toggle\` 컴포넌트는 온/오프 스위치 형태의 토글 버튼을 제공합니다. 다양한 옵션을 통해 스타일과 동작을 커스터마이징할 수 있습니다.

### 주요 기능

- **상태 관리**: \`checked\`와 \`onChange\` props를 통해 토글 상태를 제어합니다.
- **크기 조절**: \`size\` prop을 사용하여 \`small\`, \`medium\`, \`large\` 크기를 선택할 수 있습니다.
- **스타일 변경**: \`variant\` prop을 통해 \`solid\` 또는 \`outline\` 스타일을 적용할 수 있습니다.
- **텍스트 표시**: \`showText\`를 활성화하여 토글 상태에 따른 텍스트를 표시할 수 있습니다.
- **접근성 준수**: ARIA 속성을 사용하여 스크린 리더 및 키보드 내비게이션을 지원합니다.

### 사용법

\`\`\`tsx
import Toggle from './Toggle';

const [isOn, setIsOn] = useState(false);

<Toggle
  id="toggle1"
  checked={isOn}
  onChange={(e) => setIsOn(e.target.checked)}
  size="medium"
  variant="solid"
  showText
  onText="On"
  offText="Off"
  ariaLabel="기능 활성화 토글"
/>;
\`\`\`
        `,
      },
    },
  },
} as Meta<typeof Toggle>;

const Template: StoryFn<ToggleProps> = (args) => {
  const [checked, setChecked] = React.useState(args.checked || false);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setChecked(e.target.checked);
    args.onChange && args.onChange(e);
  };

  return <Toggle {...args} checked={checked} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  id: "toggle-default",
  size: "medium",
  variant: "solid",
  disabled: false,
  showText: false,
  ariaLabel: "기본 토글",
};
Default.storyName = "기본 토글";

export const Sizes = () => (
  <>
    <Toggle
      id="toggle-small"
      size="small"
      checked={true}
      onChange={() => {}}
      ariaLabel="Small 토글"
    />
    <Toggle
      id="toggle-medium"
      size="medium"
      checked={true}
      onChange={() => {}}
      ariaLabel="Medium 토글"
    />
    <Toggle
      id="toggle-large"
      size="large"
      checked={true}
      onChange={() => {}}
      ariaLabel="Large 토글"
    />
  </>
);
Sizes.storyName = "크기 변경";

export const Variants = () => (
  <>
    <Toggle
      id="toggle-solid"
      variant="solid"
      checked={true}
      onChange={() => {}}
      ariaLabel="Solid 토글"
    />
    <Toggle
      id="toggle-outline"
      variant="outline"
      checked={true}
      onChange={() => {}}
      ariaLabel="Outline 토글"
    />
  </>
);
Variants.storyName = "스타일 변경";

export const WithText = Template.bind({});
WithText.args = {
  id: "toggle-with-text",
  size: "medium",
  variant: "solid",
  showText: true,
  onText: "켜짐",
  offText: "꺼짐",
  ariaLabel: "텍스트 표시 토글",
};
WithText.storyName = "텍스트 표시";

export const Disabled = Template.bind({});
Disabled.args = {
  id: "toggle-disabled",
  size: "medium",
  variant: "solid",
  disabled: true,
  ariaLabel: "비활성화된 토글",
};
Disabled.storyName = "비활성화 상태";

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  id: "toggle-custom-style",
  size: "medium",
  variant: "solid",
  style: { transform: "scale(1.5)" },
  ariaLabel: "커스텀 스타일 토글",
};
CustomStyle.storyName = "커스텀 스타일 적용";
