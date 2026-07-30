
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },

    logout: (state) => {
      state.user = null;
    },

    resetAuth: () => initialState,
  },
});

export const {
  setLoading,
  setUser,
  logout,
  resetAuth,
} = authSlice.actions;

export default authSlice.reducer;