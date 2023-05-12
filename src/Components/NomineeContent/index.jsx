import React, { memo } from "react";

import Nominee from "./components/Nominee";
import { Container } from "./styles";

const NomineeContent = ({
  nominees,
  category,
  handleNomineeSelect,
  selectedNomimees,
}) => {
  return (
    <Container>
      {nominees.map((nominee) => (
        <Nominee
          key={nominee.id}
          category={category}
          nominee={nominee}
          selectedNomimees={selectedNomimees}
          handleNomineeSelect={handleNomineeSelect}
        />
      ))}
    </Container>
  );
};

export default memo(NomineeContent);
