import { Dispatch } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";

const store = createStore(reducers, applyMiddleware(thunk));

const dispatch: Dispatch<any> = store.dispatch;

if ((module as any).hot) {
  // Enable Webpack hot module replacement for reducers
  (module as any).hot.accept("./reducers", () => {
    const nextRootReducer = require("./reducers/index");
    store.replaceReducer(nextRootReducer);
  });
}

export default store;

export { dispatch };
