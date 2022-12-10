import { Component } from "solid-js";
import cards from '@assets/imgs/cards.png';
import Blobs from "./Blobs";


const HeroSection: Component = () => {

    return (
        <section class='relative p-2 flex flex-col items-center justify-center md:flex-row md:justify-evenly md:px-4 overflow-hidden md:mt-24'>
            <Blobs />
            <img class='z-[299] w-[55vw] md:w-[20vw] -mt-48 md:mt-0 md:-ml-64' src={cards} alt='tram card number' />
            <h1 class='mt-12 text-2xl md:mt-0 uppercase bold italic tracking-widest md:text-[56px] break-words md:max-w-[30vw] leading-[84px]'>Your Winning Card</h1>
        </section>
    )
}

export default HeroSection;