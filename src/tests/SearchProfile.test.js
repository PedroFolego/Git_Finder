import React from 'react';
import { screen } from '@testing-library/react';
import renderRouter from './renderWithRouter';
import SearchProfile from '../pages/SearchProfile';

describe('Testa a página <UserProfile />', () => {
  const mockCallback = jest.fn({});
  it('Teste se a página contém um heading h2 com o texto Buscar Repositório no github.', () => {
    renderRouter(<SearchProfile setDataProfile={mockCallback} />);
    const title = screen.getByRole('heading', { name: /Buscar Repositório no github/i });
    expect(title).toBeInTheDocument();
  });
  it('Teste se a página contém um botão', () => {
    renderRouter(<SearchProfile setDataProfile={mockCallback} />);
    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();
  });
  it('Teste se a página contém um input', () => {
    renderRouter(<SearchProfile setDataProfile={mockCallback} />);
    const input = screen.getByTestId('input');
    expect(input).toBeInTheDocument();
  });
});
