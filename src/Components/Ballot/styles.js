import styled from "styled-components";

export const Container = styled.div``;

export const Button = styled.button`
  position: fixed;
  bottom: 0;
  right: 20px;
  border: 2px solid #fff;
  border-radius: 4px;
  cursor: pointer;
  width: 150px;
  height: 40px;
  margin: 20px 0px;
  background-color: #009b86;
  align-self: flex-end;

  &:hover {
    background-color: #34ac9c;
  }
`;
