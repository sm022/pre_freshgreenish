import React, { useState } from 'react';
import '../styles/TabMenu.scss';

function TabMenu() {
    const [activeTab, setActiveTab] = useState('국산');

    return (
        <div className="tab-menu">
            {['국산', '냉동', '수입'].map((tab) => (
                <button 
                    key={tab} 
                    className={activeTab === tab ? 'active' : ''} 
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}

export default TabMenu;
