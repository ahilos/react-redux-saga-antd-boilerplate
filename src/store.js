import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import createSagaMiddleware, { END } from "redux-saga";
import rootSaga from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState = {}) => {
  const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          shouldHotReload: false
        })
      : compose;

  const middlewares = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(rootReducer(), composeEnhancers(...enhancers));
  store.runSaga = sagaMiddleware.run;
  store.runSaga(rootSaga);

  store.asyncReducers = {};
  store.close = () => store.dispatch(END);

  if (module.hot) {
    module.hot.accept("./reducers", reducerModule => {
      const createReducers = reducerModule.default;
      const nextReducers = createReducers(store.asyncReducers);
      store.replaceReducer(nextReducers);
    });
  }

  return store;
};

export default configureStore;
