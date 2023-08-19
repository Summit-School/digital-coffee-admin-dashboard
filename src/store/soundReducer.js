import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = `${process.env.REACT_APP_ENDPOINT}/api/${process.env.REACT_APP_API_VERSION}/sound`;

const initialState = {
  sounds: []
};

export const upload = createAsyncThunk('sound/upload', async (data, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}/upload`, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const readAllSounds = createAsyncThunk('sound/readAllSounds', async (thunkAPI) => {
  try {
    const response = await axios.get(`${API_URL}/read`);
    return response.data;
  } catch (error) {
    const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const soundSlice = createSlice({
  name: 'sound',
  initialState,
  reducers: {
    reset: () => {}
  },
  extraReducers: (builder) => {
    builder.addCase(readAllSounds.fulfilled, (state, action) => {
      state.sounds = action.payload;
    });
  }
});

// Action creators are generated for each case reducer function
export const { reset } = soundSlice.actions;

export default soundSlice.reducer;
