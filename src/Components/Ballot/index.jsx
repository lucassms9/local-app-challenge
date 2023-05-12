import React, { useEffect, useState } from "react";

import api from "../../Api/Api";
import { Button, Container } from "./styles";
import CategoryContent from "../CategoryContent";

const Ballot = ({ addNomiees }) => {
  const [ballotData, setBallotData] = useState([]);
  const [handleSelectedNomimees, setHandleSelectedNomimees] = useState({});

  const handleGetBallot = () => {
    api.getBallotData().then(({ items }) => {
      setBallotData(items);
      const intialNominees = items.reduce(
        (category, curr) => ({ ...category, [curr.id]: null }),
        {}
      );
      setHandleSelectedNomimees(intialNominees);
    });
  };

  const handleNomineeSelect = (category, nominee) => {
    setHandleSelectedNomimees((prevSelectedNominees) => ({
      ...prevSelectedNominees,
      [category.id]: nominee.id,
    }));
  };

  const handleSubmit = () => {
    addNomiees(handleSelectedNomimees);
  };

  useEffect(() => {
    handleGetBallot();
  }, []);

  return (
    <Container>
      <CategoryContent
        categories={ballotData}
        selectedNomimees={handleSelectedNomimees}
        handleNomineeSelect={handleNomineeSelect}
      />
      <Button onClick={handleSubmit}>Submit Ballot</Button>
    </Container>
  );
};

export default Ballot;
