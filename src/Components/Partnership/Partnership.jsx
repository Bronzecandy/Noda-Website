
import React from 'react';
import './Partnership.css';

export const Partnership = () => {
    return (
        <div className='PS_container'>
            <div className='PS_left' data-aos="zoom-in-down"></div>
            <div className='PS_right' data-aos="zoom-in-up">
                <div className='PS_title'>
                    <h4>Partnership Program</h4>
                </div>
                <div className='PS_content'>
                    <p>Collaborate with KOLs and streamers to promote the game and organize livestream events, giveaways, etc.</p>
                    <p>Join the partnership program to receive valuable gifts and special offers!</p>
                </div>
                <a href="#">
                    <div className='PS_button'>
                        <p>Contact us!</p>
                    </div>
                </a>
            </div>
        </div>
    );
};