import { createSlice } from '@reduxjs/toolkit';
import mockData from '../services/PayMockData.json';

export const paymentSlice = createSlice({
    name: 'payment',
    initialState: mockData.payment,
    reducers: {
        setPaymentMethod: (state, action) => {
            state.method = action.payload;
        },
        setPaymentAmount: (state, action) => {
            state.amount = action.payload;
        },
        toggleTermsAgreement: (state) => {
            state.termsAgreed = !state.termsAgreed;
        }
    }
});

export const { setPaymentMethod, setPaymentAmount, toggleTermsAgreement } = paymentSlice.actions;
export default paymentSlice.reducer;
