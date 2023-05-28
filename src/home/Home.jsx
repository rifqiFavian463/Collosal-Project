import codeIcon from "../assets/code.png";
import boxIcon from "../assets/box.png";
import PricingCard from "../minor-component/pricing-card";
import Sliders from "./component/Sliders";
import Navbar from "../main-component/Navbar";
import Hero from "./component/Hero";
import FeatureCard from "../minor-component/feature-card";
import Client from "../minor-component/client";
import CollosalTitle from "../minor-component/title";

function Home() {
  return (
    <div className="page">
      <div className="page-container">
        <Navbar />
        <Hero />
        <div className="feature-section mt-20 grid gap-y-5 md:flex md:justify-between md:gap-x-4">
          <FeatureCard feature="Figma" description="The project interface will be designed first, our favorite tool is Figma." />
          <FeatureCard feature="Develop" description="Transform design and write business logic here. Choose the technology you want." icon={codeIcon} />
          <FeatureCard feature="Ship" description="After the work is complete, we will send the project and all its assets to you." icon={boxIcon} />
        </div>
        <Client />

      </div>
      <div className="pricising-card-section  bg-[#221048] mb-[120px] p-[90px]  rounded-xl">
      <CollosalTitle title='What do you need? Choose a service that can help you' subTitle="Get Started" />

        <div className="flex justify-evenly m-[67px] ">
          <PricingCard bgColor="bg-[#3F2379]" textColor="text-[#3F2379]" pricingName="UI Design" price="1200$" features={["10 design pages", "Well-documented", "4 revisions", "$100/additional page"]} />
          <PricingCard bgColor="bg-[#233679]" textColor="text-[#3F2379]" pricingName="Development" price="5000$" features={["Web & Mobile", "Well-documented", "8 revisions", "$1000/additional page"]} />
          <PricingCard bgColor="bg-[#792366]" textColor="text-[#3F2379]" pricingName="Maintance" price="3000$" features={["10 design pages", "Well-documented", "Including Fixing", "$50/additional page"]} />
        </div>
      </div>
        <div className="page-container">
        <Sliders />

        </div>
    </div>
  );
}

export default Home;
