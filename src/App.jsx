import React, { useState } from "react";
import "./App.styles.js";
import { ContainerBox } from "./App.styles.js";
import Ballot from "./Components/Ballot";
import ContentResultsModal from "./Components/ContentResultsModal";

function App() {
  const [showModal, setShowModal] = useState();

  const close = () => setShowModal(false);

  return (
    <>
      <ContainerBox>
        <header className="App-header">
          <h1>Awards 2021</h1>
        </header>
        <Ballot openModal={setShowModal} />
      </ContainerBox>
      {showModal && <ContentResultsModal close={close} />}
    </>
  );
}

export default App;
