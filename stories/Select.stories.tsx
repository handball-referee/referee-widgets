import React, { useState } from "react";
import { Select, SelectItem } from "../src";
import "../src/colors.css";

export default {
  title: "Select",
  component: Select,
};

export const standard = () => {
  const [value, setValue] = useState("test");

  return (
    <div>
      <Select label="Select" onChange={setValue} value={value}>
        <SelectItem value="test">test</SelectItem>
        <SelectItem value="test2">test 2</SelectItem>
        <SelectItem value="test3">test 3</SelectItem>
      </Select>
    </div>
  );
};
