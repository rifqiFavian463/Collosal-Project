function Hero() {
  return (
    <div className="w-[90%] md:w-[58%] m-auto text-center mt-20">
      <h2 className="collosal-tagline md:collosal-tagline font-medium text-[12px] md:font-semibold md:text-[20px] ">CLIENT-DEVELOPMENT DRIVEN</h2>
      <h1 className="collosal-title md:collosal-title text-[30px] leading-10 ">We Design. We Develop. We Ship. In The Same Day</h1>
      <p className="collosal-description mt-4 w-[90%] m-auto md:w-[92%]">
        We are committed to not making clients wait. We will deliver the work as quickly as possible. Even on the same day. Even so, we do not reduce the quality of our work.
      </p>
      <div className="flex justify-center gap-x-8 mt-12">
        <button className="button-transparent bg-[var(--primary)] rounded w-[200px] h-[52px]">Send Quote</button>
        <button className="button-transparent rounded w-[200px] h-[52px]">Learn More</button>
      </div>
    </div>
  );
}

export default Hero;
