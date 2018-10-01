import {IsCheckProps} from '../definitions';

export const isChecked = (props: IsCheckProps) => {
  if (props.values && props.values.length > 0) {
    return props.value === props.values[props.index];
  }
  if (typeof props.value === 'string') {
    return parseInt(props.value, 10) === props.index;
  }
  return props.value === props.index;
};
