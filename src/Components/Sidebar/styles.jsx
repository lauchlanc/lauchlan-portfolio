import styled from "@emotion/styled";
import { animated } from "react-spring";

export const SidebarContainer = styled(animated.aside)`
  display: flex;
  max-width: 25%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  background: darkgray;
  position: absolute;
  top: 0;
  left: 0;
`;

export const SidebarHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CloseButton = styled.button``;

export const SidebarList = styled.ul`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const SidebarListItem = styled.div``;

export const SidebarFooter = styled.footer`
  justify-self: flex-end;
`;
