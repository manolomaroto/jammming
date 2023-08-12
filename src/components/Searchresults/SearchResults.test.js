import React from 'react';
import { render } from '@testing-library/react';
import SearchResults from './SearchResults';

it('renders SearchResults', () => {
    const { getByText } = render(<SearchResults />);
    const elemento = getByText('SearchResults');
    expect(elemento).toBeInTheDocument();
})