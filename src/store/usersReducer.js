import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = `${process.env.REACT_APP_ENDPOINT}/api/${process.env.REACT_APP_API_VERSION}/user`;

const initialState = {
  users: []
};

export const readAllUsers = createAsyncThunk('users/allUsers', async (thunkAPI) => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    reset: () => {}
  },
  extraReducers: (builder) => {
    builder.addCase(readAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  }
});

// Action creators are generated for each case reducer function
export const { reset } = userSlice.actions;

export default userSlice.reducer;
