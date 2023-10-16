import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Use Redux Thunk for async actions
import authReducer from './Reducer/authReducer';
import { formReducer } from './Reducer/formReducer';

// Combine multiple reducers into a single root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
});

// Apply middleware (Redux Thunk) to handle async actions
const middleware = [thunk];

// Create the Redux store
const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

export default store;
