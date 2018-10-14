import React from 'react';
import Row from '../components/Row';
import renderer from 'react-test-renderer';

test('Title prints text in caption', () => {
  const component = renderer.create(
    <Row className={'exampleClass'}>
      <div>A node</div>
    </Row>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
