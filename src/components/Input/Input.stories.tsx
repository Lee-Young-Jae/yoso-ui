import { Meta, StoryFn } from "@storybook/react";
import Input, { InputProps } from "./Input";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

const meta: Meta<InputProps> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Input 컴포넌트**

\`Input\` 컴포넌트는 다양한 타입의 입력 필드를 제공하며, 레이블, 오류 메시지, 아이콘 등을 지원합니다.

### 주요 기능

- **다양한 입력 타입 지원**: \`type\` prop을 통해 텍스트, 이메일, 비밀번호 등 다양한 입력 타입을 지원합니다.
- **레이블 및 도움말 텍스트**: \`label\`, \`helperText\`를 통해 레이블과 도움말을 표시할 수 있습니다.
- **오류 메시지 표시**: \`error\` prop을 사용하여 유효성 검사 오류 메시지를 표시합니다.
- **아이콘 지원**: \`leftIcon\`, \`rightIcon\`을 통해 입력 필드에 아이콘을 추가할 수 있습니다.
- **크기 및 스타일 조절**: \`size\`, \`radius\`, \`fullWidth\` 등으로 입력 필드의 스타일을 조절할 수 있습니다.
- **접근성 준수**: 레이블과 입력 필드의 연결, ARIA 속성 등을 사용하여 접근성을 향상시킵니다.

### 사용법

\`\`\`tsx
import Input from './Input';
import { FiMail } from 'react-icons/fi';

<Input
  label="이메일"
  type="email"
  placeholder="이메일을 입력하세요"
  leftIcon={<FiMail />}
/>;
\`\`\`
        `,
      },
    },
  },
  /**
   *   label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  size?: "small" | "medium" | "large";
  radius?: "none" | "small" | "medium" | "large";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
   */
  argTypes: {
    label: {
      control: "text",
      table: {
        category: "Content",
      },
      description: "입력 필드의 레이블을 지정합니다.",
    },
    error: {
      control: "text",
      table: {
        category: "Content",
      },
      description: "유효성 검사 오류 메시지를 표시합니다.",
    },
    helperText: {
      control: "text",
      table: {
        category: "Content",
      },
      description: "입력 필드 아래에 표시되는 도움말 텍스트입니다.",
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
      description: "입력 필드의 크기를 조절합니다.",
      table: {
        category: "Style",
      },
    },
    leftIcon: {
      control: false,
      table: {
        category: "Content",
      },
      description: "입력 필드 왼쪽에 표시되는 아이콘입니다.",
    },
    rightIcon: {
      control: false,
      table: {
        category: "Content",
      },
      description: "입력 필드 오른쪽에 표시되는 아이콘입니다.",
    },
    fullWidth: {
      control: "boolean",
      table: {
        category: "Style",
      },
    },
    radius: {
      control: {
        type: "select",
        options: ["none", "small", "medium", "large"],
      },
      description: "입력 필드의 모서리 둥글기를 조절합니다.",
      table: {
        category: "Style",
      },
    },

    disabled: {
      control: "boolean",
      table: {
        category: "State",
      },
      description: "입력 필드를 비활성화 상태로 설정합니다.",
    },
    required: {
      control: "boolean",
      table: {
        category: "State",
      },
      description:
        "필수 입력 필드 여부를 지정합니다. 레이블이 있다면 `*` 표시가 추가됩니다.",
    },
    onChange: {
      action: "changed",
      table: {
        category: "Events",
      },
    },
    onBlur: {
      action: "blurred",
      table: {
        category: "Events",
      },
    },
    onFocus: {
      action: "focused",
      table: {
        category: "Events",
      },
    },
    onKeyPress: {
      action: "key pressed",
      table: {
        category: "Events",
      },
    },
  },
};

// 템플릿 함수 정의
const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

// 스토리 정의

export const Default = Template.bind({});
Default.args = {
  placeholder: "텍스트를 입력하세요",
  required: false,
  fullWidth: false,
  size: "medium",
  label: "",
  error: "",
  helperText: "",
  leftIcon: undefined,
  rightIcon: undefined,
  disabled: false,
  radius: "medium",
};
Default.storyName = "기본 입력 필드";
Default.parameters = {
  docs: {
    description: {
      story: `
**기본 입력 필드**

기본 설정으로 사용되는 입력 필드입니다.

\`\`\`tsx
<Input
  label="기본 입력"
  placeholder="텍스트를 입력하세요"
/>
\`\`\`
      `,
    },
  },
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: "이메일",
  type: "email",
  placeholder: "이메일을 입력하세요",
  leftIcon: <FiMail />,
};
WithIcon.storyName = "아이콘이 있는 입력 필드";
WithIcon.parameters = {
  docs: {
    description: {
      story: `
**아이콘이 있는 입력 필드**

\`leftIcon\` 또는 \`rightIcon\`을 사용하여 입력 필드에 아이콘을 추가할 수 있습니다.

\`\`\`tsx
import { FiMail } from 'react-icons/fi';

<Input
  label="이메일"
  type="email"
  placeholder="이메일을 입력하세요"
  leftIcon={<FiMail />}
/>
\`\`\`
      `,
    },
  },
};

