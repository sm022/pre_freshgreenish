import React, { useState } from 'react';
import '../styles/FruitList.scss';
import CheckIcon from './CheckIcon';

function FruitList() {
    const [fruits, setFruits] = useState([
        { id: 1, name: '포도', price: 8000, quantity: 1, deliveryCycle: '주 1회', type: '국산' },
        { id: 2, name: '사과', price: 5000, quantity: 1, deliveryCycle: '주 1회', type: '냉동 수입' },
    ]);
    
    const [selectedFruits, setSelectedFruits] = useState([]);

    const toggleSelectFruit = (id) => {
        setSelectedFruits(prevSelected =>
            prevSelected.includes(id) ? prevSelected.filter(fruitId => fruitId !== id) : [...prevSelected, id]
        );
        console.log(selectedFruits);  // 상태 출력
    };
    
    const handleQuantityChange = (id, change) => {
        setFruits(prevFruits =>
            prevFruits.map(fruit =>
                fruit.id === id ? { ...fruit, quantity: fruit.quantity + change } : fruit
            )
        );
    };

    const handleDeliveryCycleChange = (id, cycle) => {
        setFruits(prevFruits =>
            prevFruits.map(fruit =>
                fruit.id === id ? { ...fruit, deliveryCycle: cycle } : fruit
            )
        );
    };


    return (
        <div className="fruit-list">
            {fruits.map((fruit) => (
                <div key={fruit.id} className="fruit-item">
                    <div className="fruit-selection">
                    <button className={`fruit-select-btn ${selectedFruits.includes(fruit.id) ? 'selected' : ''}`}
                    onClick={() => toggleSelectFruit(fruit.id)}>
                    <CheckIcon isChecked={selectedFruits.includes(fruit.id)} />
                    </button>
                        <button className="fruit-delete-btn">
                            <span className="close-icon"></span>
                        </button>  {/* 삭제 아이콘 버튼 */}
                    </div>
                    {/* <img src={/*과일 이미지 경로*/} alt={fruit.name} className="fruit-image"/> 과일 이미지 추가 */}
                    <span className="fruit-name">{fruit.name}</span>
                    <span className="fruit-price">{fruit.price}원</span> {/* 가격 표시 추가 */}
                    <div className="quantity-control">
                        <button onClick={() => handleQuantityChange(fruit.id, -1)}>-</button>
                        <span>{fruit.quantity}</span>
                        <button onClick={() => handleQuantityChange(fruit.id, 1)}>+</button>
                    </div>
                    <div className="delivery-cycle-control">
                        <select
                            value={fruit.deliveryCycle}
                            onChange={(e) => handleDeliveryCycleChange(fruit.id, e.target.value)}
                        >
                            <option value="주 1회">주 1회</option>
                            <option value="주 2회">주 2회</option>
                            {/* 추가로 필요한 옵션들 */}
                        </select>
                    </div>
                    <div className="fruit-type">{fruit.type}</div> {/* 국산 또는 냉동 수입 표시 */}
                </div>
            ))}
        </div>
    );
}

export default FruitList;
