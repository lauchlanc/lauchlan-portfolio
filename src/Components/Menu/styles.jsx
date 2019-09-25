import styled from "@emotion/styled";
import { animated } from "react-spring";
import { mq } from "../../globalStyles";

export const MenuContainer = styled(animated.aside)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  background: darkgray;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  ${mq[1]} {
    flex-direction: row;
    width: 75%;
  }
`;

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 100%;

  ${mq[1]} {
    width: 80%;
    height: 100%;
  }
`;

export const MenuControls = styled.div`
  background: #333;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 10%;
  width: 100%;

  ${mq[1]} {
    width: 20%;
    height: 100%;
    justify-content: space-evenly;
    align-items: flex-start;
  }
`;

export const MenuHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CloseButton = styled.button``;

export const MenuList = styled.ul`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const MenuListItem = styled.div``;

export const MenuFooter = styled.footer`
  justify-self: flex-end;
`;
