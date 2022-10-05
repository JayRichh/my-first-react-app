import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Greet from './Greet';

describe('<Greet />', () => {
  test('it should mount', () => {
    render(<Greet />);
    
    const greet = screen.getByTestId('Greet');

    expect(greet).toBeInTheDocument();
  });
});