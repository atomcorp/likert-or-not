import React from 'react';
import Radio from '../components/Radio';
import renderer from 'react-test-renderer';

test('Title prints text in caption', () => {
  const mockClick = jest.fn((id, value) => ({
    id,
    value
  }))
  const component = renderer.create(
    <Radio 
      name="Radio name"
      value="A"
      checked={true}
      handleClick={() => mockClick('Radio name', 'A')}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  
  // click the <Radio />
  tree.props.onChange();
  expect(mockClick.mock.calls[0]).toEqual([ "Radio name", "A" ])
  // re-render
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
