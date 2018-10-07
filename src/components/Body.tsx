import * as React from "react";
import css from "../index.css";

import {
  RowsProps
  // DomRowType,
  // ReturnValueProps,
  // Radio,
  // IsCheckProps,
} from "../typings";

const Body = (props: RowsProps) => (
  <tbody className={css.rows}>{props.children}</tbody>
);

export default Body;
