import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Checkbox, { CheckboxProps } from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "체크박스 레이블 텍스트",
    },
    checked: {
      control: "boolean",
      description: "체크 상태",
    },
    disabled: {
      control: "boolean",
      description: "비활성화 상태",
    },
    error: {
      control: "text",
      description: "유효성 검사 오류 메시지",
    },
    helperText: {
      control: "text",
      description: "도움말 텍스트",
    },
    indeterminate: {
      control: "boolean",
      description: "불확정 상태",
    },
    onChange: {
      action: "changed",
      description: "체크 상태 변경 이벤트 핸들러",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
**Checkbox 컴포넌트**

\`Checkbox\` 컴포넌트는 폼에서 사용되는 체크박스를 제공합니다. 레이블, 에러 메시지, 비활성화, 불확정(indeterminate) 상태 등을 지원합니다.

### 주요 기능

- **체크 상태 관리**: \`checked\`, \`onChange\`를 통해 체크 상태를 제어합니다.
- **불확정 상태**: \`indeterminate\` prop을 사용하여 불확정 상태를 표시합니다.
- **레이블 및 도움말 텍스트**: \`label\`, \`helperText\`를 통해 레이블과 도움말을 표시할 수 있습니다.
- **에러 메시지 표시**: \`error\` prop을 사용하여 유효성 검사 오류 메시지를 표시합니다.
- **비활성화**: \`disabled\` prop을 사용하여 체크박스를 비활성화할 수 있습니다.
- **접근성 준수**: ARIA 속성을 사용하여 스크린 리더 및 키보드 내비게이션을 지원합니다.

### 사용법

\`\`\`tsx
import Checkbox from './Checkbox';

<Checkbox
  label="동의합니다."
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>;
\`\`\`
        `,
      },
    },
  },
} as Meta<CheckboxProps>;

const Template: StoryFn<CheckboxProps> = (args) => {
  const [checked, setChecked] = useState(args.checked ?? false);

  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={(e) => {
        setChecked(e.target.checked);
        args.onChange && args.onChange(e);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "기본 체크박스",
};
Default.storyName = "기본 체크박스";

export const Disabled = Template.bind({});
Disabled.args = {
  label: "비활성화된 체크박스",
  disabled: true,
};
Disabled.storyName = "비활성화 상태";

export const ErrorState = Template.bind({});
ErrorState.args = {
  label: "에러 상태 체크박스",
  error: "이 필드를 체크해야 합니다.",
};
ErrorState.storyName = "에러 상태";

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  label: "불확정 상태 체크박스",
  indeterminate: true,
};
Indeterminate.storyName = "불확정 상태";

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  label: "도움말이 있는 체크박스",
  helperText: "추가 정보가 여기에 표시됩니다.",
};
WithHelperText.storyName = "도움말 텍스트";

export const AllOptions = Template.bind({});
AllOptions.args = {
  label: "모든 옵션 적용",
  error: "에러 메시지",
  helperText: "도움말 텍스트",
  disabled: false,
  indeterminate: true,
};
AllOptions.storyName = "모든 옵션 적용";
