import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { addReducer } from "../reducers/addReducer";
import { funtionalReducer } from "../reducers/funtionalReducer";
import { loginReducer } from "../reducers/loginReducer";
import { registerReducer } from "../reducers/registerReducer";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  login: loginReducer,
  register: registerReducer,
  add: addReducer,
  funtional: funtionalReducer

});

export const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunk)))