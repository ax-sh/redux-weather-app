import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

const sagaMiddleware = createSagaMiddleware({});
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware
  .run(rootSaga)
  .toPromise()
  .catch((e) => {
    console.error({
      message: e.message,
      source: "sagaError",
      stacktrace: e.sagaStack,
    });
    store.dispatch({ type: "ERROR", payload: e });
  });

export default store;
