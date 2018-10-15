import * as React from 'react';
import LikertOrNot from '../index.d';
import css from '../index.css';

const Row = (props: LikertOrNot.RowProps) => (
  <tr className={`${props.className} ${props.hasError ? css.error : null}`}>
    {props.children}
  </tr>
);

export default Row;
