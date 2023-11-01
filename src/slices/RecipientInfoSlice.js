import { createSlice } from '@reduxjs/toolkit';
import mockData from '../services/PayMockData.json';

export const recipientInfoSlice = createSlice({
  name: 'recipientInfo',
  initialState: mockData,
  reducers: {
    setAddress: (state, action) => {
      state.user.address = action.payload;  // mockData의 구조에 따라서 변경
    },
    setDetailAddress: (state, action) => {
      state.user.detailAddress = action.payload;  // 예시로 detailAddress를 설정하는 액션 추가
    },
    setPaymentMethod: (state, action) => {
      state.payment.method = action.payload;  // payment의 method를 설정하는 액션 예시
    }
  
  }
});

export const { setAddress, setDetailAddress, setPaymentMethod } = recipientInfoSlice.actions;

export const selectAddress = state => state.recipientInfo.user.address;
export const selectDetailAddress = state => state.recipientInfo.user.detailAddress;  // detailAddress를 가져오는 셀렉터 예시
export const selectPaymentMethod = state => state.recipientInfo.payment.method;  // payment method를 가져오는 셀렉터 예시

export default recipientInfoSlice.reducer;
