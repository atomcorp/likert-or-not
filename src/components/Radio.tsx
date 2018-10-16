import * as React from 'react';
import css from '../index.css';
import LikertOrNot from '../index.d';

const Radio = (props: LikertOrNot.Radio) => (
  <label className={css.radio}>
    <input
      className={css.input}
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
    <span className={css.inlineLabel}>{props.header}</span>
  </label>
);

export default Radio;
