import * as React from "react";
// import css from '../index.css';

import { TitleProps } from "../typings";

const Title = (props: TitleProps) => <caption>{props.children}</caption>;

export default Title;
