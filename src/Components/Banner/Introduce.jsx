
import React from 'react';
import Button from './button';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init({
    duration: 1000, 
    offset: 200,    
});
export default function Introduce() {
    return (
        <div className=' flex flex-col sm:flex-row items-center justify-center relative space-y-6 md:space-y-0 md:space-x-12'>
            {/* Left Section with Images */}
            <div className='relative '>
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
            <div className="flex flex-col items-center justify-center  bg-[url('/image/board2.png')] bg-cover bg-no-repeat 
             w-full aspect-[1075/925] md:w-1/2 xl:w-2/5 p-8 text-center  mb-8 md:mb-0" data-aos="slide-right" data-aos-duration="1000">
                <span className='font-rowdies  text-xl md:text-xl xl:text-3xl  
                        font-bold leading-tight text-center text-[#703519] w-[90%] ml-[10%]'>
                            What is NODA ?
                </span>
                <span className='font-robotoSlab  text-sm md:text-[10px] 
                lg:text-sm xl:text-xl font-normal  text-left text-[#703519] w-[80%] ml-[10%]'>
                            Nong Dan Online is a game application for mobile phones, developed by Noda game studio. This game uses a cryptocurrency whose exchange is BNB Binance. Nong Dan Online is expected to be a game worth experiencing.
                </span>
                <div className="ml-[10%]" >
                    <Button content={"Contact Us"}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-offset="200" />
                </div>
                
            </div>
        </div>
    );
}