import * as React from 'react';
import css from '../Matrix.css';

import {
  RowsProps,
  // DomRowType,
  // ReturnValueProps,
  // Radio,
  // IsCheckProps,
} from '../definitions';

const Body = (props: RowsProps) => (
  <tbody className={css.rows}>{props.children}</tbody>
);

export default Body;
