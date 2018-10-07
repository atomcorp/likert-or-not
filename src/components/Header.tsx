import * as React from "react";
import css from "../index.css";

import { HeaderProps } from "../typings";

const Header = (props: HeaderProps) => (
  <thead className={css.columns}>{props.children}</thead>
);

export default Header;
