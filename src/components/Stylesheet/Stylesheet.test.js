import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Stylesheet from './Stylesheet';

describe('<Stylesheet />', () => {
  test('it should mount', () => {
    render(<Stylesheet />);
    
    const stylesheet = screen.getByTestId('Stylesheet');

    expect(stylesheet).toBeInTheDocument();
  });
});