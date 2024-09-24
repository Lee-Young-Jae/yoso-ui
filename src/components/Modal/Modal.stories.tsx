import { Meta, StoryFn } from "@storybook/react";
import Modal from "./Modal";
import useModal from "./useModal";
import Button from "../Button/Button";

export default {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    hideOnClickOutside: {
      control: {
        type: "boolean",
      },
      description: "모달 바깥을 클릭했을 때 모달을 닫습니다.",
    },
    showHideButton: {
      control: {
        type: "boolean",
      },
      description: "모달 내부에 닫기 버튼을 표시합니다.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
**Modal 컴포넌트**

\`Modal\` 컴포넌트는 사용자 인터랙션에 따라 표시되는 오버레이 창으로, 중요한 정보를 보여주거나 사용자로부터 입력을 받을 때 사용합니다.

### 주요 기능

- **Portal 사용**: 모달은 어느 위치에서 작성되었든, 항상 최상위 레벨에 렌더링됩니다.
- **컴파운드 패턴 지원**: \`Modal.Header\`, \`Modal.Content\`, \`Modal.Footer\`를 사용하여 모달의 구조를 정의할 수 있습니다.
- **외부 클릭 닫기**: \`hideOnClickOutside\` prop을 사용하여 모달 바깥을 클릭했을 때 모달을 닫을 수 있습니다.
- **닫기 버튼 표시**: \`showHideButton\` prop을 사용하여 모달 내부에 닫기 버튼을 표시할 수 있습니다.

### 사용법

\`\`\`tsx
import { Modal, useModal } from 'yoso-ui';

const Example = () => {
  const { opened, openModal, closeModal, isAnimating } = useModal();

  return (
    <>
      <button onClick={openModal}>모달 열기</button>
      <Modal
        opened={opened}
        hide={closeModal}
        isAnimating={isAnimating}
      >
        <Modal.Header title="모달 제목" />
        <Modal.Content>
          {/* 모달 내용 */}
        </Modal.Content>
        <Modal.Footer>
          {/* 모달 푸터 */}
        </Modal.Footer>
      </Modal>
    </>
  );
};
\`\`\`
        `,
      },
    },
  },
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => {
  const { opened, openModal, closeModal, isAnimating } = useModal();

  return (
    <div style={{ minHeight: "330px" }}>
      <Button onClick={openModal}>모달 열기</Button>
      <Modal
        {...args}
        opened={opened}
        hide={closeModal}
        isAnimating={isAnimating}
      >
        <Modal.Header title="설정" />
        <Modal.Content>
          <p>여기에 모달 내용을 넣을 수 있습니다.</p>
        </Modal.Content>
        <Modal.Footer>
          <Button onClick={closeModal}>닫기</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  hideOnClickOutside: true,
  showHideButton: false,
};
Default.storyName = "기본 모달";
Default.parameters = {
  docs: {
    description: {
      story: `
**기본 모달**

컴파운드 패턴을 사용하여 모달의 구조를 정의합니다.

\`\`\`tsx
<Modal
  opened={opened}
  hide={closeModal}
>
  <Modal.Header title="모달 제목" />
  <Modal.Content>
    {/* 모달 내용 */}
  </Modal.Content>
  <Modal.Footer>
    {/* 모달 푸터 */}
  </Modal.Footer>
</Modal>
\`\`\`
      `,
    },
  },
};

export const WithCloseButton = Template.bind({});
WithCloseButton.args = {
  hideOnClickOutside: false,
  showHideButton: true,
};
WithCloseButton.storyName = "닫기 버튼이 있는 모달";
WithCloseButton.parameters = {
  docs: {
    description: {
      story: `
**닫기 버튼이 있는 모달**

모달 내부에 닫기 버튼을 표시합니다.

\`\`\`tsx
<Modal
  opened={opened}
  hide={closeModal}
  showHideButton={true}
>
  {/* ... */}
</Modal>
\`\`\`
      `,
    },
  },
};

export const AnimatedModal = Template.bind({});
AnimatedModal.args = {
  hideOnClickOutside: true,
  showHideButton: false,
};
AnimatedModal.storyName = "애니메이션 모달";
AnimatedModal.parameters = {
  docs: {
    description: {
      story: `
**애니메이션 모달**

모달이 열리고 닫힐 때 애니메이션이 적용됩니다.

\`\`\`tsx
const { opened, openModal, closeModal, isAnimating } = useModal();

<Modal
  opened={opened}
  hide={closeModal}
  isAnimating={isAnimating}
>
  {/* ... */}
</Modal>
\`\`\`
      `,
    },
  },
};

export const CustomContent = Template.bind({});
CustomContent.args = {
  hideOnClickOutside: true,
  showHideButton: false,
};
CustomContent.storyName = "커스텀 콘텐츠 모달";
CustomContent.parameters = {
  docs: {
    description: {
      story: `
**커스텀 콘텐츠 모달**

모달 내부에 원하는 콘텐츠를 렌더링할 수 있습니다.

\`\`\`tsx
<Modal
  opened={opened}
  hide={closeModal}
>
  <div>
    <h2>커스텀 제목</h2>
    <p>커스텀 내용을 여기에 넣을 수 있습니다.</p>
  </div>
</Modal>
\`\`\`
      `,
    },
  },
};

export const DisableOutsideClick = Template.bind({});
DisableOutsideClick.args = {
  hideOnClickOutside: false,
  showHideButton: true,
};
DisableOutsideClick.storyName = "외부 클릭으로 닫기 비활성화";
DisableOutsideClick.parameters = {
  docs: {
    description: {
      story: `
**외부 클릭으로 닫기 비활성화**

모달 바깥을 클릭해도 모달이 닫히지 않습니다.

\`\`\`tsx
<Modal
  opened={opened}
  hide={closeModal}
  hideOnClickOutside={false}
>
  {/* ... */}
</Modal>
\`\`\`
      `,
    },
  },
};
