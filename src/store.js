import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import configReducer from './features/configSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// reducer combine
const rootReducer = combineReducers({
  user: userReducer,
  config: configReducer,
});


// persist 설정: key 'root'로 모든 스토어 상태를 저장
const persistConfig = {
  key: 'root',
  storage,
};

// rootReducer에 persistReducer를 적용
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // redux-persist 관련 액션을 처리하기 위해 serializableCheck 옵션을 수정
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;