import React from "react";
import { render } from '@testing-library/react';
import PlayList from './PlayList';

it("renders PlayList", () => {
    const tracks = [
        {name: 'Espiritu', artist: 'Bumbu', album: 'Espiritu', id: '01' },
        {name: 'Aves', artist: 'Descanso', album: 'Matinales', id: '02' },
        {name: 'Kancion', artist: 'Ayer', album: 'Desde', id: '03' },
      ];

    const { container } = render(<PlayList playlist={tracks} />);
    const elemento = container.querySelector('ul');
    expect(elemento).toBeInTheDocument();
});