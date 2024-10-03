import React, { useState } from 'react';
import './ExPro.css';
import Gem from '../../assets/gem.png';
import background_ExPro_Old from '../../assets/background_ExPro.png';
import background_ExPro_New from '../../assets/background_ExPro.png';
import background_ExPro_Season from '../../assets/BG.png';

export const ExPro = () => {
    const [activeTab, setActiveTab] = useState('New');
    const [imageSrc, setImageSrc] = useState(background_ExPro_New); 
    const [isImageTransitioning, setIsImageTransitioning] = useState(false); // Trạng thái chuyển ảnh
    const [isContentTransitioning, setIsContentTransitioning] = useState(false); // Trạng thái chuyển nội dung

    const handleTabClick = (tab) => {
        if (tab === activeTab) return; // Ngăn việc thay đổi tab trùng lặp

        // Bắt đầu hiệu ứng fade-out cho ảnh và nội dung
        setIsImageTransitioning(true);
        setIsContentTransitioning(true);

        // Chờ hoàn tất hiệu ứng fade-out trước khi đổi nội dung
        setTimeout(() => {
            setActiveTab(tab);
            if (tab === 'New') {
                setImageSrc(background_ExPro_New);
            } else if (tab === 'Old') {
                setImageSrc(background_ExPro_Old);
            } else if (tab === 'Seasons') {
                setImageSrc(background_ExPro_Season);
            }

            // Kết thúc hiệu ứng fade-in sau khi ảnh và nội dung đã được thay đổi
            setTimeout(() => {
                setIsImageTransitioning(false);
                setIsContentTransitioning(false);
            }, 300); // Thời gian chuyển đổi ảnh và nội dung mới (match với duration CSS)
        }, 300); // Thời gian cho hiệu ứng fade-out
    };

    return (
        <div className='ExPro_container' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className='ExPro_background'>
                <div className='ExPro_title'>
                    <h4>Exciting Promotions at Nông Dân Online</h4>
                </div>
                <div className='ExPro_img'>
                    <img
                        src={imageSrc}
                        className={`ExPro_img_transition ${isImageTransitioning ? 'fade-out' : 'fade-in'}`} 
                    />
                </div>
                <div className='ExPro_menu'>
                    <a onClick={() => handleTabClick('New')} className={`btn ${activeTab === 'New' ? 'active' : ''}`}>New</a>
                    <img src={Gem} />
                    <a onClick={() => handleTabClick('Old')} className={`btn ${activeTab === 'Old' ? 'active' : ''}`}>Old</a>
                    <img src={Gem} />
                    <a onClick={() => handleTabClick('Seasons')} className={`btn ${activeTab === 'Seasons' ? 'active' : ''}`}>Seasons</a>
                </div>
                <div className={`ExPro_content ${isContentTransitioning ? 'fade-out' : 'fade-in'}`}>
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
