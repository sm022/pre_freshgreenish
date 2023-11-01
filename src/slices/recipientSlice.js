import { createSlice } from '@reduxjs/toolkit';
import mockData from '../services/PayMockData.json';

export const recipientSlice = createSlice({
    name: 'recipient',
    initialState: mockData.recipient,
    reducers: {
        setRecipientInfo: (state, action) => {
            return action.payload;
        }
    }
});

export const { setRecipientInfo } = recipientSlice.actions;
export default recipientSlice.reducer;
