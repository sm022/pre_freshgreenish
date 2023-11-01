import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAddress, setAddress } from '../slices/RecipientInfoSlice'; // 주소 정보를 위한 Redux slice
// 필요한 다른 slices도 여기에 추가
import CheckIcon from '../components/CheckIcon';
// 다른 필요한 컴포넌트들도 여기에 추가
import '../styles/Payment.scss'

function Payment() {
    const dispatch = useDispatch();

    // Recipient Info
    const address = useSelector(selectAddress); // 받는사람 정보에서 주소를 가져옵니다.
    // 다른 필요한 정보들도 여기에 추가

    const handleAddressChange = (e) => {
        dispatch(setAddress(e.target.value)); // 주소 정보를 업데이트합니다.
    }

    // 다른 handle 함수들도 여기에 추가

    return (
        <div className="container">
            {/* 받는사람 정보 */}
            <div className="recipient-info-section">
                <h2>결제정보</h2>
                <div className="recipient-address">
                    <label>받는주소: </label>
                    <input 
                        type="text" 
                        value={address} 
                        onChange={handleAddressChange} 
                        placeholder="주소를 입력하세요" 
                    />
                </div>
                {/* 여기에 다른 정보 입력 항목들 추가 */}
            </div>

            {/* 결제방식 선택 */}
            <div className="payment-method-section">
                <h2>결제수단</h2>
                <div className="payment-method-icons">
                    <CheckIcon /> 
                    {/* 다른 아이콘들도 여기에 추가 */}
                </div>
            </div>

            {/* 총 결제금액 */}
            <div className="total-price-section">
                {/* 여기에 총 금액 표시 컴포넌트나 로직 추가 */}
            </div>

            {/* 결제 버튼 */}
            <button className="submit-button">결제하기</button>
        </div>
    );
}

export default Payment;
