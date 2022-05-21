import * as React from 'react';
import akadaboy from '../../images/akadaboy.png';
import akadaboy2 from '../../images/akadaboy2.png';
import akadagirl from '../../images/akadagirl.png';
import dot from '../../images/dot.svg';
import Button from '../../components/Button';

function Banner() {
  return (
    <div className="relative min-h-[400px] md:min-h-[550px] mt-8 py-8">
      <div className="container grid grid-cols-2 lg:grid-cols-3 h-full items-center">
        <div className="col-span-1  font-bold text-left py-10 h-full flex  items-center relative">
          <div className="z-20">
            <p className="text-primary text-3xl sm:text-4xl md:text-5xl lg:text-[64px] md:leading-[71px] lg:mb-4">
              Subscribe.
            </p>
            <p className="text-primary   text-3xl sm:text-4xl  md:text-5xl lg:text-[64px] md:leading-[71px]  lg:mb-4">
              Select.
            </p>
            <p className="text-primary  text-3xl sm:text-4xl md:text-5xl lg:text-[64px]  md:leading-[71px] mb-8">
              Sponsor.
            </p>
            <Button className="bg-transparent border border-primary  hover:bg-primary text-sm md:text-xl hover:border-primary hover:text-white text-primary px-6 md:px-12 py-2 md:py-4">
              GET STARTED
            </Button>
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
        <div className="col-span-1 lg:col-span-2">
          <div className="flex items-end md:space-x-5">
            <div className="block   ml-auto md:ml-0">
              <img
                src={akadagirl}
                alt="banner-img"
                // className='object-cover h-[450px] col-span-3 rounded-xl'

                className="rounded-2xl  md:h-[253px] lg:h-[32rem] w-[10rem] md:w-[18rem] lg:w-[35rem] lg:block "
              />
            </div>

            <div className="block">
              <img
                src={akadaboy}
                alt="banner-img"
                // className='object-cover h-[450px] col-span-2 rounded-xl'

                className="rounded-2xl md:h-[253px] lg:h-[32rem] w-[8rem] lg:w-[15rem] hidden md:block"
              />
            </div>

            <div className="block">
              <img
                src={akadaboy2}
                alt="banner-img"
                // className='object-cover block col-span-1 rounded-xl h-[450px]'

                className="rounded-2xl h-[32rem] lg:block  hidden"
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
