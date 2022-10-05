import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserGreeting from './UserGreeting';

describe('<UserGreeting />', () => {
  test('it should mount', () => {
    render(<UserGreeting />);
    
    const userGreeting = screen.getByTestId('UserGreeting');

    expect(userGreeting).toBeInTheDocument();
  });
});