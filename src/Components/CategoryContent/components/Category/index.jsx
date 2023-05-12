import React from "react";

import NomineeContent from "../../../NomineeContent";
import { ContainerCategory, Title } from "./styles";

const Category = ({ category, selectedNomimees, handleNomineeSelect }) => {
  const { title, items } = category;
  return (
    <ContainerCategory>
      <Title>{title}</Title>
      <NomineeContent
        nominees={items}
        category={category}
        selectedNomimees={selectedNomimees}
        handleNomineeSelect={handleNomineeSelect}
      />
    </ContainerCategory>
  );
};

export default Category;
