import { Component, createSignal } from 'solid-js';
import Hamburger from '@assets/icons/hamburger.svg?component-solid';
import './navbar.css';


const Navbar: Component = props => {
    const [isOpen, setIsOpen] = createSignal(false);
    return (
        <div>
            <Hamburger class='w-6 md:hidden' onClick={() => setIsOpen(prev => !prev)} />
            <nav class={`mobile-nav md:desktop-nav`} data-open={isOpen()}>
                Nav content: {`${isOpen()}`}
            </nav>
        </div>
    )
}


export default Navbar;