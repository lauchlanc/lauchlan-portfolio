import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSpring } from "react-spring";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarList,
  SidebarListItem,
  SidebarFooter
} from "./styles";

const propTypes = {
  defaultOpen: PropTypes.bool
};

const defaultProps = {
  defaultOpen: false
};

const Sidebar = props => {
  const { defaultOpen } = props;
  const [isOpen, setOpen] = useState(defaultOpen);
  const [containerProps, setContainerProps] = useSpring(() => ({
    transform: `translate3d(${isOpen ? "0" : "-80%"},0,0)`
  }));

  // Update spring with new props
  setContainerProps({
    transform: `translate3d(${isOpen ? "0" : "-80%"},0,0)`
  });

  return (
    <SidebarContainer style={containerProps}>
      <SidebarHeader>
        <h1>Header</h1>
        <button
          type="button"
          className="nes-btn"
          onClick={() => setOpen(!isOpen)}
        >
          {isOpen ? "<" : ">"}
        </button>
      </SidebarHeader>
      <SidebarList>
        <SidebarListItem>Item 1</SidebarListItem>
        <SidebarListItem>Item 2</SidebarListItem>
        <SidebarListItem>Item 3</SidebarListItem>
      </SidebarList>
      <SidebarFooter>
        <section className="icon-list">
          <i className="nes-icon twitter is-large"></i>

          <i className="nes-icon github is-large"></i>

          <i className="nes-icon gmail is-large"></i>

          <i className="nes-icon linkedin is-large"></i>
        </section>
      </SidebarFooter>
    </SidebarContainer>
  );
};

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;

export default Sidebar;
