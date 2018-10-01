import * as React from 'react';
import css from './Matrix.css';
import Header from './components/Header';
import Title from './components/Title';
import Body from './components/Body';
// import {Row} from './components/Rows';
import Row from './components/Row';
import Radio from './components/Radio';
import {MatrixProps} from './definitions';
import {isChecked} from './components/utils';

const Matrix = (props: MatrixProps) => (
  <table className={css.container}>
    <Title>{props.title}</Title>
    <Header>
      <Row className={css.header}>
        {props.labels.map((label) => (
          <td key={label} className={css.column}>
            {label}
          </td>
        ))}
      </Row>
    </Header>
    <Body>
      {props.rows.map((row) => (
        <Row className={css.row}>
          <td className={css.statement}>{row.statement}</td>
          {Array.from(
            Array(props.labels.length)
              .fill((index: number) => (
                <td key={index}>
                  <Radio
                    name={row.id}
                    value={row.value}
                    checked={isChecked({
                      value: row.value,
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
        </Row>
      ))}
    </Body>
  </table>
);

export default Matrix;
