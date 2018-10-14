import * as React from 'react';
import css from '../index.css';

import LikertOrNot from '../index.d';

const Body = (props: LikertOrNot.RowsProps) => (
  <tbody className={css.rows}>{props.children}</tbody>
);

export default Body;
