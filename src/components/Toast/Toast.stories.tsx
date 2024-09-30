import { Meta, StoryFn } from "@storybook/react";
import { ToastProvider } from "./ToastProvider";
import useToast from "./useToast";
import Button from "../Button/Button";

export default {
  title: "Components/Toast",
  component: ToastProvider,
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
\`useToast\` 훅은 토스트 메시지를 추가하고 제거할 수 있는 함수를 제공합니다.

**사용법**

\`\`\`tsx
import { useToast } from 'yoso-ui';

const { addToast, removeToast } = useToast();
\`\`\`

**\`addToast\` 함수**

- **인자**
  - \`message\`: \`{ title: string; content: string }\` - 토스트에 표시될 메시지
  - \`type\`: \`'success' | 'error' | 'warning' | 'info'\` - 토스트의 유형
  - \`duration\`: \`number\` - 토스트가 표시될 시간(ms)

- **사용 예시**

\`\`\`tsx
addToast(
  {
    title: '안녕하세요!',
    content: '이것은 토스트 메시지입니다.',
  },
  'info',
  3000
);
\`\`\`

**\`removeToast\` 함수**

- **인자**
  - \`id\`: \`string\` - 제거할 토스트의 ID

- **사용 예시**

\`\`\`tsx
removeToast('toast-id');
\`\`\`

`,
      },
    },
  },
} as Meta;

const getMessage = (type: "success" | "error" | "warning" | "info") => {
  switch (type) {
    case "success":
      return {
        title: "Success",
        content: "This is a success message.",
      };
    case "error":
      return {
        title: "Error",
        content: "This is an error message.",
      };
    case "warning":
      return {
        title: "Warning",
        content: "This is a warning message.",
      };
    case "info":
      return {
        title: "Info",
        content: "This is an info message.",
      };
    default:
      return {
        title: "Default",
        content: "This is a default message.",
      };
  }
};

const Template: StoryFn = () => {
  const { addToast } = useToast();

  const showToast = (
    type: "success" | "error" | "warning" | "info",
    duration: number = 3000
  ) => {
    addToast(getMessage(type), type, duration);
  };

  return (
    <div style={{ padding: "20px", display: "flex", gap: "8px" }}>
      <Button variant="primary" onClick={() => showToast("success")}>
        Success
      </Button>
      <Button variant="danger" onClick={() => showToast("error")}>
        Error
      </Button>
      <Button variant="secondary" onClick={() => showToast("warning")}>
        Warning
      </Button>
      <Button variant="ghost" onClick={() => showToast("info")}>
        Info
      </Button>
    </div>
  );
};

export const Default = Template.bind({});
Default.storyName = "기본 토스트";

export const DurationExample: StoryFn = () => {
  const { addToast } = useToast();

  const showToast = (duration: number) => {
    addToast(
      {
        title: `Duration ${duration / 1000}초`,
        content: `이 토스트는 ${duration / 1000}초 동안 표시됩니다.`,
      },
      "info",
      duration
    );
  };

  return (
    <div style={{ padding: "20px", display: "flex", gap: "8px" }}>
      <Button onClick={() => showToast(1000)}>1초</Button>
      <Button onClick={() => showToast(3000)}>3초</Button>
      <Button onClick={() => showToast(5000)}>5초</Button>
    </div>
  );
};
DurationExample.storyName = "지속 시간 예시";

export const MultipleToasts: StoryFn = () => {
  const { addToast } = useToast();

  const showMultipleToasts = () => {
    ["success", "error", "warning", "info"].forEach((type, index) => {
      setTimeout(() => {
        addToast(
          getMessage(type as "success" | "error" | "warning" | "info"),
          type as "success" | "error" | "warning" | "info",
          3000
        );
      }, index * 500);
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <Button onClick={showMultipleToasts}>여러 개의 토스트 표시</Button>
    </div>
  );
};
MultipleToasts.storyName = "여러 개의 토스트";

export const LongContentToast: StoryFn = () => {
  const { addToast } = useToast();

  const showLongContentToast = () => {
    addToast(
      {
        title: "긴 내용의 토스트",
        content:
          "이것은 매우 긴 내용의 토스트 메시지입니다. 이 메시지는 토스트 컴포넌트가 긴 내용을 어떻게 처리하는지 테스트하기 위한 것입니다.",
      },
      "info",
      5000
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <Button onClick={showLongContentToast}>긴 내용의 토스트</Button>
    </div>
  );
};
LongContentToast.storyName = "긴 내용의 토스트";
