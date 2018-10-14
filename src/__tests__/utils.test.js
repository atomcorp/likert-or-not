import {
  returnEnumArray,
  returnValueIfSpecifiedElseEnum,
  isChecked,
} from '../components/utils';

test('creates an enumarable array from integer', () => {
  expect(returnEnumArray(2)).toEqual([0, 1]);
  expect(returnEnumArray(5)).toEqual([0, 1, 2, 3, 4]);
});

test('returns value, or default number', () => {
  expect(
    returnValueIfSpecifiedElseEnum({values: ['A', 'B', 'C'], index: 1})
  ).toEqual('B');
  expect(returnValueIfSpecifiedElseEnum({index: 1})).toEqual(1);
});

test('check if radio is checked by comparing equality', () => {
  expect(isChecked({index: 1, values: ['A', 'B', 'C'], value: 'B'})).toEqual(
    true
  );
  expect(isChecked({index: 0, values: ['A', 'B', 'C'], value: 'B'})).toEqual(
    false
  );
  expect(isChecked({index: 0, value: '0'})).toEqual(true);
  expect(isChecked({index: 0, value: '5'})).toEqual(false);
  expect(isChecked({index: 0})).toEqual(false);
});
