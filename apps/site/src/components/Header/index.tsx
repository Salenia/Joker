import { Component } from "solid-js";
import Waves from "./Waves";
import Hat from '@assets/icons/hat.svg?component-solid';
import Navbar from "./Navbar";

const Header: Component = props => {

    return (
        <header class='relative'>
            <Waves />
            <div class='flex justify-between items-center w-screen absolute top-0 left-0 p-6'>
                <div class='flex items-center gap-2 z-100'>
                    <Hat class='w-7' />
                    <h1>The Joker</h1>
                </div>
                <Navbar />
            </div>
        </header>
    )
}

export default Header;