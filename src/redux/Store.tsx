import { configureStore, combineReducers } from '@reduxjs/toolkit';
import themeReducer from '../redux/slices/ThemeSlice';
import { persistStore, persistReducer } from 'redux-persist';


const rootReducer = combineReducers({
  theme: themeReducer,

});

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);

// Types for state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
