import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  background-color: #009b86;
  border-radius: 10px;
  border: 1px solid black;
  margin: 8px;
  padding: 20px 0px;
  text-align: center;

  ${({ isSelected }) =>
    isSelected &&
    `
    background-color: #009B86;
    opacity:0.5;
  `}

  &:hover {
    background-color: #34ac9c;
    color: #cccccc;
  }
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const Title = styled.h3``;

export const Button = styled.button`
  border: none;
  height: 35px;
  width: 100px;
  margin-top: 20px;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    `
  cursor: not-allowed;
`}
`;
