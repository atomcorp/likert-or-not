import React from 'react';
import Radio from '../components/Radio';
import renderer from 'react-test-renderer';

test('Title prints text in caption', () => {
  const mockClick = jest.fn((e, props) => (props))
  const component = renderer.create(
    <Radio
      name="Radio name"
      value="A"
      checked={true}
      handleClick={() => mockClick('event', { id: 'Radio name', value: 'A' })}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // click the <Radio />
  tree.props.onChange();
  expect(mockClick.mock.calls[0]).toEqual(["event", { id: 'Radio name', value: 'A' }])
  // re-render
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
