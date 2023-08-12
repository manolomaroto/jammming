import React from "react";
import { render } from '@testing-library/react';
import PlayList from './PlayList';

it("renders PlayList", () => {
    const { getByText } = render(<PlayList />);
    const elemento = getByText('PlayList');
    expect(elemento).toBeInTheDocument();
});