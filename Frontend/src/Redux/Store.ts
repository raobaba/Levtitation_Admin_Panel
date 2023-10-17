import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './Reducer/authReducer';

// Combine multiple reducers into a single root reducer
const rootReducer = combineReducers({
  auth: authReducer,
});

// Apply middleware (Redux Thunk) to handle async actions
const middleware = [thunk];

// Create the Redux store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
