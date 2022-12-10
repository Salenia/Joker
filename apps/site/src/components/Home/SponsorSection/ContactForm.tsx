import { Component } from "solid-js";



const ContactForm: Component = () => {


    return (
        <div class=' max-w-[640px] bg-gradient-to-tl from-brand-darker/60 to-brand-dark-300 rounded-lg p-[1px]'>
            <div class='rounded-lg bg-brand-dark-200 p-4'>
                <h3 class='font-bold tracking-wider text-lg'>Want To Help?</h3>
                <p class='text-sm font-semibold '>We would love it!</p>
                <p class='my-4 mb-6'>Help our team move forward with your support! click down below to learn more!</p>

                <div class='mx-auto max-w-[320px] bg-gradient-to-tl hover:bg-gradient-to-br from-brand-darker/60 to-brand-dark-300 rounded-lg p-[1px] w-full transition-all'>
                    <button class='rounded-lg cursor-pointer bg-brand-dark-200 font-bold w-full p-2 hover:bg-brand-dark-150 hover:shadow-md transition-all'>
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    )
}


export default ContactForm;