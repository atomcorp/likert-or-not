import * as React from 'react';
import css from './Matrix.css';
import Labels from './components/Labels';
import Title from './components/Title';
import Rows from './components/Rows';

import {MatrixProps} from './definitions';

const Matrix = (props: MatrixProps) => (
  <div className={css.container}>
    <Title>{props.title}</Title>
    <Labels labels={props.labels} />
    <Rows
      statements={props.rows}
      options={props.labels.length}
      handleClick={props.handleClick}
      values={props.values}
    />
  </div>
);

export default Matrix;
