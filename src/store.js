import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import configReducer from './features/configSlice';

const store = configureStore({
  reducer: {
    user: userReducer, 
    config: configReducer,
  },
});

export default store;