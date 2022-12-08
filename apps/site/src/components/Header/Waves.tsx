import { Component } from "solid-js";
import MobileWaves from '@assets/waves/MobileWaves.svg?component-solid';
import DesktopWaves from '@assets/waves/DesktopWaves.svg?component-solid';



const Waves: Component = () => {

    return (
        <>
            <MobileWaves class='w-screen md:hidden'/>
            <DesktopWaves class='w-full hidden md:block'/>
        </>
    )
}

export default Waves;