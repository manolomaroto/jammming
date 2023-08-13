import React from 'react';
import { render } from '@testing-library/react';
import TrackList from './TrackList';

it('render TrackList', () => {
    const tracks = [
        {name: 'Espiritu', artist: 'Bumbu', album: 'Espiritu', id: '01' },
        {name: 'Aves', artist: 'Descanso', album: 'Matinales', id: '02' },
        {name: 'Kancion', artist: 'Ayer', album: 'Desde', id: '03' },
      ];

    const { container } = render(<TrackList pistas={tracks}/>);
    const elemento = container.querySelector('ul');
    expect(elemento).toBeInTheDocument();
})