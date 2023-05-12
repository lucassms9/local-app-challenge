import { useEffect } from "react";
import { Backdrop, Close, Container, Content, Header } from "./styles";

const ContentResultsModal = ({ close }) => {
  useEffect(() => {
    const keyboardListener = ({ keyCode }) => {
      if (keyCode === 27) close();
    };

    document.addEventListener("keydown", keyboardListener);
    return () => document.removeEventListener("keydown", keyboardListener);
  });

  return (
    <>
      <Container role="dialog" aria-modal="true">
        <Header>
          <Close onClick={close}>X</Close>
        </Header>
        <Content>SUCCESS!</Content>
      </Container>
      <Backdrop />
    </>
  );
};

export default ContentResultsModal;
