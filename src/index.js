import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
//manifast


const initState = {
  siteName: 'url'
}

const reducer = (state = initState, action) => {

  switch (action.type) {
    case "CHANGE_SITE_NAME":
      state = { ...state, siteName: action.payload }
      break;
    case "WEATHER":
      state = { ...state, weather: action.payload }
      break;
    case "getimg":
      state = { ...state, background: action.payload }
      break;
      case "QOUET":
        state = { ...state, Qu: action.payload }
        break;
  }
  return state;
}


const store = createStore(reducer, {}, applyMiddleware(thunk))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

