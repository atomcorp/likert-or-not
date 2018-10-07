import * as React from 'react';
import css from './index.css';
import Header from './components/Header';
import Title from './components/Title';
import Body from './components/Body';
import Row from './components/Row';
import Radios from './components/Radios';
import {MatrixProps} from './typings';
import {returnEnumArray} from './components/utils';

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
        <Row className={css.row} key={row.id}>
          <td className={css.statement}>{row.statement}</td>
          <Radios
            length={props.labels.length}
            id={row.id}
            values={props.values || returnEnumArray(props.labels.length)}
            value={row.value}
            handleClick={props.handleClick}
          />
        </Row>
      ))}
    </Body>
  </table>
);

export default Matrix;
