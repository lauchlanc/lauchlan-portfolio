import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSpring } from "react-spring";
import useWindowSize from "../../hooks/useWindowSIze";
import {
  MenuContainer,
  MenuContent,
  MenuControls,
  MenuHeader,
  MenuList,
  MenuListItem,
  MenuFooter,
  MenuTitle
} from "./styles";

const propTypes = {
  defaultOpen: PropTypes.bool
};

const defaultProps = {
  defaultOpen: false
};

const Menu = props => {
  const { menuOpen } = props;
  const [containerProps, setContainerProps] = useSpring(() => ({
    transform: `translate3d(${menuOpen ? "0" : "-100%"},0,0)`
  }));

  // Update spring with new props
  setContainerProps({
    transform: `translate3d(${menuOpen ? "0" : "-100%"},0,0)`
  });

  return (
    <MenuContainer style={containerProps}>
      <MenuContent>
        <MenuHeader>
          <h3>Header</h3>
        </MenuHeader>
        <MenuList>
          <MenuListItem>Item 1</MenuListItem>
          <MenuListItem>Item 2</MenuListItem>
          <MenuListItem>Item 3</MenuListItem>
        </MenuList>
        <MenuFooter>
          <section className="icon-list">
            <i className="nes-icon twitter is-large"></i>

            <i className="nes-icon github is-large"></i>

            <i className="nes-icon gmail is-large"></i>

            <i className="nes-icon linkedin is-large"></i>
          </section>
        </MenuFooter>
      </MenuContent>
    </MenuContainer>
  );
};

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;
