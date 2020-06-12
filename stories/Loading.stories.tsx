import React from "react";
import { Loading } from "../src";
import "../src/colors.css";

export default {
  title: "Loading Spinner",
  component: Loading,
};

export const standard = () => (
  <div>
    <Loading />
  </div>
);
