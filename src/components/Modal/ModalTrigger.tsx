import useModal from "./useModal";
import Modal from "./Modal";
import Button from "../Button/Button";

interface ModalTriggerProps {
  content: React.ReactNode;
  hideOnClickOutside?: boolean;
  opened: boolean;
  showHideButton?: boolean;
}

const ModalTrigger = ({
  content,
  hideOnClickOutside,
  opened,
  showHideButton,
}: ModalTriggerProps) => {
  const { opened: modalOpend, openModal, closeModal, isAnimating } = useModal();

  const handleOk = () => {
    console.log("ok");
    closeModal();
  };

  return (
    <>
      <Button onClick={openModal}>모달 열기</Button>
      <Modal
        opened={opened || modalOpend}
        hide={closeModal}
        hideOnClickOutside={hideOnClickOutside}
        showHideButton={showHideButton}
        isAnimating={isAnimating}
      >
        {/* <Modal.Header title="모달 제목" /> */}
        <Modal.Content>{content}</Modal.Content>

        <Modal.Footer
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button variant="ghost" size="small" onClick={handleOk}>
            확인
          </Button>
          <Button variant="ghost" size="small" onClick={closeModal}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalTrigger;
