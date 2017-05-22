module.exports = function (name) {
    return `
jest.mock('../../lazyLoading/lazyLoadersMap');
jest.mock("../../translations/loadersMap");

import React from 'react';
import ReactDOM from 'react-dom';
import ${name} from './${name}';
import createStore from '../../redux/createStore';
import createHistory from 'history/createBrowserHistory';
import renderer from 'react-test-renderer';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-intl-redux';

let history;
let store;

beforeEach(() => {

  history = createHistory()
  const initialState = {};
  store = createStore(initialState, history)

})

it('renders without crashing', () => {

  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <${name}/>
      </ConnectedRouter>
    </Provider>
    , div);

});

it('basic snapshot test passes', () => {

  const tree = renderer.create(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <${name}/>
      </ConnectedRouter>
    </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();

});
    `;
}