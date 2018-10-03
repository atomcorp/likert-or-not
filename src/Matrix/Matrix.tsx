import * as React from 'react';
import css from './Matrix.css';
import Header from './components/Header';
import Title from './components/Title';
import Body from './components/Body';
import Row from './components/Row';
import Radio from './components/Radio';
import {MatrixProps} from './definitions';
import {
  isChecked,
  returnValueIfSpecifiedElseEnum,
  returnEnumArray,
} from './components/utils';

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
          {returnEnumArray(props.labels.length).map((index) => (
            <td key={index}>
              <Radio
                name={row.id}
                value={returnValueIfSpecifiedElseEnum({
                  index,
                  values: props.values,
                })}
                checked={isChecked({
                  value: row.value,
                  values: props.values,
                  index,
                })}
                handleClick={props.handleClick}
              />
            </td>
          ))}
        </Row>
      ))}
    </Body>
  </table>
);

const withDefaultProps = <P extends object>(
  WrappedComponent: React.ComponentType<MatrixProps>
) => {
  class WithDefaultProps extends React.Component<P & MatrixProps> {
    returnDefaultValues() {
      return Array.from(Array(this.props.labels.length).keys());
    }
    render() {
      return (
        <WrappedComponent
          values={this.props.values || this.returnDefaultValues()}
          {...this.props}
        />
      );
    }
  }
  return WithDefaultProps;
};

export default withDefaultProps(Matrix);
