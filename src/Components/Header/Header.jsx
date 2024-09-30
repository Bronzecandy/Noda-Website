import React, { useState } from 'react';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className='w-full fixed top-0 left-0 flex justify-center items-start z-50 xl:mt-3'>
            <nav className="relative max-w-[100vw] xl:max-w-[85vw] md:max-w-[90vw] h-[9vh] xl:h-[10vh]">
                <img
                    src="/image/header-bg.png"
                    alt="Background"
                    className='w-full h-full sm:object-cover md:object-contain object-center'
                />

                <div className="absolute inset-0 flex items-center  md:justify-start justify-between xl:justify-start px-4 mb-2 xl:px-6">
                    {/* Logo */}
                    <a href="#" className='flex items-center mr-5'>
                        <img
                            src="/image/logo.png"
                            alt="Logo"
                            className='h-[3rem] md:h-[3rem] lg:h-[4rem]'
                        />
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        className="block md:hidden  text-white"
                        onClick={toggleMobileMenu}
                        aria-expanded={isMobileMenuOpen}
                        aria-label="Toggle mobile navigation menu"
                    >
                        <span className="text-2xl">☰</span> {/* Replace with an icon */}
                    </button>

                    {/* Mobile Menu (hidden on larger screens) */}
                    <ul
                        className={`fixed top-[7vh] rounded-md right-0 w-1/2 bg-amber-900 p-3 space-y-4 transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden'
                            }  md:hidden`}
                        role="menu"
                    >
                        <li className='border-b-2 w-[100%]'>
                            <a href="#" className="text-white hover:text-gray-400">
                                <span className='font-robotoSlab text-[0.8rem] font-bold text-[#F0D0C0]'>
                                    Home
                                </span>
                            </a>
                        </li>
                        <li className='border-b-2 w-[100%]'>
                            <a href="#" className="text-white hover:text-gray-400">
                                <span className='font-robotoSlab text-[0.8rem] font-bold text-[#F0D0C0]'>
                                    Marketplace
                                </span>
                            </a>
                        </li>
                    </ul>

                    {/* Desktop Menu (hidden on smaller screens) */}
                    <ul className="hidden  md:flex md:gap-4 xl:space-x-4 xl:bg-transparent xl:p-0  lg:space-x-4 lg:bg-transparent lg:p-0">
                        <a href="#" className="text-white hover:text-gray-400 w-[10vw]">
                            <span className='font-robotoSlab text-2xl md:text-xl font-bold text-[#F0D0C0] hover:text-[1.6rem]'>
                                Home
                            </span>
                        </a>
                        <a href="#" className="text-white hover:text-gray-400 w-[10vw] ">
                            <span className='font-robotoSlab text-2xl md:text-xl font-bold text-[#F0D0C0] hover:text-[1.6rem]'>
                                Marketplace
                            </span>
                        </a>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
