import * as React from 'react';
import css from './Matrix.css';

interface MatrixProps {
  children: React.ReactNode;
}

const Matrix = (props: MatrixProps) => (
  <div className={css.container}>{props.children}</div>
);

interface TitleProps {
  children: string;
}

export const Title = (props: TitleProps) => <h2>{props.children}</h2>;

interface ColumnsProps {
  labels: string[];
}

export const Columns = (props: ColumnsProps) => (
  <div>{props.labels.map((label) => label)}</div>
);

interface RowsProps {
  statements: string[];
}

export const Rows = (props: RowsProps) => (
  <div>{props.statements.map((statement) => statement)}</div>
);

export default Matrix;
