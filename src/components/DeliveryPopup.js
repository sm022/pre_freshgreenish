import React from 'react';
import '../styles/DeliveryPopup.scss';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { updateDeliveryInfo } from '../slices/deliveryInfoSlice'; 

const DeliveryPopup = ({ isOpen, onClose }) => {

  const dispatch = useDispatch();
  const deliveryInfo = useSelector(state => state.deliveryInfo); // 상태 선택

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateDeliveryInfo({ name, value })); // 액션 디스패치
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/deliveryInfo', deliveryInfo.user);
      alert('배송지 정보가 저장되었습니다.');
    } catch (error) {
      console.error('Error saving delivery info', error);
      alert('배송지 정보 저장 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h2>배송지 등록/수정</h2>
        <button className="close-btn" onClick={onClose}>X</button>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={deliveryInfo.name} onChange={handleChange} placeholder="배송지명" />
          <input type="text" name="recipient" value={deliveryInfo.recipient} onChange={handleChange} placeholder="수령인" required />
          <div className="address">
            <input type="text" name="address" value={deliveryInfo.address} onChange={handleChange} placeholder="주소" required />
            <button>주소검색</button>
          </div>
          <input type="text" name="detailAddress" value={deliveryInfo.detailAddress} onChange={handleChange} placeholder="상세주소" required />
          <input type="text" name="contact" value={deliveryInfo.contact} onChange={handleChange} placeholder="연락처" required />
          <div className="actions">
            <button type="submit">저장</button>
            <button type="button" onClick={onClose}>취소</button>
          </div>
        </form>
      </div>
    </div>
  );
}


export default DeliveryPopup;
