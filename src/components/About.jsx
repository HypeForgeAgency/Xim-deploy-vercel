import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "80vw md: 100vw",
      height: "100vh",
      borderRadius: 0,
      
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-'Benzin-Regular' text-md uppercase md:text-[20px]">
          Welcome to XIM
        </p>

        <AnimatedTitle
          title="The <b>f</b>uture of seemless <br />connectivity"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext font-'Benzin-Regular'">
          <p>The Future of Seamless Connectivity</p>
          <p className="text-gray-500">
          Join our Community and experience the perfect blend of speed, reliability, and value, keeping you connected anytime, anywhere.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.png"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
