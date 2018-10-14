import React from 'react';
import Title from '../components/Title';
import renderer from 'react-test-renderer';

test('Title prints text in caption', () => {
  const component = renderer.create(<Title>The title</Title>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
