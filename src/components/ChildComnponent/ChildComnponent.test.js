import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ChildComnponent from './ChildComnponent';

describe('<ChildComnponent />', () => {
  test('it should mount', () => {
    render(<ChildComnponent />);
    
    const childComnponent = screen.getByTestId('ChildComnponent');

    expect(childComnponent).toBeInTheDocument();
  });
});