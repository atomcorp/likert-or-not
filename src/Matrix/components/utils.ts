import {IsCheckProps, ReturnValueProps} from '../definitions';

export const isChecked = (props: IsCheckProps) => {
  if (props.values && props.values.length > 0) {
    return props.value === props.values[props.index];
  }
  if (typeof props.value === 'string') {
    return parseInt(props.value, 10) === props.index;
  }
  return props.value === props.index;
};

export const returnValueIfSpecifiedElseEnum = (props: ReturnValueProps) => {
  if (props.values && props.values.length > 0) {
    return props.values[props.index];
  }
  return props.index;
};
