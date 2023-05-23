import PricingCard from "../minor-component/pricing-card";
import Sliders from "./component/Sliders";
import Navbar from "../main-component/Navbar";
import Hero from "./component/Hero";

function Home() {
  return (
    <div className="page">
      <div className="page-container">
        <Navbar />
        <Hero />
        <PricingCard bgColor="bg-[#3F2379]" textColor="text-[#3F2379]" pricingName="UI Design" price="1200$" features={["10 design pages", "Well-documented", "4 revisions", "$100/additional page"]} />
        <Sliders />
      </div>
    </div>
  );
}

export default Home;
