import React from "react";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import { HashRouter } from "react-router-dom";
import {
  AppShell, Menu, MenuItem, Select, SelectItem,
} from "../src";
import "../src/colors.css";

export default {
  title: "App Shell",
  component: AppShell,
};

export const standard = () => {
  const menu = (
    <Menu>
      <MenuItem icon={faFutbol} text="Entry 1" to="/entry1" />
      <MenuItem icon={faFutbol} text="Entry 2" to="/entry2" />
      <MenuItem icon={faFutbol} text="Entry 3" to="/entry3" />
    </Menu>
  );

  const select = (
    <Select label="select" value="test" onChange={() => {}}>
      <SelectItem value="test">Test</SelectItem>
      <SelectItem value="test2">Test 2</SelectItem>
    </Select>
  );

  return (
    <HashRouter>
      <AppShell logo="logo.png" title="Title" toggleText="Toggle Menu" menu={menu} headerContent={select}>
        content
      </AppShell>
    </HashRouter>
  );
};
