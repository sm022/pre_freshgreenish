import { configureStore } from '@reduxjs/toolkit';
import recipientReducer from './recipientSlice';
import paymentReducer from './paymentSlice';

export const store = configureStore({
    reducer: {
        recipient: recipientReducer,
        payment: paymentReducer
    }
});
