import * as React from 'react';
import css from './index.css';
import Header from './components/Header';
import Title from './components/Title';
import Body from './components/Body';
import Row from './components/Row';
import Radios from './components/Radios';
import LikertOrNot from './index.d';
import {returnEnumArray} from './components/utils';

const LikertOrNot = (props: LikertOrNot.Main) => (
  <table className={css.container}>
    <Title>{props.title}</Title>
    <Header>
      <Row className={css.header}>
        <td />
        {props.labels.map((label) => (
          <td key={label} className={css.column}>
            {label}
          </td>
        ))}
      </Row>
    </Header>
    <Body>
      {props.rows.map((row, index) => (
        <Row
          className={css.row}
          key={row.id || index}
          hasError={row.hasError || false}
        >
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

export default LikertOrNot;
