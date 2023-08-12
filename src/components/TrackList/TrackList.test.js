import React from 'react';
import { render } from '@testing-library/react';
import TrackList from './TrackList';

it('render TrackList', () => {
    const { getByText } = render(<TrackList />);
    const elemento = getByText('TrackList');
    expect(elemento).toBeInTheDocument();
})