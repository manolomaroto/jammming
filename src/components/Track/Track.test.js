import React from 'react';
import { render } from '@testing-library/react';
import Track from './Track';

it('render Track', () => {
    const { getByText } = render(<Track />);
    const elemento = getByText('Track');
    expect(elemento).toBeInTheDocument();
})