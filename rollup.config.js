import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import copy from "rollup-plugin-copy";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json";

const extensions = [".js", ".ts", ".tsx"];

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "es",
    },
  ],
  external: [
    ...Object.keys(pkg.peerDependencies),
    "**/*.css",
  ],
  plugins: [
    commonjs(),
    resolve({
      extensions,
    }),
    babel({
      babelHelpers: "runtime",
      extensions,
    }),
    // postcss({
    //   extract: "styles.css",
    // }),
    // copy({
    //   targets: [
    //     {
    //       src: "src/colors.css",
    //       dest: ["lib", "module"],
    //     },
    //   ],
    // }),
  ],
};
