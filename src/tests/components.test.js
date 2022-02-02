import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Header from '../components/Header';
import Makeup from '../components/Makeup';
import Details from '../components/Details';
import store from '../redux/store';

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
    const tree = renderer.create(<Details />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
