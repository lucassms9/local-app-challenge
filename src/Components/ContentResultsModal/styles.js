import { styled } from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: black;
  opacity: 0.5;
  z-index: 1;
`;

export const Container = styled.div`
  z-index: 2;
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 50vh;
  width: 75vw;
  background: #fff;
  border-radius: 4px;
  border: 1px solid white;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const Close = styled.span`
  font-weight: bold;
  padding: 5px;
  color: #0d2436;
  &:hover {
    cursor: pointer;
    color: #cccccc;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0d2436;
`;
