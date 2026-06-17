import HeroSection from "../Components/hero";
import ProblemSolution from "../Components/solutions";
import HowItWorks from "../Components/How_it_work";
import WhoWeServe from "../Components/Services";
import FeatureShowcase from "../Components/Featureshowcase";
import WhyChooseUs from "../Components/whychooseus";
import FAQs from "../Components/faqs";

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
