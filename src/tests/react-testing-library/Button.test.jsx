import { render, screen, fireEvent } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import Button from '../../components/Button';

describe('Button', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('Renders text that it encloses', () => {
    render(<Button>Hello, World!</Button>);

    const buttonText = screen.getByText(/Hello, World!/i);

    expect(buttonText).toBeInTheDocument();
  });

  it('Should call the function that is passed as an onlick handler', () => {
    const mock = vi.fn();

    render(<Button onClick={mock}>Hello, World!</Button>);

    const button = screen.getByText('Hello, World!');

    fireEvent.click(button);

    expect(mock).toHaveBeenCalledOnce();
  });
});
