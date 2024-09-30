
import React, { useState } from 'react';
import './ExPro.css';
import Gem from '../../assets/gem.png';
import background_ExPro_Old from '../../assets/background_ExPro.png';
import background_ExPro_New from '../../assets/background_ExPro.png';
import background_ExPro_Season from '../../assets/BG.png';

export const ExPro = () => {
    const [activeTab, setActiveTab] = useState('New');

    const [imageSrc, setImageSrc] = useState(background_ExPro_New); // Ảnh mặc định ban đầu
    const [fade, setFade] = useState(false); // Trạng thái fade ảnh
    const [fadeContent, setFadeContent] = useState(false); // Trạng thái fade nội dung

    const handleTabClick = (tab) => {
        setActiveTab(tab);

        // Gây hiệu ứng fade trước khi đổi ảnh
        setFade(true);
        setFadeContent(true);

        // Delay để tạo hiệu ứng fade
        setTimeout(() => {
            // Đổi ảnh dựa trên tab
            if (tab === 'New') {
                setImageSrc(background_ExPro_Old);
            } else if (tab === 'Old') {
                setImageSrc(background_ExPro_New);
            } else if (tab === 'Seasons') {
                setImageSrc(background_ExPro_Season);
            }
            setFade(false); // Gỡ hiệu ứng fade sau khi ảnh được đổi
        }, 100); // Thời gian delay khớp với thời gian của hiệu ứng CSS

        // Điều chỉnh thời gian fade content để nó nhanh hơn ảnh
        setTimeout(() => {
            setFadeContent(false);
        }, 100); // Thời gian delay cho nội dung
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
                        className={`${fade ? 'ExPro_fade_out' : 'ExPro_fade_in'}`} // Thêm lớp fade
                    />
                </div>
                <div className='ExPro_menu'>
                    <a onClick={() => handleTabClick('New')} className={`btn ${activeTab === 'New' ? 'active' : ''}`}>New</a>
                    <img src={Gem} />
                    <a onClick={() => handleTabClick('Old')} className={`btn ${activeTab === 'Old' ? 'active' : ''}`}>Old</a>
                    <img src={Gem} />
                    <a onClick={() => handleTabClick('Seasons')} className={`btn ${activeTab === 'Seasons' ? 'active' : ''}`}>Seasons</a>
                </div>
                <div className={`ExPro_content ${fadeContent ? 'ExPro_fade_out' : 'ExPro_fade_in'}`}>
                    {activeTab === 'New' && (
                        <div className='content_new'>
                            <p >Get a 20% discount when purchasing Rabbit NFT within 7 days of creating your account!</p>
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