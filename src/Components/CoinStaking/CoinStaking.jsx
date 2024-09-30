import React from 'react';
const CoinStaking = () => {
    const stakingFeatures = [
        {
            title: "Flexible Betting",
            description: "Bet with capital from 15% Token, grow your profits up to 500% by completing daily tasks."
        },
        {
            title: "Bet with 15% Token",
            description: "Start small with just 15% Token and gradually increase as you complete tasks."
        },
        {
            title: "Increase Profits",
            description: "Optimize returns with up to 500% profit as you reach higher levels of participation."
        },
        {
            title: "Dynamic Tokens",
            description: "Daily recalculation ensures transparency and fair profit adjustments."
        }
    ];
    return (
        <div className='text-[#703519]'
        >

            {/* Content (sử dụng relative để đảm bảo nó nằm trên hình ảnh) */}
            <div data-aos="zoom-in"
                className="relative p-4 md:p-8  bg-[url('src/assets/background_theme.jpg')] border-8 border-[#703519] rounded-xl md:mx-5 lg:mx-10">
                {/* Header Section (Giới thiệu) */}
                <div className="text-center p-4">
                    <h1 className="text-lg lg:text-4xl font-bold">
                        Enhance Your Farming Experience with Coin Staking!
                    </h1>
                    <p className="mt-2">
                        Combine gaming fun with the opportunity to earn extra profits.
                    </p>
                </div>

                {/* Section 1 + Section 2: Giới thiệu tính năng và Lợi ích của staking */}
                <div  className="py-8 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {stakingFeatures.map((feature, index) => (
                        <div key={index} data-aos="zoom-in" data-aos-duration="1000" className=" p-4 lg:p-8 bg-[#703519] bg-cover bg-no-repeat bg-top text-[#FBEDD0] shadow-md flex flex-col justify-between h-full gap-4 rounded-tl-2xl rounded-br-2xl ">
                            <h3 className="font-semibold text-base lg:text-xl">{feature.title}</h3>
                            <div className='h-full w-full '>
                                <img className='rounded' src='image/bg_banner.png'></img>
                            </div>
                            <p className='text-xs lg:text-base'>{feature.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default CoinStaking;
