import { configureStore } from '@reduxjs/toolkit';
import recipientReducer from '../slices/recipientSlice';
import paymentReducer from '../slices/paymentSlice';
import deliveryInfoReducer from '../slices/deliveryInfoSlice';
import recipientInfoReducer from '../slices/RecipientInfoSlice';
import popupReducer from '../slices/popupSlice';

export const store = configureStore({
    reducer: {
        recipient: recipientReducer,
        payment: paymentReducer,
        deliveryInfo: deliveryInfoReducer,
        recipientInfo: recipientInfoReducer,
        popup: popupReducer
    }
});
