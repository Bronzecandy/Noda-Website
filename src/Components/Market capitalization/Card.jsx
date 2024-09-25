import React from 'react';
import background from '../../assets/Artboard_113_1.png'
const Card = ({ title, content, image, reverse }) => {
    return (
        <div className='relative w-[25rem] h-[21rem] overflow-hidden bg-cover bg-center text-[#703519]'  style={{ backgroundImage: `url(${background})` }}>
            <div className={`flex justify-between items-center p-6 h-full  ${reverse ? 'flex-row-reverse' : 'flex-row'} `}
               >
                <div className={`flex-1 text-left ${reverse ? 'pr-5' : 'pl-8'}`}>
                    <h2 className="text-xl font-bold text-brown-900">{title}</h2>
                    <p className="text-brown-900 mt-2 text-sm">{content}</p>
                </div>
                <div className="flex-none">
                    <img src={image} alt="Character" className="w-36 h-auto" />
                </div>
            </div>
        </div>
    );
};

export default Card;
