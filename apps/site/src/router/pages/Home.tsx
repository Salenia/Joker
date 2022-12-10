import HeroSection from "@components/Home/HeroSection";
import VisionSection from "@components/Home/VisionSection";
import PageLayout from "@router/layouts/Page";
import { Component } from "solid-js";

const Home: Component = () => {

    return (
        <PageLayout>
            <HeroSection />
            <VisionSection />
        </PageLayout>
    );
}


export default Home;