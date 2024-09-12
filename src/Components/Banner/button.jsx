import React from 'react'

export default function Button({content}) {
  return (
      <button className='relative flex items-center justify-center w-[20vw] h-[20vh] rounded-lg'>
        <img src="/image/button.png" alt="Button Background" className='absolute inset-0 w-full h-full object-cover' />
          <span className='relative font-robotoSlab mt-8 text-xl font-bold text-[#F0D0C0]'>{content}</span>
    </button>

  )
}
