import React from 'react'

export default function Introduce() {
    return (
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <img src="/image/table.png" alt="" />
                <img src="/image/coin.png" alt="" className='absolute w-[35%]  -top-28 bottom-0 -left-32 right-0 m-auto' />
            </div>
            <div className='relative'>
                <img src="/image/board2.png" alt="" />
                <img src="/image/title.png" alt="" className='absolute  top-[-30rem] bottom-0 left-[10rem] right-0 m-auto w-[40%]' />
                <img src="/image/introduce.png" alt="" className='absolute  top-[-4rem] bottom-0 left-[10rem] right-0 m-auto w-[50%]' />
                <img src="/image/btnExplore.png" alt="" className='absolute  top-[33rem] bottom-0 left-[10rem] right-0 m-auto w-[50%]' />
            </div>
        </div>
    )
}
