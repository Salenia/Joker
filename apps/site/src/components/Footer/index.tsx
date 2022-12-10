import { Component } from "solid-js";
import Wave from '@assets/waves/FooterWave.svg?component-solid';
import Hat from '@assets/icons/hat.svg?component-solid';

import Facebook from '@assets/icons/social/facebook.svg?component-solid';
import Instagram from '@assets/icons/social/instagram.svg?component-solid';
import Youtube from '@assets/icons/social/youtube.svg?component-solid';

const Footer: Component = () => {

    return (
        <>
            <Wave class='bg-brand-dark dark:text-dark-bg' />
            <footer class='flex flex-col md:flex-row'>
                <div class="md:flex-1">
                    <div class='flex gap-3 items-center p-4 px-8'>
                        <Hat class='w-12' />
                        <div>
                            <h2 class='text-lg'>The Joker #4320</h2>
                            <p class='text-sm uppercase dark:text-dark-fg/60 tracking-wider'>Your winning Card</p>
                        </div>
                    </div>
                    <div>
                        {/* TODO: enter links */}
                    </div>
                    <div class='bg-dark-fg/60 w-[80%] h-[2px] mx-auto md:w-[40vw] md:ml-8' />
                    <div class='flex items-center justify-center gap-12 p-4 md:justify-start md:px-12 md:py-8'>
                        <Facebook />
                        <Instagram />
                        <Youtube />
                    </div>
                </div>
            </footer>
        </>
    )
}


export default Footer;