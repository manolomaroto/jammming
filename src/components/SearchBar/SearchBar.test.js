import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from './SearchBar';

it('Renders SearchBar', () => {
    const { getByText } = render(<SearchBar />);
    const elemento = getByText('SearchBar');
    expect(elemento).toBeInTheDocument();
})