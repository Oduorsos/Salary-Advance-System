import HeroSection from "../components/hero";
import ProblemSolution from "../components/solutions";
import HowItWorks from "../components/How_it_work";
import WhoWeServe from "../components/Services";
import FeatureShowcase from "../Components/Featureshowcase";
import WhyChooseUs from "../components/whychooseus";
import FAQs from "../components/faqs";

export default function Home() {
    return (
        <>
        <HeroSection />
        <ProblemSolution />
        <HowItWorks />
        <WhoWeServe />
        <FeatureShowcase />
        <WhyChooseUs />
        <FAQs />
        </>
    );
}