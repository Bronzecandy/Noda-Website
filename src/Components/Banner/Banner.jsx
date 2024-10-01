import React from 'react';
import Button from './button';

export default function Banner() {
    return (
        <div className="h-[100vh] w-full bg-[url('/image/bg_banner.png')] bg-center bg-no-repeat bg-cover flex items-center justify-center relative">
            {/* Main Banner Image */}
            <div className="flex flex-col items-center justify-center  bg-[url('/image/bg_item_banner.png')] bg-cover bg-no-repeat 
             w-full aspect-[915/775] md:w-3/4 xl:w-2/5 p-8 text-center  mb-8 md:mb-0
             
             ">
                    <div className='h-[55%]'></div>
                   <Button content={"Play Now"} />
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
