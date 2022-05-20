import * as React from 'react';
import akadaboy from '../../images/akadaboy.png';
import akadagirl from '../../images/akadagirl.png';
import akadaboy2 from '../../images/akadaboy2.png';
import dot from '../../images/dot.svg';
import Button from '../../components/Button';
import axios from 'axios';

function Banner() {
  return (
    <div className='relative min-h-[550px]  py-8'>
      {/* <div className='container grid grid-cols-3 h-full items-center'> */}
      <div className='container flex h-full items-center'>
        <div className='col-span-1  font-bold text-left py-10 h-full flex  items-center relative'>
          <div className='z-20 mr-32'>
            <p className='text-primary text-[64px] leading-[71px] mb-4'>
              Subscribe.
            </p>
            <p className='text-primary text-[64px] leading-[71px]  mb-4'>
              Select.
            </p>
            <p className='text-primary text-[64px] leading-[71px] mb-8'>
              Sponsor.
            </p>
            <Button className='bg-transparent border border-primary hover:bg-primary hover:border-primary hover:text-white text-primary px-12 py-4'>
              GET STARTED
            </Button>
          </div>

          <img
            src={dot}
            alt='dot'
            className='w-[90px] h-[100px] -left-6 top-[60px] absolute'
          />

          <img
            src={dot}
            alt='dot'
            className='w-[100px] h-[110px] right-4 bottom-[20%] absolute'
          />
        </div>
        {/* <div className='col-span-2 grid grid-cols-6 '> */}
        <div className='flex items-end space-x-5'>
          <div className='block'>
            <img
              src={akadagirl}
              alt='banner-img'
              // className='object-cover h-[450px] col-span-3 rounded-xl'

              className='rounded-2xl h-[32rem] w-[35rem] block'
            />
          </div>

          <div className='block'>
            <img
              src={akadaboy}
              alt='banner-img'
              // className='object-cover h-[450px] col-span-2 rounded-xl'

              className='rounded-2xl h-[32rem] w-[15rem] block'
            />
          </div>

          <div className='block'>
            <img
              src={akadaboy2}
              alt='banner-img'
              // className='object-cover block col-span-1 rounded-xl h-[450px]'

              className='rounded-2xl h-[32rem] block'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
