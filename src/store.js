import { legacy_createStore as createStore,applyMiddleware, compose} from "redux";
 
import reducer from "./slices/Cal_slice";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer ,composeEnhancers(
    applyMiddleware()
  ));

console.log(store.getState()) 

export default store;

 