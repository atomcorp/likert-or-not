import React from 'react';
import Header from '../components/Header';
import renderer from 'react-test-renderer';

test('Header prints text in thead', () => {
  const component = renderer.create(<Header><div>The Header node</div></Header>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
