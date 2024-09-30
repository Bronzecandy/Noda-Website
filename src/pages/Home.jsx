import React,{useEffect} from 'react'
import Header from '../Components/Header/Header'
import Banner from '../Components/Banner/Banner'
import Introduce from '../Components/Banner/Introduce'
import MarketCapitalization from '../Components/Market capitalization/MarketCapitalization'
import { ExPro } from '../Components/ExcitingPromotion/ExPro'
import { Partnership } from '../Components/Partnership/Partnership'
import CoinStaking from '../Components/CoinStaking/CoinStaking'
import JoinUs from '../Components/JoinUs/JoinUs'
import Footer from '../Components/Footer/Footer'
import AOS from 'aos'
export default function Home() {
    useEffect(() => {
        AOS.refresh(); // Refresh AOS sau khi render
    }, []);
    return (
        <>
            <Header />
            <Banner />
            <Introduce />
            <MarketCapitalization />
            <ExPro />
            <Partnership />
            <CoinStaking />
            <JoinUs />
            <Footer />
        </>
    )
}
