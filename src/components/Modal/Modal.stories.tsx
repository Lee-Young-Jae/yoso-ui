import { Meta, StoryObj } from "@storybook/react";

import Modal from "./Modal";
import ModalTrigger from "./ModalTrigger";
import Button from "../Button/Button";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    tags: ["autodocs"],
    docs: {
      description: {
        component: `\`모달\` 컴포넌트는 \`opend\` 상태에 따라 화면에 표시됩니다. \n
\`useModal\` 훅을 사용하면 손쉽게 모달을 열고 닫을 수 있습니다. \n
\`portal\`을 사용하여 렌더링되기 때문에, 모달은 항상 최상위 레벨에 렌더링됩니다. \n
        
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    opened: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "State",
      },
    },
    hideOnClickOutside: {
      control: "boolean",
      defaultValue: false,
      description:
        "모달 Dimmed 영역을 클릭했을 때 모달을 닫을지 여부, hide 함수가 실행됩니다.",
      table: {
        category: "State",
      },
    },
    showHideButton: {
      control: "boolean",
      description: "우측 상단 X모양의 모달 닫기 버튼을 표시할지 여부",
      table: {
        category: "State",
      },
    },
    children: {
      control: "text",
      description: "모달 내용",
      table: {
        category: "Content",
      },
    },

    hide: {
      table: {
        category: "Events",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const 트리거혼합: Story = {
  render: (args) => (
    <ModalTrigger
      content={args.children}
      hideOnClickOutside={args.hideOnClickOutside}
      opened={args.opened}
      showHideButton={args.showHideButton}
    />
  ),
  args: {
    children: "내용이 들어갑니다",
    hideOnClickOutside: false,
  },
};

export const DefaultModal: Story = {
  storyName: "Compound Pattern을 사용할 수 있습니다.",
  render: (args) => (
    <Modal {...args}>
      <Modal.Header title="모달 제목" />
      <Modal.Content>{args.children}</Modal.Content>
      <Modal.Footer>
        <Button variant="ghost">확인</Button>
        <Button variant="ghost" onClick={args.hide}>
          닫기
        </Button>
      </Modal.Footer>
    </Modal>
  ),
  args: {
    children: "내용이 들어갑니다",
    hideOnClickOutside: true,
  },
};
