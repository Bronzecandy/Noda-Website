import React from 'react'
export default function Button({content}) {
  return (
    <div className="mt-2 lg:mt-4 bg-[url('/image/button.png')] bg-cover bg-no-repeat text-white  rounded-lg h-20 w-44 lg:h-32 lg:w-56 transition-transform hover:scale-105 duration-300 flex justify-center items-center">
      <p className='text-[#FBEDD0] text-sm lg:text-base pt-[2.25rem] lg:pt-[1.75rem]'>{content}</p>
    </div>
  )
}
