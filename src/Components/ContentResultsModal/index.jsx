import { useEffect, useMemo } from "react";
import { Backdrop, Close, Container, Content, Header } from "./styles";

const ContentResultsModal = ({ close, selectedNomiees }) => {
  useEffect(() => {
    const keyboardListener = ({ keyCode }) => {
      if (keyCode === 27) close();
    };

    document.addEventListener("keydown", keyboardListener);
    return () => document.removeEventListener("keydown", keyboardListener);
  });

  const itemsSelected = useMemo(() => {
    return Object.entries(selectedNomiees).filter((item) => item[1]);
  }, [selectedNomiees]);

  return (
    <>
      <Container role="dialog" aria-modal="true">
        <Header>
          <Close onClick={close}>X</Close>
        </Header>
        <Content>
          <div>SUCCESS!</div>
          <ul>
            {itemsSelected.map((item) => (
              <li key={item[0]}>{`${item[0]}: ${item[1]}`}</li>
            ))}
          </ul>
        </Content>
      </Container>
      <Backdrop />
    </>
  );
};

export default ContentResultsModal;
