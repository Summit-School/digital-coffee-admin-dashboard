import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = `${process.env.REACT_APP_ENDPOINT}/api/${process.env.REACT_APP_API_VERSION}/sub-cat`;

const initialState = {
  categories: []
};

export const create = createAsyncThunk('planCategories/create', async (data, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}/create`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const readAll = createAsyncThunk('planCategories/readAll', async (thunkAPI) => {
  try {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data;
  } catch (error) {
    const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const planCatsSlice = createSlice({
  name: 'planCategories',
  initialState,
  reducers: {
    reset: () => {}
  },
  extraReducers: (builder) => {
    builder.addCase(readAll.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  }
});

// Action creators are generated for each case reducer function
export const { reset } = planCatsSlice.actions;

export default planCatsSlice.reducer;
