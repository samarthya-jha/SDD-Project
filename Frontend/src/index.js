import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './components/store/reducer'

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if(serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.log("Others");
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log("Storage errors");
  }
};

const persistedState = loadState();

const store = createStore(
  // persistedState,
  reducer,
  persistedState
);

store.subscribe(() => {
  saveState({
    userInfo:store.getState().userInfo,
    check:store.getState().check,
    testInfo:store.getState().testInfo,
    centreList:store.getState().centreList,
    slots:store.getState().slots,
    CentreValue:store.getState().CentreValue,
    centerInfo:store.getState().centerInfo,
    bookInfo:store.getState().bookInfo,
    loading:store.getState().loading,
    rfp:store.getState().rfp,
  });
});



ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  ,document.getElementById('root')
);

