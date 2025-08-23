import AboutUs from "@/components/blocks/about-us";
import Brands from "@/components/blocks/brands";
import FeaturedProducts from "@/components/blocks/featured-products";
import Hero from "@/components/blocks/hero";
import Industries from "@/components/blocks/industries";
import ServicesNew from "@/components/blocks/services-v3";
import Slider from "@/components/blocks/slider";
// import WePower from "@/components/blocks/we-power";
import WhyChoose from "@/components/blocks/why-choose";


export default function Home() {
  return (
    <div>
      <Hero />
      <Slider />
      <AboutUs />
      <ServicesNew />
      <FeaturedProducts />
      <Brands />
      <Industries />
      {/* <TrustIndicators/> */}
      <WhyChoose />
      {/* <ServicesOverview/> */}
      {/* <WePower /> */}
    </div>
  );
}
