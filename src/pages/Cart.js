import React from 'react';
import TabMenu from '../components/TabMenu';
import FruitList from '../components/FruitList';
import TotalPrice from '../components/TotalPrice';
import '../styles/Cart.scss';

function Cart() {
    return (
        <div className="container">  {/* container 스타일 적용 */}
            <div className="cart-title">장바구니</div> {/* cart-title 스타일 적용 */}
            <div className="select-instruction">정기 배송 예정일</div> {/* select-instruction 스타일 적용 */}
            <TabMenu>
            <FruitList />
            </TabMenu>
            <TotalPrice />
            <button className="submit-button">정기배송 신청하기</button> {/* submit-button 스타일 적용 */}
        </div>
    );
}

export default Cart;
