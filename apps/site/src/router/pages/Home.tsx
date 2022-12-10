import ExploreSection from "@components/Home/ExploreSection";
import HeroSection from "@components/Home/HeroSection";
import SponsorSection from "@components/Home/SponsorSection";
import VisionSection from "@components/Home/VisionSection";
import PageLayout from "@router/layouts/Page";
import { Component } from "solid-js";

const Home: Component = () => {

    return (
        <PageLayout>
            <HeroSection />
            <VisionSection />
            <SponsorSection />
            <ExploreSection />
        </PageLayout>
    );
}


export default Home;