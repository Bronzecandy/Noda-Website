import React from 'react'

export default function Button({content}) {
  return (
    <button className='relative flex items-center justify-center w-full h-[10vh] sm:h-[20vh] '>
      <img
        src="/image/button.png"
        alt="Button Background"
        className='w-full h-full object-contain'
      />
      <span className='absolute font-robotoSlab text-sm sm:text-xl font-bold mt-[2vh] sm:mt-[5vh] text-[#F0D0C0]'>
        {content}
      </span>
    </button>


  )
}
