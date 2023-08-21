import { render, screen } from '@testing-library/react';
import App from './App';

describe('</app', () => {
  it('renders app', () => {
    render(<App />);
    const app = screen.getByText('Jammming');
    expect(app).toBeInTheDocument();
  });

  it('contains an input', () => {
    const { container } = render(<App />);
    const element = container.querySelector('input')
    expect(element).toBeInTheDocument();
  })
})



