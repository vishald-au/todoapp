import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isSignedIn: true,
    userData: null,
    allData: null,
  },
  reducers: {
    setSignedIn: (state, action) => {
      state.isSignedIn = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setAllData: (state, action) => {
      state.allData = action.payload;
    },
  },
});

export const { setSignedIn, setUserData, setAllData } = userSlice.actions;

export const selectSignedIn = (state) => state.user.isSignedIn;
export const selectUserData = (state) => state.user.userData;
export const selectAllData = (state) => state.user.allData;

export default userSlice.reducer;

