import React from 'react';
import Card from './Card';
import regularRabbit from '../../assets/NFT_DUC6.png';
import rareRabbit from '../../assets/cool_3.png';
import legendaryRabbit from '../../assets/cool_1.png';
import mythicalRabbit from '../../assets/NFT_DUC2.png';
const cardsData = [
  {
    title: "Regular Rabbits",
    content: "The most common type of rabbit in the game, easy to find and cheap. Therefore, the capitalization value of this type of rabbit is also the lowest.",
    image: regularRabbit
  },
  {
    title: "Rare Rabbits",
    content: "Rabbits are rarer than common rabbits, and have higher value and profitability. The capitalization value of this type of rabbit is also higher than that of regular rabbits.",
    image: rareRabbit
  },
  {
    title: "Legendary Rabbits",
    content: "Very rare rabbit, has the highest value and profitability in the game. The capitalization value of this type of rabbit is also the highest.",
    image: legendaryRabbit
  },
  {
    title: "Mythical Rabbits",
    content: "Extremely rare rabbit, there are only 100 in the game. The value and profitability of this type of rabbit is extremely large. The capitalization value of this type of rabbit is also the highest.",
    image: mythicalRabbit
  },
];
const rabbitData = [
  {
    type: "Regular Rabbits",
    quantity: "100,000",
    sellingPrice: "10,000",
    capitalizationValue: "1",
  },
  {
    type: "Rare Rabbits",
    quantity: "10,000",
    sellingPrice: "50,000",
    capitalizationValue: "0.5",
  },
  {
    type: "Legendary Rabbits",
    quantity: "1,000",
    sellingPrice: "200,000",
    capitalizationValue: "0.2",
  },
  {
    type: "Mythical Rabbits",
    quantity: "100",
    sellingPrice: "1,000,000",
    capitalizationValue: "0.1",
  },
];

const MarketCapitalization = () => {
  return (
    <>
      <div className="p-2 md:p-12 text-[#703519]" >
        <h2 className="text-4xl font-bold text-center mb-4 text-[#703519]">Market Capitalization</h2>
        <table className="w-full text-center bg-[#FBEDD0] border-4 border-[#9F6028]">
          <thead>
            <tr className=" text-base md:text-xl">
              <th className="border-2 border-[#9F6028] sm:py-4 sm:px-2">Rabbit Type</th>
              <th className="border-2 border-[#9F6028] sm:py-4 sm:px-2">Quantity</th>
              <th className="border-2 border-[#9F6028] sm:py-4 sm:px-2">Estimated selling price (VND)</th>
              <th className="border-2 border-[#9F6028] sm:py-4 sm:px-2">Expected capitalization value (Billion VND)</th>
            </tr>
          </thead>
          <tbody>
            {rabbitData.map((rabbit, index) => (
              <tr key={index} className=" text-base md:text-xl">
                <td className="border-2 border-[#9F6028] sm:py-4 sm:px-2 font-bold">{rabbit.type}</td>
                <td className="border-2 border-[#9F6028] sm:py-4 sm:px-2">{rabbit.quantity}</td>
                <td className="border-2 border-[#9F6028] sm:py-4 sm:px-2">{rabbit.sellingPrice}</td>
                <td className="border-2 border-[#9F6028] sm:py-4 sm:px-2">{rabbit.capitalizationValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-4 text-left font-semibold  text-base md:text-xl ">*Total expected capitalization value: 1.8 billion VND</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 p-4">
      {cardsData.map((card, index) => (
        <Card 
          key={index} 
          title={card.title} 
          content={card.content} 
          image={card.image} 
          reverse={index % 2 !== 0}
        />
      ))}
    </div>

    </>
    
  );
};

export default MarketCapitalization;
