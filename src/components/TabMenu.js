import React, { useState } from 'react';
import '../styles/TabMenu.scss';

function TabMenu(props) {
    const [activeTab, setActiveTab] = useState(null);

    const handleTabClick = (tab) => {
        if (activeTab === tab) {
            setActiveTab(null);  // 이미 활성화된 탭을 다시 클릭하면 내용을 접는다.
        } else {
            setActiveTab(tab);
            if (props.onTabChange) {  // 탭이 변경되면 부모 컴포넌트에 알림
                props.onTabChange(tab);
            }
        }
    }

    return (
        <div className="tab-menu">
            {['국산 과일', '냉동 과일', '수입 과일'].map((tab) => (
                <div key={tab} className={activeTab === tab ? 'tab-item active' : 'tab-item'}>
                    <button onClick={() => handleTabClick(tab)}>{tab}</button>
                    {activeTab === tab && props.children}
                </div>
            ))}
        </div>
    );
}

export default TabMenu;