export const Password = Template.bind({});
Password.args = {
  label: "비밀번호",
  type: "password",
  placeholder: "비밀번호를 입력하세요",
  leftIcon: <FiLock />,
};
Password.storyName = "비밀번호 입력 필드";
Password.parameters = {
  docs: {
    description: {
      story: `
**비밀번호 입력 필드**

\`type="password"\`를 사용하여 비밀번호 입력 필드를 생성합니다.

\`\`\`tsx
import { FiLock } from 'react-icons/fi';

<Input
  label="비밀번호"
  type="password"
  placeholder="비밀번호를 입력하세요"
  leftIcon={<FiLock />}
/>
\`\`\`
      `,
    },
  },
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  label: "이메일",
  type: "email",
  placeholder: "이메일을 입력하세요",
  error: "유효한 이메일 주소를 입력하세요.",
  leftIcon: <FiMail />,
};
ErrorState.storyName = "오류 상태";
ErrorState.parameters = {
  docs: {
    description: {
      story: `
**오류 상태**

\`error\` prop을 사용하여 유효성 검사 오류 메시지를 표시합니다.

\`\`\`tsx
import { FiMail } from 'react-icons/fi';

<Input
  label="이메일"
  type="email"
  placeholder="이메일을 입력하세요"
  error="유효한 이메일 주소를 입력하세요."
  leftIcon={<FiMail />}
/>
\`\`\`
      `,
    },
  },
};

export const Sizes = () => (
  <>
    <Input
      label="Small Input"
      placeholder="Small size"
      size="small"
      style={{ marginBottom: "1rem" }}
    />
    <Input
      label="Medium Input"
      placeholder="Medium size"
      size="medium"
      style={{ marginBottom: "1rem" }}
    />
    <Input label="Large Input" placeholder="Large size" size="large" />
  </>
);
Sizes.storyName = "크기 변경";
Sizes.parameters = {
  docs: {
    description: {
      story: `
**크기 변경**

\`size\` prop을 사용하여 입력 필드의 크기를 조절할 수 있습니다.

\`\`\`tsx
<Input size="small" />
<Input size="medium" />
<Input size="large" />
\`\`\`
      `,
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "비활성화된 입력",
  placeholder: "입력 불가",
  disabled: true,
};
Disabled.storyName = "비활성화 상태";
Disabled.parameters = {
  docs: {
    description: {
      story: `
**비활성화 상태**

\`disabled\` prop을 사용하여 입력 필드를 비활성화할 수 있습니다.

\`\`\`tsx
<Input
  label="비활성화된 입력"
  placeholder="입력 불가"
  disabled
/>
\`\`\`
      `,
    },
  },
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: "전체 너비 입력",
  placeholder: "부모 너비를 모두 차지합니다",
  fullWidth: true,
};
FullWidth.storyName = "전체 너비";
FullWidth.parameters = {
  docs: {
    description: {
      story: `
**전체 너비**

\`fullWidth\` prop을 사용하여 입력 필드가 부모의 너비를 모두 차지하도록 설정할 수 있습니다.

\`\`\`tsx
<Input
  label="전체 너비 입력"
  placeholder="부모 너비를 모두 차지합니다"
  fullWidth
/>
\`\`\`
      `,
    },
  },
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  label: "사용자 이름",
  placeholder: "사용자 이름을 입력하세요",
  helperText: "5자 이상 입력하세요.",
  leftIcon: <FiUser />,
};
WithHelperText.storyName = "도움말 텍스트";
WithHelperText.parameters = {
  docs: {
    description: {
      story: `
**도움말 텍스트**

\`helperText\` prop을 사용하여 입력 필드 아래에 도움말 텍스트를 표시할 수 있습니다.

\`\`\`tsx
import { FiUser } from 'react-icons/fi';

<Input
  label="사용자 이름"
  placeholder="사용자 이름을 입력하세요"
  helperText="5자 이상 입력하세요."
  leftIcon={<FiUser />}
/>
\`\`\`
      `,
    },
  },
};

export const CustomRadius = Template.bind({});
CustomRadius.args = {
  label: "커스텀 라디우스",
  placeholder: "모서리 둥글기 조절",
  radius: "large",
};
CustomRadius.storyName = "모서리 둥글기 변경";
CustomRadius.parameters = {
  docs: {
    description: {
      story: `
**모서리 둥글기 변경**

\`radius\` prop을 사용하여 입력 필드의 모서리 둥글기를 조절할 수 있습니다.

\`\`\`tsx
<Input
  label="커스텀 라디우스"
  placeholder="모서리 둥글기 조절"
  radius="large"
/>
\`\`\`
      `,
    },
  },
};

export const Required = Template.bind({});
Required.args = {
  label: "필수 입력",
  placeholder: "필수 입력 필드",
  required: true,
};
Required.storyName = "필수 입력 필드";
Required.parameters = {
  docs: {
    description: {
      story: `
**필수 입력 필드**

\`required\` prop을 사용하여 필수 입력 필드를 표시할 수 있습니다.

\`\`\`tsx
<Input
  label="필수 입력"
  placeholder="필수 입력 필드"
  required
/>
\`\`\`
      `,
    },
  },
};

export default meta;
