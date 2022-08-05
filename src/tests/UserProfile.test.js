import React from 'react';
import { screen } from '@testing-library/react';
import renderRouter from './renderWithRouter';
import UserProfile from '../pages/UserProfile';

const fakeDataProfile = {
  name: 'Pedro Folego',
  login: 'pedroFolego',
  bio: 'Full Stack Developer',
  location: 'São Paulo',
  blog: 'myBlog',
  company: 'fakeCompany',
  twitter_username: 'pedroTwitter',
  avatar_url: 'myImage.svg',
  repos_url: 'https://api.github.com/users/PedroFolego',
  public_repos: 12,
  following: 7,
  followers: 8,
};
describe('Testa a página <UserProfile />', () => {
  it('Teste se a página contém headings com informações do usuário', () => {
    renderRouter(<UserProfile dataProfile={fakeDataProfile} />);
    const name = screen.getByRole('heading', { name: /Pedro Folego/i });
    const login = screen.getByRole('heading', { name: /pedroFolego/i });
    const bio = screen.getByRole('heading', { name: /Full Stack Developer/i });
    const location = screen.getByRole('heading', { name: /São Paulo/i });
    const blog = screen.getByRole('heading', { name: /myBlog/i });
    const company = screen.getByRole('heading', { name: /fakeCompany/i });
    const twitter = screen.getByRole('heading', { name: /@pedroTwitter/i });

    expect(name).toBeInTheDocument();
    expect(login).toBeInTheDocument();
    expect(bio).toBeInTheDocument();
    expect(location).toBeInTheDocument();
    expect(blog).toBeInTheDocument();
    expect(company).toBeInTheDocument();
    expect(twitter).toBeInTheDocument();
  });
  it('Teste se a página contém uma imagem de perfil', () => {
    renderRouter(<UserProfile dataProfile={fakeDataProfile} />);
    const logo = screen.getByRole('img');

    expect(logo).toHaveAttribute('src', 'myImage.svg');
    expect(logo).toHaveAttribute('alt', 'user profile');
  });
  it('Teste se a página contém paragrafos com a quantidade de seguidores', () => {
    renderRouter(<UserProfile dataProfile={fakeDataProfile} />);
    const following = screen.getByTestId('following');
    const followers = screen.getByTestId('followers');
    expect(following).toBeInTheDocument();
    expect(followers).toBeInTheDocument();
  });
  it('Teste se a página contém paragrafos com a quantidade de seguidores', async () => {
    renderRouter(<UserProfile dataProfile={fakeDataProfile} />);
    const following = screen.getByTestId('following');
    const followers = screen.getByTestId('followers');

    expect(following).toBeInTheDocument();
    expect(followers).toBeInTheDocument();
  });
});
