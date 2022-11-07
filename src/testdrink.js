import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';
// import meals from '../../cypress/mocks/meals';

const topBtn = 'search-top-btn';
const input = 'search-input';
const exc = 'exec-search-btn';

// jest.setTimeout(30000)

it('testando componentes na tela', async () => {
  const { history } = renderWithRouter(
    <App />,
  );
  act(() => {
    history.push('/drinks');
  });
  // const abc = await screen.findByText('ABC');
  const abc = await screen.findByText(/ABC/i, {}, { timeout: 15000 });
  expect(abc).toBeInTheDocument();
});

it('testando ingrediente', async () => {
  const { history } = renderWithRouter(
    <App />,
  );
  act(() => {
    history.push('/drinks');
  });
  const searchtopbtn = screen.getByTestId(topBtn);
  userEvent.click(searchtopbtn);
  const searchInput = screen.getByTestId(input);
  const execSearchBtn = screen.getByTestId(exc);
  const ingredientBtn = screen.getByTestId('ingredient-search-radio');
  // const nameBtn = screen.getByTestId('name-search-radio');
  // const firstletterBtn = screen.getByTestId('first-letter-search-radio');
  userEvent.click(ingredientBtn);
  userEvent.type(searchInput, 'lemon');
  userEvent.click(execSearchBtn);
  // const BrownStewChicken = await screen.findByText('Brown Stew Chicken');
  const BrownStewChicken = await screen.findByText(/A True Amaretto Sour/i, {}, { timeout: 15000 });
  expect(BrownStewChicken).toBeInTheDocument();
});

it('testando name', async () => {
  const { history } = renderWithRouter(
    <App />,
  );
  act(() => {
    history.push('/drinks');
  });
  const searchtopbtn = screen.getByTestId(topBtn);
  userEvent.click(searchtopbtn);
  const searchInput = screen.getByTestId(input);
  const execSearchBtn = screen.getByTestId(exc);
  // const ingredientBtn = screen.getByTestId('ingredient-search-radio');
  const nameBtn = screen.getByTestId('name-search-radio');
  // const firstletterBtn = screen.getByTestId('first-letter-search-radio');
  userEvent.click(nameBtn);
  userEvent.type(searchInput, 'GG');
  userEvent.click(execSearchBtn);
  // const LeblebiSoup = await screen.findByText('Leblebi Soup');
  const GG = await screen.findByText(/GG/i, {}, { timeout: 15000 });
  expect(GG).toBeInTheDocument();
});

it('testando first', async () => {
  const { history } = renderWithRouter(
    <App />,
  );
  act(() => {
    history.push('/drinks');
  });
  const searchtopbtn = screen.getByTestId(topBtn);
  userEvent.click(searchtopbtn);
  const searchInput = screen.getByTestId(input);
  const execSearchBtn = screen.getByTestId(exc);
  // const ingredientBtn = screen.getByTestId('ingredient-search-radio');
  // const nameBtn = screen.getByTestId('name-search-radio');
  const firstletterBtn = screen.getByTestId('first-letter-search-radio');
  userEvent.click(firstletterBtn);
  userEvent.type(searchInput, 'a');
  userEvent.click(execSearchBtn);
  // const AppleFrangipanTart = await screen.findByText('Apple Frangipan Tart');
  const A1 = await screen.findByText(/A1/i, {}, { timeout: 15000 });
  expect(A1).toBeInTheDocument();
});

it('testando alert', async () => {
  const { history } = renderWithRouter(
    <App />,
  );
  act(() => {
    history.push('/meals');
  });
  const searchtopbtn = screen.getByTestId(topBtn);
  userEvent.click(searchtopbtn);
  const searchInput = screen.getByTestId(input);
  const execSearchBtn = screen.getByTestId(exc);
  const nameBtn = screen.getByTestId('name-search-radio');
  userEvent.click(nameBtn);
  userEvent.type(searchInput, 'xablau');
  userEvent.click(execSearchBtn);
  const alert = await screen.findByRole('alert', {}, { timeout: 15000 });
  expect(alert).toBeInTheDocument();
});

it('testando categoty Ordinary', async () => {
  const { history } = renderWithRouter(
    <App />,
  );
  act(() => {
    history.push('/drinks');
  });
  const ordinaryBtn = await screen.findByTestId('Ordinary Drink-category-filter', {}, { timeout: 15000 });
  userEvent.click(ordinaryBtn);
  const mile = await screen.findByText('3-Mile Long Island Iced Tea', {}, { timeout: 15000 });
  expect(mile).toBeInTheDocument();
});

it('testando categoty Cocktail', async () => {
  const { history } = renderWithRouter(
    <App />,
  );
  act(() => {
    history.push('/drinks');
  });
  const CocktailBtn = await screen.findByTestId('Cocktail-category-filter', {}, { timeout: 15000 });
  userEvent.click(CocktailBtn);
  const Belmont = await screen.findByText('155 Belmont', {}, { timeout: 15000 });
  expect(Belmont).toBeInTheDocument();
});

it('testando categoty Shake', async () => {
  const { history } = renderWithRouter(
    <App />,
  );
  act(() => {
    history.push('/drinks');
  });
  const ShakeBtn = await screen.findByTestId('Shake-category-filter', {}, { timeout: 15000 });
  userEvent.click(ShakeBtn);
  const Florida = await screen.findByText('151 Florida Bushwacker', {}, { timeout: 15000 });
  expect(Florida).toBeInTheDocument();
});

it('testando categoty Other', async () => {
  const { history } = renderWithRouter(
    <App />,
  );
  act(() => {
    history.push('/drinks');
  });
  const OtherBtn = await screen.findByTestId('Other/Unknown-category-filter', {}, { timeout: 15000 });
  userEvent.click(OtherBtn);
  const Piece = await screen.findByText('A Piece of Ass', {}, { timeout: 15000 });
  expect(Piece).toBeInTheDocument();
});

it('testando categoty Other', async () => {
  const { history } = renderWithRouter(
    <App />,
  );
  act(() => {
    history.push('/drinks');
  });
  const CocoaBtn = await screen.findByTestId('Cocoa-category-filter', {}, { timeout: 15000 });
  userEvent.click(CocoaBtn);
  const Chocolate = await screen.findByText('Castillian Hot Chocolate', {}, { timeout: 15000 });
  expect(Chocolate).toBeInTheDocument();
  const allBtn = await screen.findByTestId('All-category-filter');
  userEvent.click(allBtn);
  const GG = await screen.findByText('GG', {}, { timeout: 15000 });
  expect(GG).toBeInTheDocument();
});
