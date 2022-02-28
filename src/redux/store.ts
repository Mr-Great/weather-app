import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof reducers>;

// export type AppDispatch = typeof store.dispatch;

export default store;
