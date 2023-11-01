import React from 'react';
import '../styles/DeliveryPopup.scss';

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h2>배송지 등록/수정</h2>
        <button className="close-btn" onClick={onClose}>X</button>
        <form>
          {/* 각종 입력 필드와 버튼 등의 요소 */}
          <input type="text" placeholder="배송지명" />
          <input type="text" placeholder="수령인" required />
          <div className="address">
            <input type="text" placeholder="주소" required />
            <button>주소검색</button>
          </div>
          <input type="text" placeholder="상세주소" required />
          <input type="text" placeholder="연락처" required />
          <div className="actions">
            <button type="submit">저장</button>
            <button type="button" onClick={onClose}>취소</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Popup;
