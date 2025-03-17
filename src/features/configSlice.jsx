import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isTestMode: false,
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setTestMode(state, action) {
      state.isTestMode = action.payload;
    },
  },
});

export const { setTestMode } = configSlice.actions;
export default configSlice.reducer;