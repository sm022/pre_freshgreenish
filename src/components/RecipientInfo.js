import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAddress, setRequest, selectAddress, selectRequest } from '../slices/RecipientInfoSlice';
import '../styles/RecipientInfo.scss';
import Popup from '../components/DeliveryPopup';
import { openPopup, closePopup } from '../slices/popupSlice';

const RecipientInfo = () => {
    const dispatch = useDispatch();
    const address = useSelector(selectAddress);
    const request = useSelector(selectRequest);
    const isPopupOpen = useSelector(state => state.popup.isOpen);


    return (
        <div className="recipientInfo">
            <h2>배송정보</h2>
            <div className="infoField">
                <label>배송 주소</label>
                <input 
                    type="text" 
                    value={address} 
                    onChange={(e) => dispatch(setAddress(e.target.value))} 
                    placeholder="배송 주소를 입력하세요" 
                />
                <button onClick={() => dispatch(openPopup())}>배송정보변경</button>
                <Popup isOpen={isPopupOpen} onClose={() => dispatch(closePopup())} />
            </div>
            <div className="infoField">
                <label>배송시 요청사항</label>
                <input 
                    type="text" 
                    value={request} 
                    onChange={(e) => dispatch(setRequest(e.target.value))} 
                    placeholder="요청사항을 입력하세요" 
                />
                <button>🔍</button> 
                {/* 이 버튼의 팝업 로직은 현재 필요하지 않은 것 같아서 삭제했습니다. */}
            </div>
            {/* 기타 필드들 */}
        </div>
    );
}

export default RecipientInfo;
