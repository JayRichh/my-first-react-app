import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ClickHandler from './ClickHandler';

describe('<ClickHandler />', () => {
  test('it should mount', () => {
    render(<ClickHandler />);
    
    const clickHandler = screen.getByTestId('ClickHandler');

    expect(clickHandler).toBeInTheDocument();
  });
});