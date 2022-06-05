import * as React from 'react';
import akadaboy from '../../images/akadaboy.png';
import akadaboy2 from '../../images/akadaboy2.png';
import akadagirl from '../../images/akadagirl.png';
import dot from '../../images/dot.svg';
import Button from '../../components/Button';
import rec from '../../images/rec.png';
import greenrec from '../../images/greenrec.png';
import {Link} from "react-router-dom"

function Banner() {
  return (
    <div className="relative min-h-[400px] md:min-h-min lg:min-h-[550px] mt-8 py-8 mb-10">
      <div className="px-6 sm:px-0 sm:w-[93%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-full md:gap-x-4 lg:gap-x-40 items-center ml-auto">
        <div className="md:col-span-1  font-bold text-center md:text-left py-10 h-full flex  items-center relative">
          <div className="z-20 w-full md:w-auto mx-auto md:mx-0">
            <p className="text-primary text-4xl sm:text-3xl md:text-5xl lg:text-[64px] md:leading-[71px] lg:mb-4 transition tracking-in-expand-fwd delay-300 duration-500">
              Subscribe<span className="hidden md:inline">.</span>
            </p>
            <p className="text-primary   text-4xl sm:text-3xl md:text-5xl lg:text-[64px] md:leading-[71px]  lg:mb-4 transition tracking-in-expand-fwd">
              Select<span className="hidden md:inline">.</span>
            </p>
            <p className="text-primary  text-4xl sm:text-3xl md:text-5xl lg:text-[64px]  md:leading-[71px] mb-8 transition tracking-in-expand-fwd">
              Sponsor<span className="hidden md:inline">.</span>
            </p>
            <Link to="/register">
              <Button className="bg-transparent border border-primary  hover:bg-primary text-base md:text-lg lg:text-xl hover:border-primary hover:text-white text-primary px-6 md:px-4 lg:px-10 py-2 md:py-4">
                GET STARTED
              </Button>
            </Link>
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
          <div className="sm:flex space-x-5">
            <div className="ml-auto md:ml-0 w-[100%] md:w-[63%] relative overflow-hidden">
              <img
                src={akadagirl}
                alt="banner-img"
                className="rounded-2xl  md:h-[395px] lg:h-[32rem] w-full lg:block "
              />
            </div>

            <div className=" lg:w-[37%] xl:w-[25%] relative overflow-hidden group">
              <img
                src={akadaboy}
                alt="banner-img"
                className="md:rounded-l-2xl lg:rounded-2xl md:h-[395px] lg:h-[32rem] w-full hidden md:block"
              />
              <img
                src={greenrec}
                alt="banner-img"
                className="absolute left-0 bottom-12"
              />
            </div>

            <div className="w-[12%] relative overflow-hidden xl:block  hidden ">
              <img
                src={akadaboy2}
                alt="banner-img"
                // className='object-cover block col-span-1 rounded-xl h-[450px]'

                className="rounded-l-2xl h-[32rem] w-full transition hover:kenburns-top"
              />
              <img
                src={rec}
                alt="banner-img"
                // className='object-cover h-[450px] col-span-3 rounded-xl'

                className="absolute left-0 bottom-12"
              />
            </div>
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

export default Banner;
