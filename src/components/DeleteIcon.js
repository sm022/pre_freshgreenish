import React from 'react';

function DeleteIcon({ onDelete }) {
    return (
        <button className="delete-icon-btn" onClick={onDelete}>
            <span className="close-icon"></span> {/* 실제 아이콘을 넣으셔야 합니다 */}
        </button>
    );
}

export default DeleteIcon;
