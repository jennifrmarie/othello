import React from 'react';
import renderer from 'react-test-renderer';

import Board from '../Components/Board';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<Board />).toJSON();
  expect(tree).toMatchSnapshot();
});