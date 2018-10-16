import * as React from 'react';
import {
  isChecked,
  returnValueIfSpecifiedElseEnum,
  returnEnumArray,
} from './utils';
import Radio from './Radio';
import LikertOrNot from '../index.d';

const Radios = (props: LikertOrNot.RadiosProps) => (
  <>
    {returnEnumArray(props.length).map((index) => (
      <td key={index}>
        <Radio
          name={props.id}
          value={returnValueIfSpecifiedElseEnum({
            index,
            values: props.values,
          })}
          checked={isChecked({
            value: props.value,
            values: props.values,
            index,
          })}
          handleClick={props.handleClick}
          header={props.headers[index]}
        />
      </td>
    ))}
  </>
);

export default Radios;
