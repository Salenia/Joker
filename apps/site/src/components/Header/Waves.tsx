import { Component } from "solid-js";
import MobileWaves from '@assets/waves/MobileWaves.svg?component-solid';



const Waves: Component = () => {

    return (
        <>
            <MobileWaves class='w-screen md:hidden'/>
        </>
    )
}

export default Waves;