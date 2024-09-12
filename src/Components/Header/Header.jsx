import React from 'react';

export default function Header() {
    return (
        <div className='w-[100vw] fixed mt-5 top-0 left-0 flex justify-center items-center z-50'>
            <img
                className='w-[80vw]  h-[5vh] md:h-[10vh] lg:h-[10vh]'
                src="/image/nav.png"
                alt="Navigation"
            />
        </div>
    );
}
