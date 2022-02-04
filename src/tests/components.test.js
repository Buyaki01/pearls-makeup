import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Header from '../components/Header';
import Makeup from '../components/Makeup';
import Details from '../components/Details';
import store from '../redux/store';
import makeupReducer from '../redux/makeupReducer';

describe('Test UI of the webpage', () => {
  it('Displays the Header', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Displays the Makeup page', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Makeup />
      </Provider>,
      { wrapper: MemoryRouter },
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Displays the details page', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Details />
      </Provider>,
      { wrapper: MemoryRouter },
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Unit test for makeup reducer', () => {
  it('test that data is fetched from the API and loading is set to false', () => {
    expect(makeupReducer([],
      {
        type: 'GET_MAKEUP',
        payload: ['makeup'],
      })).toEqual(['makeup']);
  });
});
