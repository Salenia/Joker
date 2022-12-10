import { Component } from "solid-js";
import teamComp from '@assets/imgs/comp.webp';
import coolTeam from '@assets/imgs/coolTeam.webp';
import './blobs.css';


const Blobs: Component = () => {
    return (
        <div>
            <img class='top-blob h-[180%] md:max-w-[35vw] right-8 md:relative -mb-12' src={teamComp} alt='team in competition' />
            <img class='bottom-blob h-[180%] md:x-[100%] md:max-w-[35vw] translate-x-4 -mt-48' src={coolTeam} alt='coolest team' />
        </div>
    )
}

export default Blobs;