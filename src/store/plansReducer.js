import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = `${process.env.REACT_APP_ENDPOINT}/api/${process.env.REACT_APP_API_VERSION}/sub-plan`;

const initialState = {
  plans: []
};

export const create = createAsyncThunk('plans/create', async (data, thunkAPI) => {
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

export const readAllPlans = createAsyncThunk('plans/readAll', async (thunkAPI) => {
  try {
    const response = await axios.get(`${API_URL}/plans`);
    return response.data;
  } catch (error) {
    const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const plansSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {
    reset: () => {}
  },
  extraReducers: (builder) => {
    builder.addCase(readAllPlans.fulfilled, (state, action) => {
      state.plans = action.payload;
    });
  }
});

// Action creators are generated for each case reducer function
export const { reset } = plansSlice.actions;

export default plansSlice.reducer;
