import * as React from 'react';
import LikertOrNot from '../index.d';

const Row = (props: LikertOrNot.RowProps) => (
  <tr className={props.className}>{props.children}</tr>
);

export default Row;
