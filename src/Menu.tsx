/* eslint-disable react/jsx-props-no-spreading */
import React, { FunctionComponent, ReactElement } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Menu.css";
import { NavLink, NavLinkProps } from "react-router-dom";

export interface Props {
  children: Array<ReactElement<ItemProps>>;
}

const Menu: FunctionComponent<Props> = ({ children }) => {
  return (
    <nav className="hbwMenu">
      {children}
    </nav>
  );
};

export interface ItemProps extends NavLinkProps {
  icon: IconProp;
  text: string;
}

export const MenuItem: FunctionComponent<ItemProps> = ({
  icon,
  text,
  ...navProps
}) => (
  <NavLink {...navProps}>
    <div className="icon"><FontAwesomeIcon icon={icon} size="lg" /></div>
    <div className="text">{text}</div>
  </NavLink>
);

export default Menu;
