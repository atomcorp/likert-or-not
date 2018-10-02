import * as React from 'react';
import css from '../Matrix.css';
import {Radio} from '../definitions';

const Radio = (props: Radio) => (
  <input
    className={css.radio}
    name={props.name}
    value={props.value}
    type="radio"
    checked={props.checked}
    onChange={(e) =>
      props.handleClick(e, {
        id: props.name,
        value: props.value,
      })
    }
  />
);

export default Radio;
