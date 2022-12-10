import { Component, For } from "solid-js";
import Wave from '@assets/waves/SponsorWave.svg?component-solid';
import sponsors from '@assets/sponsors';
import SponsorTile from "./SponsorTile";
import ContactForm from "./ContactForm";


const SponsorSection: Component = () => {

    return (
        <>
            <Wave class='bg-brand-dark-200' />
            <section class='bg-brand-dark-100 p-4 px-8 md:px-12'>
                <h2 class='font-bold italic text-3xl mb-4 md:mb-12'>Sponsors</h2>
                <div class='p-4 flex flex-col md:flex-row gap-6'>
                    <div class='flex gap-3 md:flex-1'>
                        <For each={sponsors}>
                            {(sponsor) => <SponsorTile {...sponsor} />}
                        </For>
                    </div>
                    <div class='md:flex-1'>
                        <ContactForm />
                    </div>
                </div>
            </section>
        </>
    )
}

export default SponsorSection;