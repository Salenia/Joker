import HeroSection from "@components/Home/HeroSection";
import PageLayout from "@router/layouts/Page";
import { Component } from "solid-js";

const Home: Component = () => {

    return (
        <PageLayout>
            <HeroSection />
        </PageLayout>
    );
}


export default Home;