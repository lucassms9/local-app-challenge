import React, { memo, useState } from "react";
import { Button, Container, Image, Title } from "./styles";

const Nominee = ({
  nominee,
  category,
  handleNomineeSelect,
  selectedNomimees,
}) => {
  const { title, photoUrL } = nominee;
  const isSelected = selectedNomimees[category.id] === nominee.id;

  const handleClick = () => {
    handleNomineeSelect(nominee);
  };

  return (
    <Container isSelected={isSelected}>
      <Title title={title}>{title}</Title>
      <Image src={photoUrL} alt={title} />
      {!isSelected && <Button onClick={handleClick}>Select</Button>}
    </Container>
  );
};

export default memo(Nominee);
