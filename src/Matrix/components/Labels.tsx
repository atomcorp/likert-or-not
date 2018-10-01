import * as React from 'react';
import css from '../Matrix.css';

import {LabelsProps} from '../definitions';

const Labels = (props: LabelsProps) => (
  <div className={css.columns}>
    {props.labels.map((label) => (
      <div key={label} className={css.column}>
        {label}
      </div>
    ))}
  </div>
);

export default Labels;
