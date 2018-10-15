import React from 'react';
import LikertOrNot from '../index';
import renderer from 'react-test-renderer';

test('LikertOrNot loads', () => {
  const component = renderer.create(<LikertOrNot
    title="The title"
    labels={['Good', 'OK', 'Bad']}
    rows={[
      {
        statement: 'This is a question, how do you feel about it?',
      },
    ]}
    handleClick={(e, { id, value }) => ({})}
  />)
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})