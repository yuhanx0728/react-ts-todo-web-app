import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux';
import reducer from './store/reducer';

const store: Store<TodoState, TodoAction> & {
  dispatch: DispatchType;
} = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
