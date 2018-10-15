import React from 'react';
import Body from '../components/Body';
import renderer from 'react-test-renderer';

test('Body prints text in tbody', () => {
  const component = renderer.create(<Body><div>The Body node</div></Body>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
