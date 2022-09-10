import * as React from "react";
import akadaboy from "../../images/akadaboy.png";
import akadaboy2 from "../../images/akadaboy2.png";
import akadagirl from "../../images/akadagirl.png";
import dot from "../../images/dot.svg";
import rec from "../../images/rec.png";
import greenrec from "../../images/greenrec.png";
import Countdown from "react-countdown";

function ComingSoon() {
  return (
    <div className="relative min-h-[400px] md:min-h-min lg:min-h-[550px] mt-8 py-8 mb-10">
      <div className="px-6 lg:px-0 container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-full md:gap-x-4 lg:gap-x-40 items-center mx-auto">
        <div className="md:col-span-1  font-bold text-center md:text-left py-10 h-full flex  items-center relative">
          <div className="z-20 w-full md:w-auto mx-auto md:mx-0">
            <p className="text-primary text-4xl sm:text-2xl md:text-4xl transition tracking-in-expand-fwd delay-300 duration-500">
              Subscribe<span className="hidden md:inline">.</span>
            </p>
            <p className="text-primary   text-4xl sm:text-2xl md:text-4xl  transition tracking-in-expand-fwd">
              Select<span className="hidden md:inline">.</span>
            </p>
            <p className="text-primary  text-4xl sm:text-2xl md:text-4xl  mb-8 transition tracking-in-expand-fwd">
              Sponsor<span className="hidden md:inline">.</span>
            </p>
            <p className="sm:text-2xl md:text-5xl">
              Launching on the 1st of August 2022
            </p>
            <div className="flex md:hidden text-center text-primary justify-center">
              <p className="mr-2"> Countdown till launch </p>
              <Countdown date={Date.parse("01 Aug 2022 00:00:00 GMT")} />
            </div>
          </div>

          <img
            src={dot}
            alt="dot"
            className="w-[90px] h-[100px] -left-6 -top-8 md:top-[60px]  absolute"
          />

          <img
            src={dot}
            alt="dot"
            className="w-[100px] h-[110px] right-20 lg:right-4 bottom-8 md:bottom-[20%] absolute hidden md:inline"
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <div className="sm:flex space-x-5 md:justify-end">
            <span>
              <img src={akadagirl} alt="banner-img" className="rounded-2xl" />
            </span>

            <span className=" relative overflow-hidden group">
              <img
                src={akadaboy}
                alt="banner-img"
                className="md:rounded-l-2xl lg:rounded-2xl  hidden md:block"
              />
              <img
                src={greenrec}
                alt="banner-img"
                className="absolute left-0 bottom-12"
              />
            </span>

            <span className=" relative overflow-hidden xl:block  hidden ">
              <img
                src={akadaboy2}
                alt="banner-img"
                // className='object-cover block col-span-1 rounded-xl h-[450px]'

                className="rounded-l-2xl  transition hover:kenburns-top"
              />
              <img
                src={rec}
                alt="banner-img"
                // className='object-cover h-[450px] col-span-3 rounded-xl'

                className="absolute left-0 bottom-12"
              />
            </span>
          </div>
        </div>
        <img
          src={dot}
          alt="dot"
          className="w-[100px] h-[110px] left-0 lg:right-4 bottom-0 md:bottom-[20%] absolute  lg:hidden"
        />
      </div>
    </div>
  );
}

export default ComingSoon;
