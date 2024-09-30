import React from 'react';
import Button from './button';

export default function Banner() {
    return (
        <div className="h-[100vh] w-[99vw] bg-[url('/image/bg_banner.png')] bg-center bg-no-repeat bg-cover flex items-center justify-center relative">
            {/* Main Banner Image */}
            <div className="relative w-[90vw] md:w-[70vw] lg:w-[70vw] xl:w-[45vw] ">
                <img
                    src="/image/bg_item_banner.png"
                    alt="Banner Item"
                    className="w-full h-auto lg:h-[60vh]"
                />

                {/* Button Section */}
                <div className='absolute 
                xl:top-[62%] xl:-left-[35%]
                md:top-[65%] md:-left-[15%]
                top-[65%] -left-[20%]
                sm:top-[65%] sm:-left-[10%]
                lg:top-[65%] lg:-left-[15%] flex justify-center items-center'>
                    <Button content={"Play Now"} />
                </div>
            </div>

            {/* Artboard Section */}
            <div className='absolute inset-x-0 flex bottom-0 justify-center'>
                <img
                    className='w-[100vw] h-[10vh] sm:h-[15vh] lg:h-[20vh]'
                    src='/image/artboard.png'
                    alt="Artboard"
                />
            </div>
            
        </div>
    );
}
