import React from 'react';
import { screen, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import SearchProfile from '../pages/SearchProfile';

describe('Testa a página <UserProfile />', () => {
  const history = createMemoryHistory();
  const mockCallback = jest.fn({});
  const renderRouter = () => render(
    <Router location={history.location} navigator={history}>
      <SearchProfile setDataProfile={mockCallback} />
    </Router>,
  );

  it('Teste se a página contém um heading h2 com o texto Buscar Repositório no github.', () => {
    renderRouter();
    const title = screen.getByRole('heading', { name: /Buscar Repositório no github/i });
    expect(title).toBeInTheDocument();
  });
  it('Teste se a página contém um botão', () => {
    renderRouter();
    const title = screen.getByTestId('button');
    expect(title).toBeInTheDocument();
  });
  it('Teste se a página contém um input com placeholder', () => {
    renderRouter();
    const title = screen.getByTestId('input');
    expect(title).toBeInTheDocument();
  });
});
