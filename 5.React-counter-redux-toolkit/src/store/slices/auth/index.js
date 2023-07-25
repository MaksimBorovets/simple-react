import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: 'Maksim',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.username = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeName } = authSlice.actions;

export default authSlice.reducer;
