import * as React from 'react';
import css from '../Matrix.css';

import {Radio, ReturnValueProps} from '../definitions';

const returnValue = (props: ReturnValueProps) => {
  if (props.values && props.values.length > 0) {
    return props.values[props.index];
  }
  return props.index;
};

const Radio = (props: Radio) => (
  <input
    className={css.radio}
    name={props.name}
    value={props.value}
    type="radio"
    checked={props.checked}
    onChange={() =>
      props.handleClick({
        id: props.name,
        value: returnValue({index: props.index, values: props.values}),
      })
    }
  />
);

export default Radio;
