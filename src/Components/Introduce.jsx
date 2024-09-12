import React from 'react'

export default function Introduce() {
  return (
    <div className='flex items-center justify-center'>
        <div className='relative'>
            <img src="/image/table.png" alt="" />
              <img src="/image/coin.png" alt="" className='absolute w-[35%]  -top-28 bottom-0 -left-32 right-0 m-auto' />
        </div>
        <div className='relative'>
          <img src="/image/board2.png" alt="" className='w-[1201px] h-[925px]' />
          <div className='absolute top-0 left-[5rem] right-0 bottom-0 m-auto w-[30vw] flex justify-center items-center flex-col gap-4 '>
            <h1 className='font-rowdies text-4xl font-bold leading-[59.62px] text-center text-[#703519]'>What is NODA ?</h1>
            <h2 className='font-robotoSlab text-3xl font-normal leading-[47.48px] text-left'>Nong Dan Online is a game application for mobile phones, developed by Noda game studio. This game uses a cryptocurrency whose exchange is BNB Binance. Nong Dan Online is expected to be a game worth experiencing.</h2>
          <button className='w-[473.47px] h-[222.66px] top-[5rem] left-[1083px]  absolutep-0'>
            <img src="/image/btnExplore.png" alt="Button" className='w-full h-full object-cover' />
            </button>
          </div>
        </div>
      </div>
  )

}
