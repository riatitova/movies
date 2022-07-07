import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import Card from './components/common/Card';
import SearchBar, { addItemToLS, getItemFromLS } from './components/common/SearchBar';
import { localStorageMock } from './mock/localStorageMock';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import AboutPage from './components/about-page/AboutPage';
import NotFoundPage from './components/not-found-page/NotFoundPage';

describe('App', () => {
  it('renders App component', () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <App/>
      </Router>,
    );
    screen.debug();
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.queryByText((/menu/i))).toBeNull();
  });
});

describe('SearchBar', () => {
  it('renders SearchBar component', () => {
    render(<SearchBar/>);
    screen.debug();
    expect(screen.getByPlaceholderText(/enter movie/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText(/search/i)).toBeInTheDocument();
    expect(screen.queryByText((/cinema/i))).toBeNull();
  });
});

describe('AboutPage', () => {
  it('renders AboutPage component', () => {
    render(<AboutPage/>);
    screen.debug();
    expect(screen.getByText(/about us/i)).toBeInTheDocument();
  });
});

describe('NotFoundPage', () => {
  it('renders NotFoundPage component', () => {
    render(<NotFoundPage/>);
    screen.debug();
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
});

describe('Card', () => {
  it('renders Card component', () => {
    render(<Card src={''}/>);
    screen.debug();
    expect(screen.getByAltText(/cat/i)).toBeInTheDocument();
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/country/i)).toBeInTheDocument();
    expect(screen.queryByText((/dog/i))).toBeNull();
  });
});

describe('search movie storage', () => {
  it('should save movie to storage', async () => {
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });

    const spy = jest.spyOn(localStorageMock, 'setItem');
    await addItemToLS('test');
    expect(spy).toHaveBeenCalled();
    expect(getItemFromLS()).toStrictEqual('test');
  });
});
