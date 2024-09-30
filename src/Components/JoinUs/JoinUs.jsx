import React, { useState } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { BsThreeDots } from "react-icons/bs";
export default function JoinUs() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="relative">
            {/* Main Content */}
            <div className="flex flex-col-reverse md:flex-row items-center justify-between py-8 px-2 xl:px-10 gap-4">
                {/* Video Column */}
                <div data-aos="zoom-in-right" className='p-2 bg-[#703519] rounded-lg w-full md:w-1/2'>
                    <div className=" p-2 bg-[#FBEDD0]  rounded-lg relative">
                        <div
                            className="w-full aspect-video rounded cursor-pointer bg-[url('/image/bg_banner.png')] bg-cover flex items-center justify-center"
                            onClick={openModal}
                        >
                            <FaPlayCircle className="text-white text-8xl opacity-80 hover:opacity-100 hover:text-9xl transition-all duration-300" />
                        </div>
                        

                    </div>
                    <BsThreeDots  className="text-[#FBEDD0] text-6xl " />
                </div>

                {/* Content Column */}
                <div data-aos="zoom-in-left" className="w-full aspect-[16/11.2] md:w-1/2 p-8 text-center text-[#703519] mb-8 md:mb-0 flex flex-col items-center justify-center bg-[url('/image/Asset.png')] bg-cover bg-no-repeat ">
                    <h2 className="text-xl lg:text-4xl font-semibold">
                        Join Now and Start Your Journey
                    </h2>
                    <p className="text-xs lg:text-base mt-2 lg:mt-4">
                        Get started with a simple and quick process. Connect with other players and grow together in Nông Dân Online.
                    </p>
                    <div className="mt-2 lg:mt-4 bg-[url('/image/button.png')] bg-cover bg-no-repeat text-white  rounded-lg h-20 w-44 lg:h-32 lg:w-56 transition-transform hover:scale-105 duration-300 flex justify-center items-center">
                        <p className='text-[#FBEDD0] text-sm lg:text-base pt-[2.25rem] lg:pt-[1.75rem]'>Get Started</p>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={closeModal}
                >
                    <div
                        className="rounded-xl max-w-3xl w-full relative p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <iframe
                            className="w-full h-[32rem] rounded"
                            src="https://www.youtube.com/embed/g1HrVjV2OUs?si=nBfbMBId6OuYpsPK"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                        <button
                            className="absolute top-2 right-2 text-white bg-red-600 rounded-full w-8 h-8 flex items-center justify-center"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
