import React from 'react';
import renderer from 'react-test-renderer';

import Square from '../Components/Square';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<Square />).toJSON();
  expect(tree).toMatchSnapshot();
});