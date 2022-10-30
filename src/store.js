import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
  };
  const persistedReducer = persistReducer(persistConfig, counterReducer);

 export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
  });