import * as React from 'react';
import css from '../index.css';
import LikertOrNot from '../index.d';

const Radio = (props: LikertOrNot.Radio) => (
  <input
    className={css.radio}
    name={props.name}
    value={props.value}
    type="radio"
    checked={props.checked}
    onChange={(e: React.SyntheticEvent) =>
      props.handleClick(e, {
        id: props.name,
        value: props.value,
      })
    }
  />
);

export default Radio;
