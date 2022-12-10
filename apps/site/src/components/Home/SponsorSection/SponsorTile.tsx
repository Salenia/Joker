import { Component, createSignal } from "solid-js";

interface IProps {
    name: string;
    image: string;
}
const SponsorTile: Component<IProps> = props => {

    return (
        <div title={props.name} class='h-[60px] max-w-[140px] bg-gradient-to-tl from-brand-darker to-brand-dark-300 rounded-lg p-[1px]'>
            <div class='rounded-lg bg-brand-dark-150 p-2 flex items-center justify-center'>
                <img src={props.image} alt={props.name} class='h-[42px]' />
            </div>
        </div>
    )
}

export default SponsorTile;