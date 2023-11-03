import { combineReducers, Action } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { useDispatch } from 'react-redux';
import demoSlice from './demoSlice';

const rootReducer = combineReducers({
    demo: demoSlice
});

export type RootState = ReturnType<typeof rootReducer>;
export const store = configureStore({
    reducer: rootReducer
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
