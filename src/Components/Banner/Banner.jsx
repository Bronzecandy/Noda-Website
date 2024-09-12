import React from 'react';

export default function Banner() {
    return (
        <div className="h-[100vh] w-[100vw] bg-[url('/image/bg_banner.png')] bg-center bg-no-repeat bg-cover flex items-center justify-center relative">
            <img src="/image/bg_item_banner.png" alt="" className="w-[80vw] h-[70vh] md:w-[45vw]  lg:w-[50vw] " />
            <div className='absolute inset-x-0 flex bottom-24 md:bottom-[4rem] lg:bottom-48 justify-center'>
                <button className='w-[20vw] h-[20vh]  p-0'>
                    <img src="/image/banner_button.png" alt="Button" className='w-full h-full object-cover' />
                </button>
            </div>
            <div className='absolute inset-x-0 flex bottom-0 justify-center'>
                <img className='w-[100vw] h-[20vh]' src='/image/artboard.png' />
            </div>
        </div>
    );
}
