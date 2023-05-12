import React from "react";

import Category from "./components/Category";
import { Container } from "./styles";

const CategoryContent = ({
  categories,
  selectedNomimees,
  handleNomineeSelect,
}) => {
  return (
    <Container>
      {categories.map((category) => (
        <Category
          key={category.id}
          category={category}
          selectedNomimees={selectedNomimees}
          handleNomineeSelect={(nominee) => {
            handleNomineeSelect(category, nominee);
          }}
        />
      ))}
    </Container>
  );
};

export default CategoryContent;
