import React from 'react';
import Radios from '../components/Radios';
import renderer from 'react-test-renderer';

test('Radios outputs an array of radio inputs', () => {
  const component = renderer.create(
    <Radios
      length={3}
      id={'RowId'}
      values={['A', 'B', 'C']}
      value={'A'}
      headers={['Header 1', 'Header 2', 'Header 3']}
      handleClick={jest.fn(() => ({}))}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
