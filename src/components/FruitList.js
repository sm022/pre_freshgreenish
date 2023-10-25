import React, { useState } from 'react';
import '../styles/FruitList.scss';
import CheckIcon from './CheckIcon';
import DeleteIcon from './DeleteIcon';
import QuantityControl from './QuantityControl';
import mockData from '../services/cartMockData.json'

function FruitList({ currentTab, fruits, setFruits }) {

    const getFilteredFruits = () => {
        if (currentTab === "국산 과일") {
            return fruits.filter(fruit => fruit.type === "국산");
        } else if (currentTab === "냉동 과일") {
           return fruits.filter(fruit => fruit.type === "냉동");
        } else if (currentTab === "수입 과일") {
            return fruits.filter(fruit => fruit.type === "수입");
        } else {
            return fruits;
        }
    }
    
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

    const handleDeleteFruit = (id) => {
        const newFruits = fruits.filter(fruit => fruit.id !== id);
        setFruits(newFruits);
    };


    return (
        <div className="fruit-list">
            {getFilteredFruits().map((fruit) => (
                <div key={fruit.id} className="fruit-item">
                    <div className="fruit-selection">
                    <button className={`fruit-select-btn ${selectedFruits.includes(fruit.id) ? 'selected' : ''}`}
                    onClick={() => toggleSelectFruit(fruit.id)}>
                    <CheckIcon isChecked={selectedFruits.includes(fruit.id)} />
                    </button>
                    </div>
                    <img src={fruit.image} alt={fruit.name} className="fruit-image"/> {/*과일 이미지 추가 */}
                    <span className="fruit-name">{fruit.name}</span>
                    <QuantityControl value={fruit.quantity} onChange={(change) => handleQuantityChange(fruit.id, change)} />
                    <div className="delivery-cycle-control">
                        <select
                            value={fruit.deliveryCycle}
                            onChange={(e) => handleDeliveryCycleChange(fruit.id, e.target.value)}
                        >
                            <option value="주 1회">주 1회</option>
                            <option value="주 2회">주 2회</option>
                            {/* 추가로 필요한 옵션들 */}
                        </select>
                    <span className="fruit-price">{fruit.price}원</span> {/* 가격 표시 추가 */}
                    <DeleteIcon onDelete={() => handleDeleteFruit(fruit.id)} />
                    </div>
                    <div className="fruit-type"></div> {/* 국산 또는 냉동 수입 표시 */}
                </div>
            ))}
        </div>
    );
}

export default FruitList;
