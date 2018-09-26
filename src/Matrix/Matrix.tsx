import * as React from 'react';
import css from './Matrix.css';

interface RowType {
  id: string;
  statement: string;
  value: number;
}

type RowsType = RowType[];

interface MatrixProps {
  children?: React.ReactNode;
  title: string;
  labels: string[];
  rows: RowsType;
}

const Matrix = (props: MatrixProps) => (
  <div className={css.container}>
    <Title>The title</Title>
    <Columns labels={props.labels} />
    <Rows statements={props.rows} options={props.labels.length} />
  </div>
);

interface TitleProps {
  children: string;
}

const Title = (props: TitleProps) => <h2>{props.children}</h2>;

interface ColumnsProps {
  labels: string[];
}

const Columns = (props: ColumnsProps) => (
  <div>{props.labels.map((label) => label)}</div>
);

interface RowsProps {
  statements: RowsType;
  options: number;
}

const Rows = (props: RowsProps) => (
  <div>
    {props.statements.map((statement) => (
      <Row key={statement.id} statement={statement} options={props.options} />
    ))}
  </div>
);

interface DomRowType {
  statement: RowType;
  options: number;
}

const Row = (props: DomRowType) => (
  <div>
    {props.statement.statement}
    {Array.from(
      Array(props.options)
        .fill((index: number) => (
          <Radio
            key={index}
            name={props.statement.statement}
            value={props.statement.value}
            checked={props.statement.value === index}
          />
        ))
        .map((radio, index) => radio(index))
    )}
  </div>
);

interface Radio {
  name: string;
  value: number;
  checked: boolean;
}

const Radio = (props: Radio) => (
  <input
    name={props.name}
    value={props.value}
    type="radio"
    checked={props.checked}
  />
);

export default Matrix;
