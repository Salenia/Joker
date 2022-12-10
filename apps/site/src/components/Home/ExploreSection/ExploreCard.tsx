import { Component } from "solid-js";
import './explore.css';


interface IProps {
    title: string;
    caption: string;
    description: string;
    src: string;
    to?: string;
}


const ExploreCard: Component<IProps> = props => {

    return (
        <div class='rounded-xl md:p-[4px] md:bg-brand-dark-150 cursor-pointer hover:scale-105 transition-all md:w-[28vw]'>
            <div
                title={props.title}
                class='explore-card rounded-xl h-[176px] w-full flex flex-col align-bottom p-4 md:h-[220px]'
                style={{
                    '--card-img': `url(${props.src})`
                }}
            >
                <h2 class='text-center mt-auto text-2xl uppercase font-bold italic w-full md:text-start'>{props.title}</h2>
                <p class='uppercase text-center font-bold italic text-brand-darker md:text-start'>{props.caption}</p>
            </div>
            <p class='hidden md:block p-4 text-start max-w-[330px]'>
                {props.description}
            </p>
        </div>
    )
}


export default ExploreCard;