import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = `${process.env.REACT_APP_ENDPOINT}/api/${process.env.REACT_APP_API_VERSION}/admin`;
const user = JSON.parse(localStorage.getItem('digital-coffee-user'));

const initialState = {
  user: user ? user : null
};

// login admin
export const login = createAsyncThunk('authentication/login', async (data, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}/login`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.data) {
      localStorage.setItem('digital-coffee-user', JSON.stringify(response.data.token));
    }

    return response.data;
  } catch (error) {
    const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk('authentication/logout', async () => {
  return localStorage.removeItem('digital-coffee-user');
});

export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    reset: () => {}
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  }
});

// Action creators are generated for each case reducer function
export const { reset } = authSlice.actions;

export default authSlice.reducer;
