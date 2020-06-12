import React, { useState } from "react";
import { CheckBox } from "../src";
import "../src/colors.css";

export default {
  title: "CheckBox",
  component: CheckBox,
};

export const standard = () => {
  const [isChecked, setChecked] = useState(false);

  return (
    <div>
      <CheckBox checked={isChecked} onChange={setChecked} label="Default" />
      <CheckBox checked readOnly label="Read Only" />
    </div>
  );
};
