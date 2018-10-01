import * as React from 'react';
import css from '../Matrix.css';

import {LabelsProps} from '../definitions';

const Labels = (props: LabelsProps) => (
  <thead className={css.columns}>
    <tr className={css.header}>
      {props.labels.map((label) => (
        <td key={label} className={css.column}>
          {label}
        </td>
      ))}
    </tr>
  </thead>
);

export default Labels;
