import * as React from "react";
import css from "../index.css";
import { Radio } from "../typings";

const Radio = (props: Radio) => (
  <input
    className={css.radio}
    name={props.name}
    value={props.value}
    type="radio"
    checked={props.checked}
    onChange={(e: React.SyntheticEvent) =>
      props.handleClick(e, {
        id: props.name,
        value: props.value
      })
    }
  />
);

export default Radio;
