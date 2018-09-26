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
  handleClick: (props: {id: string; value: number}) => void;
}

const Matrix = (props: MatrixProps) => (
  <div className={css.container}>
    <Title>The title</Title>
    <Columns labels={props.labels} />
    <Rows
      statements={props.rows}
      options={props.labels.length}
      handleClick={props.handleClick}
    />
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
  handleClick: (props: {id: string; value: number}) => void;
}

const Rows = (props: RowsProps) => (
  <div>
    {props.statements.map((statement) => (
      <Row
        key={statement.id}
        statement={statement}
        options={props.options}
        handleClick={props.handleClick}
      />
    ))}
  </div>
);

interface DomRowType {
  statement: RowType;
  options: number;
  handleClick: (props: {id: string; value: number}) => void;
}

const Row = (props: DomRowType) => (
  <div>
    {props.statement.statement}
    <Radios
      options={props.options}
      statement={props.statement}
      handleClick={props.handleClick}
    />
  </div>
);

interface RadiosProps {
  statement: RowType;
  options: number;
  handleClick: (props: {id: string; value: number}) => void;
}

const Radios = (props: RadiosProps) => (
  <div>
    {Array.from(
      Array(props.options)
        .fill((index: number) => (
          <Radio
            key={index}
            name={props.statement.id}
            value={props.statement.value}
            checked={props.statement.value === index}
            handleClick={props.handleClick}
            index={index}
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
  index: number;
  handleClick: (props: {id: string; value: number}) => void;
}

const Radio = (props: Radio) => (
  <input
    name={props.name}
    value={props.value}
    type="radio"
    checked={props.checked}
    onClick={() => props.handleClick({id: props.name, value: props.index})}
  />
);

export default Matrix;
