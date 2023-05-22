import PricingCard from "./minor-component/pricing-card";

function App() {
  return (
    <>
      <p className="collosal-tagline">TAGLINEE!</p>
      <h1 className="collosal-title">Hello world!</h1>
      <p className="collosal-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident amet esse suscipit distinctio, sit quam illum ipsam quo dolor quidem ipsum inventore laudantium totam modi sint non dicta
        harum asperiores molestiae! Eos laborum maxime magni minus deleniti voluptates quae non. you little shit!
      </p>
      <PricingCard bgColor="bg-[#3F2379]" textColor="text-[#3F2379]" pricingName="UI Design" price="1200$" features={["10 design pages", "Well-documented", "4 revisions", "$100/additional page"]} />
    </>
  );
}

export default App;
