import LikertOrNot from '../index.d';

/**
 * Check whether the Radio is checked
 * - If user has specified the possible Values prop we compare
 * with the current value
 * - If not, we compare with the index of the Radio in the row
 * - If value is undefined will return false
 */
export const isChecked = (props: LikertOrNot.IsCheckProps) => {
  if (props.values && props.values.length > 0) {
    return props.value === props.values[props.index];
  }
  // coerce string number into a integer (eg '5' !== 5)
  if (typeof props.value === 'string') {
    return parseInt(props.value, 10) === props.index;
  }
  return props.value === props.index;
};

/**
 * If user has specified the Values prop this ensures it is used
 * Otherwise it just returns the number of the index
 */
export const returnValueIfSpecifiedElseEnum = (
  props: LikertOrNot.ReturnValueProps
) => {
  if (props.values && props.values.length > 0) {
    return props.values[props.index];
  }
  return props.index;
};

/**
 * This just creates an array from 0 to the given number
 * eg returnEnumArray(3) => [0, 1, 2]
 */
export const returnEnumArray = (length: number) =>
  Array.from(Array(length).keys());
