import React, { useState } from 'react';
// SVG 파일 경로를 직접 가져옵니다.
import DecreaseIconPath from '../assets/icon/Disabled=true.svg'; 
import IncreaseIconPath from '../assets/icon/Disabled=true-1.svg';
import DecreaseActiveIconPath from '../assets/icon/Disabled=false.svg'; 
import IncreaseActiveIconPath from '../assets/icon/Disabled=false-1.svg'; 
import '../styles/QuantityControl.scss';

function QuantityControl({ value, onChange }) {
    const [quantity, setQuantity] = useState(value);

    const increaseQuantity = () => {
        onChange(1);
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        if(quantity > 1) {
            onChange(-1);
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div className="quantity-control">
            <div className="decrease" onClick={decreaseQuantity}>
                {/* img 태그를 사용하여 SVG 이미지를 렌더링합니다. */}
                <img src={quantity > 1 ? DecreaseActiveIconPath : DecreaseIconPath} alt="Decrease" />
            </div>
            <div className="quantity-value">{quantity}</div>
            <div className="increase" onClick={increaseQuantity}>
                <img src={IncreaseActiveIconPath} alt="Increase" />
            </div>
        </div>
    );
}

export default QuantityControl;
