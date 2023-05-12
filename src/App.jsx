import React, { useCallback, useState } from "react";
import "./App.styles.js";
import { ContainerBox } from "./App.styles.js";
import Ballot from "./Components/Ballot";
import ContentResultsModal from "./Components/ContentResultsModal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedNomiees, setSelectednNomiees] = useState(false);

  const close = useCallback(() => setShowModal(false), []);

  const addNomiees = useCallback(
    (nominee) => {
      setShowModal(true);
      setSelectednNomiees(nominee);
    },
    [setShowModal, setSelectednNomiees]
  );

  console.log(selectedNomiees);
  return (
    <>
      <ContainerBox>
        <header className="App-header">
          <h1>Awards 2021</h1>
        </header>
        <Ballot addNomiees={addNomiees} />
      </ContainerBox>
      {showModal && (
        <ContentResultsModal close={close} selectedNomiees={selectedNomiees} />
      )}
    </>
  );
}

export default App;
