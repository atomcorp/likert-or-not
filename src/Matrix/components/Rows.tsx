import * as React from 'react';
import css from '../Matrix.css';

import {RowsType, ClickProps, RowType} from '../definitions';

interface RowsProps {
  statements: RowsType;
  options: number;
  handleClick: (props: ClickProps) => void;
  values?: string[] | number[];
}

const Rows = (props: RowsProps) => (
  <tbody className={css.rows}>
    {props.statements.map((statement) => (
      <Row
        key={statement.id}
        statement={statement}
        options={props.options}
        handleClick={props.handleClick}
        values={props.values}
      />
    ))}
  </tbody>
);

interface DomRowType {
  statement: RowType;
  options: number;
  handleClick: (props: ClickProps) => void;
  values?: string[] | number[];
}

const Row = (props: DomRowType) => (
  <tr className={css.row}>
    <td className={css.statement}>{props.statement.statement}</td>
    {Array.from(
      Array(props.options)
        .fill((index: number) => (
          <td key={index}>
            <Radio
              name={props.statement.id}
              value={props.statement.value}
              checked={isChecked({
                value: props.statement.value,
                values: props.values,
                index,
              })}
              handleClick={props.handleClick}
              index={index}
              values={props.values}
            />
          </td>
        ))
        .map((radio, index) => radio(index))
    )}
  </tr>
);

interface IsCheckProps {
  value: string | number;
  values?: string[] | number[];
  index: number;
}

const isChecked = (props: IsCheckProps) => {
  if (props.values && props.values.length > 0) {
    return props.value === props.values[props.index];
  }
  if (typeof props.value === 'string') {
    return parseInt(props.value, 10) === props.index;
  }
  return props.value === props.index;
};

// interface RadiosProps {
//   statement: RowType;
//   options: number;
//   handleClick: (props: ClickProps) => void;
//   values?: string[] | number[];
// }

// const Radios = (props: RadiosProps) => <div className={css.radios} />;

interface ReturnValueProps {
  index: number;
  values?: string[] | number[];
}

const returnValue = (props: ReturnValueProps) => {
  if (props.values && props.values.length > 0) {
    return props.values[props.index];
  }
  return props.index;
};

interface Radio {
  name: string;
  value: number | string;
  checked: boolean;
  index: number;
  handleClick: (props: ClickProps) => void;
  values?: string[] | number[];
}

const Radio = (props: Radio) => (
  <input
    className={css.radio}
    name={props.name}
    value={props.value}
    type="radio"
    checked={props.checked}
    onChange={() =>
      props.handleClick({
        id: props.name,
        value: returnValue({index: props.index, values: props.values}),
      })
    }
  />
);

export default Rows;
