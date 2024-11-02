import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { SpotlightRight } from "./ui/SpotlightRight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <SpotlightRight
          className="top-20 -right-[60%] h-[80vh] w-[70vw]"
          fill="purple"
        />
        <Spotlight className="left-96 top-20 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Welcome to Wilfred&apos;s Portfolio
          </p>

          <TextGenerateEffect
            words="Transforming Data into Engaging User-Friendly Web Experiences"
            className="text-center text-[20px] md:text-4xl lg:text-5xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-[10px] md:text-sm lg:text-base ">
          Hi, I&apos;m Wilfred, a web developer and data analyst, currently working remotely.
          </p>

          <a href="#about">
            <MagicButton 
            title="show my work" 
            icon={<FaLocationArrow />}
            position='right'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
