import React from 'react';
import { render } from '@testing-library/react';
import Track from './Track';

it('render Track', () => {
    const pista = {name:'Juan', artist:'Po', album:'fsdf',id: '01'};

    const { container } = render(<Track pista={pista} />);
    const elemento = container.querySelector('li');
    expect(elemento).toBeInTheDocument();
})