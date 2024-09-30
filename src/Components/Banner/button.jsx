import React from 'react'

export default function Button({content}) {
  return (
    <button className='relative flex items-center justify-center w-full h-[10vh]  text-[6px] lg:h-[15vh] lg:hover:h-[20.5vh]
    md:text-xl lg:text-2xl md:h-[12vh] md:hover:h-[15.5vh]'>
      <img
        src="/image/button.png"
        alt="Button Background"
        className='w-full h-full object-contain'
      />
      <span className='absolute font-robotoSlab w-[50%] md:w-[70%] lg:w-[100%] font-bold mt-3 lg:mt-[3vh] text-[#F0D0C0]'>
        {content}
      </span>
    </button>


  )
}
