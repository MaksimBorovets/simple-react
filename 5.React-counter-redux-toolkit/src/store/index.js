import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './slices/counter';
import authReducer from './slices/auth';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});
