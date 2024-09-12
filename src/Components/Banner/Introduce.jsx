import React from 'react';
import Button from './button';

export default function Introduce() {
    return (
        <div className='flex items-center justify-center relative'>
            <div className='relative'>
                <img
                    src="/image/table.png"
                    alt=""
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="200"
                />
                <img
                    src="/image/coin.png"
                    alt=""
                    className='absolute w-[35%] -top-28 bottom-0 -left-32 right-0 m-auto spin'
                    data-aos="slide-left"
                    data-aos-duration="1000"
                    data-aos-offset="200"
                />
            </div>
            <div className='relative' data-aos="slide-right" data-aos-duration="1000" data-aos-offset="200">
                <img src="/image/board2.png" alt="" />
                <div className='absolute top-0 left-[5rem] right-0 bottom-0 m-auto w-[30vw] flex justify-center items-center flex-col gap-4'>
                    <span className='font-rowdies text-3xl font-bold leading-[59.62px] text-center text-[#703519]'>
                        What is NODA ?
                    </span>
                    <span className='font-robotoSlab text-2xl font-normal leading-[47.48px] text-left text-[#703519]'>
                        Nong Dan Online is a game application for mobile phones, developed by Noda game studio. This game uses a cryptocurrency whose exchange is BNB Binance. Nong Dan Online is expected to be a game worth experiencing.
                    </span>
                    <Button content={"Explore Us!"} />
                </div>
            </div>
        </div>
    );
}
