
import React, { useState } from 'react';
import './ExPro.css';
import Gem from '../../assets/gem.png';
import background_ExPro from '../../assets/background_ExPro.png';

export const ExPro = () => {
    const [activeTab, setActiveTab] = useState('New');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='ExPro_container'>
            <div className='ExPro_background'>
                <div className='ExPro_title'>
                    <h4>Exciting Promotions at Nông Dân Online</h4>
                </div>
                <img
                    src={background_ExPro}
                    alt="Promotion"
                    className="ExPro_img"
                />
                <div className='ExPro_menu'>
                    <a onClick={() => handleTabClick('New')} className={activeTab === 'New' ? 'active' : ''}>New</a>
                    <img src={Gem} />
                    <a onClick={() => handleTabClick('Old')} className={activeTab === 'Old' ? 'active' : ''}>Old</a>
                    <img src={Gem} />
                    <a onClick={() => handleTabClick('Seasons')} className={activeTab === 'Seasons' ? 'active' : ''}>Seasons</a>
                </div>
                <div className='ExPro_content'>
                    {activeTab === 'New' && (
                        <div className='content_new'>
                            <p>Get a 20% discount when purchasing Rabbit NFT within 7 days of creating your account!</p>
                            <p>Join our referral program to earn commissions when your friends purchase Rabbit NFT or participate in in-game activities!</p>
                        </div>
                    )}
                    {activeTab === 'Old' && (
                        <div className='content_old'>
                            <p>VIP Rewards: Increased Rabbit earnings, reduced transaction fees, etc.</p>
                            <p>In-game Events: Receive valuable rewards like rare, legendary, and mythical Rabbit NFTs, etc.</p>
                            <p>Appreciation Program: Receive special appreciation gifts from Nông Dân Online!</p>
                        </div>
                    )}
                    {activeTab === 'Seasons' && (
                        <div className='content_seasons'>
                            <p>Lunar New Year Promotion: Discounts on Rabbit NFTs, in-game item giveaways, etc.</p>
                            <p>Christmas Promotion: Mini-games, lucky draws, etc.</p>
                            <p>Summer Promotion: Discounts on Rabbit NFT purchases, etc.</p>
                        </div>
                    )}
                </div>
                <div className='ExPro_footer'>
                    <p>Don't miss the chance to receive valuable gifts and special offers!</p>
                </div>
            </div>
        </div>
    );
};