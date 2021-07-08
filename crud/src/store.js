import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  UserReducer,
  AddUserReducer,
  DeleteUserReducer,
} from "./Reducers/UserReducer";
const finalReduce = combineReducers({
  UserReducer: UserReducer,
  AddUserReducer: AddUserReducer,
  DeleteUserReducer: DeleteUserReducer,
});
const composeEnhancers = composeWithDevTools({});
const store = createStore(
  finalReduce,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
