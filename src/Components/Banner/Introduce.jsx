
import React from 'react';
import Button from './button';

export default function Introduce() {
    return (
        <div className=' flex md:flex-row items-center justify-center relative space-y-6 md:space-y-0 md:space-x-12'>
            {/* Left Section with Images */}
            <div className='relative w-[40%] sm:w-[50%]'>
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
                    className='absolute w-[30%] md:w-[35%] top-0 md:-top-30 bottom-0 left-0 md:-left-32 right-0 m-auto'
                    data-aos="slide-left"
                    data-aos-duration="1000"
                    data-aos-offset="200"
                />
            </div>
            <div className='relative  w-[45%] sm:w-[50%]' data-aos="slide-right" data-aos-duration="1000" data-aos-offset="200">
                <img src="/image/board2.png" alt="Board" className="w-full" />
                <div className='absolute sm:top-1/4 top-[12%]  left-[10%] xl:top-1/4  right-0 bottom-0 m-auto w-[70%] md:w-[60%] '>
                    <div className='relative'>
                        <div className='flex justify-center items-center flex-col'>
                            <span className='font-rowdies  text-[8px] md:text-xl xl:text-3xl  font-bold leading-tight text-center text-[#703519]'>
                                What is NODA ?
                            </span>
                            <span className='font-robotoSlab  ml-2  text-[6px] md:text-[10px] lg:text-sm xl:text-xl font-normal  text-left text-[#703519]'>
                                Nong Dan Online is a game application for mobile phones, developed by Noda game studio. This game uses a cryptocurrency whose exchange is BNB Binance. Nong Dan Online is expected to be a game worth experiencing.
                            </span>
                       </div>
                    </div>
                    <div className='absolute
                        xl:-left-[105%] 
                        -left-[11rem] 
                        sm:-left-[14rem] 
                        lg:-left-[18rem]
                        md:-left-[14rem]
                        '>
                        <Button content={"Explore Us!"} />
                    </div>


                </div>
                
            </div>
        </div>
    );
}