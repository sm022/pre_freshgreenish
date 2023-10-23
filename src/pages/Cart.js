import React, { useState } from 'react';
import TabMenu from '../components/TabMenu';
import FruitList from '../components/FruitList';
import TotalPrice from '../components/TotalPrice';
import mockData from '../services/cartMockData.json'
import '../styles/Cart.scss';

function Cart() {

    const [currentTab, setCurrentTab] = useState("국산 과일");
    const [fruits, setFruits] = useState(mockData);
    

    const handleTabChange = (tab) => {
        setCurrentTab(tab);
    }

    return (
        <div className="container">
            <div className="cart-title">장바구니</div>
            <div className="select-instruction">정기 배송 예정일</div>
            <TabMenu onTabChange={handleTabChange}>
                <FruitList currentTab={currentTab} fruits={fruits} setFruits={setFruits} />
            </TabMenu>
            <TotalPrice fruits={fruits}/>
            <button className="submit-button">정기배송 신청하기</button>
        </div>
    );
}

export default Cart;
