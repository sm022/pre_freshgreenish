import { createSlice } from '@reduxjs/toolkit';
import mockData from '../services/PayMockData.json';

const deliveryInfoSlice = createSlice({
  name: 'deliveryInfo',
  initialState: mockData,
  reducers: {
    updateDeliveryInfo: (state, action) => {
      const { name, value } = action.payload;
      if (name in state.user) {
        state.user[name] = value;
      }
    },
  }
});

export const { updateDeliveryInfo } = deliveryInfoSlice.actions;
export const deliveryInfoReducer = deliveryInfoSlice.reducer;
