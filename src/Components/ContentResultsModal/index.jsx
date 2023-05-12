import { useEffect, useMemo } from "react";
import {
  Backdrop,
  Close,
  Container,
  Content,
  ContentItems,
  Header,
  Title,
} from "./styles";
import ResultItem from "./components/ResultItem";

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
          <Title>SUCCESS!</Title>
          <ContentItems>
            {itemsSelected.map((item) => (
              <ResultItem name={item[0]} title={item[1]} />
            ))}
          </ContentItems>
        </Content>
      </Container>
      <Backdrop />
    </>
  );
};

export default ContentResultsModal;
