import { Component, createSignal } from 'solid-js';
import Hamburger from '@assets/icons/hamburger.svg?component-solid';
import './navbar.css';


const Navbar: Component = props => {
    const [isOpen, setIsOpen] = createSignal(false);
    return (
        <div>
            <button class='md:hidden w-8 p-1.5'>
                <Hamburger onClick={() => setIsOpen(prev => !prev)} />
            </button>
            <nav class={`mobile-nav md:desktop-nav`} data-open={isOpen()}>
                Nav content: {`${isOpen()}`}
            </nav>
        </div>
    )
}


export default Navbar;