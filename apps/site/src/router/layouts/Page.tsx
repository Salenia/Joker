import Header from "@components/Header";
import { ParentComponent } from "solid-js";


const PageLayout: ParentComponent<{class?: string;}> = props => {


    return (
        <>
            <Header />
            <main class={props.class}>
                {props.children}
            </main>
        </>
    )
}

export default PageLayout;