
import React from 'react';
import Button from './button';

export default function Introduce() {
    return (
        <div className=' flex md:flex-row items-center justify-center relative space-y-6 md:space-y-0 md:space-x-12'>
            {/* Left Section with Images */}
            <div className='relative'>
                <img
                    src="/image/table.png"
                    alt="Table"
                    className="w-[80vw] md:w-[40vw]"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="200"
                />
                <img
                    src="/image/coin.png"
                    alt="Coin"
                    className='absolute w-[35%] md:w-[25%] top-0 md:-top-20 bottom-0 left-0 md:-left-32 right-0 m-auto'
                    data-aos="slide-left"
                    data-aos-duration="1000"
                    data-aos-offset="200"
                />
            </div>

            {/* Right Section with Text and Button */}
            <div className='relative md:w-[45%]' data-aos="slide-right" data-aos-duration="1000" data-aos-offset="200">
                <img src="/image/board2.png" alt="Board" className="w-[80vw] md:w-full" />
                <div className='absolute top-1/4 sm:top-0  left-4 xl:left-8 lg:left-[5rem] right-0 bottom-0 m-auto w-[70%] md:w-[60%] flex justify-center items-center flex-col '>
                    <span className='font-rowdies  text-[10px] md:text-xl xl:text-3xl  font-bold leading-tight text-center text-[#703519]'>
                        What is NODA ?
                    </span>
                    <span className='font-robotoSlab  ml-2  text-[7px] md:text-[10px] xl:text-xl font-normal  text-left text-[#703519]'>
                        Nong Dan Online is a game application for mobile phones, developed by Noda game studio. This game uses a cryptocurrency whose exchange is BNB Binance. Nong Dan Online is expected to be a game worth experiencing.
                    </span>
                    <div className='  h-auto'>
                        <Button content={"Explore Us!"} />
                    </div>
                </div>
            </div>
        </div>
    );
}