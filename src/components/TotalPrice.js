import React from 'react';
import '../styles/TotalPrice.scss';

function TotalPrice({ fruits }) {
    // fruits가 존재하지 않거나 배열이 아닌 경우, totalPrice를 0으로 초기화
    if (!fruits || !Array.isArray(fruits)) {
        return (
            <div className="total-price">
                <span>구매 예정가: 0원</span>
            </div>
        );
    }

    const totalPrice = fruits.reduce((acc, fruit) => acc + fruit.price * fruit.quantity, 0);

    return (
        <div className="total-price">
            <span>구매 예정가: {totalPrice}원</span>
        </div>
    );
}

export default TotalPrice;
