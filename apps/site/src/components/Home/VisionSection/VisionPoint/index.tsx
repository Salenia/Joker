import { Component, Show } from "solid-js";

interface IProps {
    Icon: Component<{ class?: string; }>;
    caption?: string;
    title: string;
    description: string;
}

const VisionPoint: Component<IProps> = props => {
    return (
        <div class='flex gap-6 align-top w-full max-w-[450px]'>
            <div class='rounded-full bg-gradient-to-b from-brand-dark-50 to-brand-dark-200 p-3'>
                <props.Icon class='w-5' />
            </div>
            <div>
                <Show when={!!props.caption}>
                    <caption class='uppercase font-bold text-sm dark:text-dark-fg/[.45]'>{props.caption}</caption>
                </Show>
                <h3 class='text-xl font-bold italic mb-2'>{props.title}</h3>
                <p class='text-transparent bg-clip-text bg-gradient-to-b from-dark-fg to-dark-fg/[.15]'>
                    {props.description}
                </p>
            </div>
        </div>
    )
};

export default VisionPoint;