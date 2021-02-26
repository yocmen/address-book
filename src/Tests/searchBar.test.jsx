import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from '../Components/SearchBar';

describe('search bar component', () => {
  it('shows the search form', () => {
    render(<SearchBar />);

    expect(screen.getByRole('search')).toBeInTheDocument();
  });
});
