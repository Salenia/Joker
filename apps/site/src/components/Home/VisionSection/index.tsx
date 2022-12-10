import { Component } from "solid-js";
import Wave from '@assets/waves/VisionWave.svg?component-solid';
import VisionPoint from "./VisionPoint";

import Box from '@assets/icons/box.svg?component-solid';
import Boxs from '@assets/icons/boxs.svg?component-solid';
import Glob from '@assets/icons/network.svg?component-solid';



const VisionSection: Component = () => {

    return (
        <section class='bg-brand-dark-200'>
            <Wave class='text-white dark:text-dark-bg' />
            <div class='p-4 px-8 md:px-12'>
                <h2 class='font-bold italic text-3xl'>Our Vision</h2>
                <div class="p-4 py-6 flex flex-col md:flex-row md:justify-evenly gap-12 md:py-24">
                    <VisionPoint
                        Icon={Box}
                        title="Test"
                        caption="test"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestias sed assumenda?"
                    />
                    <VisionPoint
                        Icon={Glob}
                        title="Test"
                        caption="test"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestias sed assumenda?"
                    />
                    <VisionPoint
                        Icon={Boxs}
                        title="Test"
                        caption="test"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestias sed assumenda?"
                    />
                </div>
            </div>
        </section>
    )
}


export default VisionSection;