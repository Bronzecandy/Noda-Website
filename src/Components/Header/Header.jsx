import React from 'react';

export default function Header() {
    return (
        <div className='w-[100vw] fixed mt-5 top-0 left-0 flex justify-center items-center z-50'>
            <nav className="w-[80vw] relative  ">
                <img src="/image/header-bg.png " alt="" className=' h-[12vh]'/>
                <div className="absolute top-0 left-0 ml-10 container mx-auto flex items-center ">
                   
                        <a href="#">
                            <img src="/image/logo.png" alt="Logo" className='h-[10vh] mr-[10vw]' />
                        </a>
                    <ul className="flex j items-center gap-4 w-full">
                        <li>
                            <a href="#" className="text-white hover:text-gray-400"><span className=' mr-[10vw] font-robotoSlab mt-8 text-3xl font-bold text-[#F0D0C0]'>Home</span></a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-400"><span className='   font-robotoSlab mt-8 text-3xl font-bold text-[#F0D0C0]'>Marketplace</span></a>
                        </li>
                        
                    </ul>
                </div>
            </nav>

        </div>
    );
}
