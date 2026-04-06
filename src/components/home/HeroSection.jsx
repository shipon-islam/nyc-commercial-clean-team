import ButtonSolid from "../ButtonSolid";
export default function HeroSection() {
  return (
    <section className="container mt-10">
      
      <div className="mt-6 relative overflow-hidden ">
        <video
        autoPlay
        muted
        loop
        playsInline
        className="rounded-lg w-full h-100 sm:h-auto object-cover max-h-100 sm:max-h-207 "
      >
        <source src="/videos/city-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        {/* <Image
          src={cleaningNyc}
          alt="cleaningNyc"
          className="rounded-lg w-full h-100 sm:h-auto object-cover max-h-100 sm:max-h-100 md:max-h-208.5"
        /> */}
        <div className="w-full h-full bg-black/20  absolute top-0 left-0  backdrop-blur-[2px] rounded-lg">
          <div className="text-white flex flex-col items-center justify-center text-center h-full px-4">
            <h1 className="text-[32px] sm:text-5xl lg:text-[56px] leading-[120%] ">
              Commercial cleaning <br /> services in NYC
            </h1>
            <p className="md:text-lg my-6 md:my-9">
              Reliable. Insured. Professional. We handle the work so you can
              focus on what matters.
            </p>
            <div className="flex flex-col-reverse xs:flex-row gap-4  items-center xs:gap-8">
              <ButtonSolid>Get a Free Quote</ButtonSolid>
              <ButtonSolid color="white">Call Now</ButtonSolid>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
