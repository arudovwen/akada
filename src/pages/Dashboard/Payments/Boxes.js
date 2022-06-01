import React, { PureComponent } from 'react';
import flag from '../../../images/flag.png';
import { IoIosArrowDown } from 'react-icons/io';
import FundWallet from './FundWallet';

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

const subscription = [
  {
    name: 'Page S',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
];

const sponsorship = [
  {
    name: 'Page T',
    uv: 8000,
    pv: 2400,
    amt: 2400,
  },
];

const upgrade = [
  {
    name: 'Page U',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
];

const Boxes = function () {
  return (
    <section className='w-full'>
      <div className='flex gap-4 w-full'>
        <div className='grid grid-cols-1 w-[40%]  gap-4 '>
          {' '}
          <div className='bg-primary  rounded-3xl pl-10 pt-12 text-white relative'>
            <p className='text-lg'>Balance</p>
            <span className='text-2xl font-bold'>NGN 50000000</span>
            <p className='underline'>Fund wallet</p>
          </div>
          <div className='bg-[#97B550]  rounded-3xl pl-10 pt-12 text-white'>
            {' '}
            <p className='text-lg'>Balance</p>
            <span className='text-2xl font-bold'>$ 5000</span>
            <p className='underline'>Fund wallet</p>
          </div>
        </div>
        <div className='grid grid-cols-2 w-[60%] gap-4 '>
          <div className='bg-white shadow-mb h-[7rem] rounded-3xl text-sm py-5 px-5  '>
            <div className='flex justify-between items-center '>
              <p>Total Spent</p>
              <div className='text-[#97B550] flex items-center'>
                {' '}
                <img src={flag} alt='flag' className='w-4 h-3' /> NGN{' '}
                <IoIosArrowDown />
              </div>
            </div>
            <span
              className='text-[#97B550] text-lg  font-semibold
'
            >
              N657.000
            </span>
          </div>
          <div className='bg-white shadow-mb h-[7rem] rounded-3xl text-sm py-5 px-5  '>
            <div className='flex justify-between items-center mb-2'>
              <div>
                <p>Spent this month</p>
                <span
                  className='text-[#97B550] text-lg  font-semibold
'
                >
                  N657.000
                </span>
              </div>

              <div className='text-[#97B550] '>
                <BarChart width={45} height={40} data={data}>
                  <Bar dataKey='uv' fill='#97B550' />
                </BarChart>
              </div>
            </div>
          </div>
          <div className='col-span-2 bg-white shadow-mb h-[14rem] rounded-3xl mt-2 py-5 px-5  '>
            <h3 className='mb-3 text-dashboardgray font-semibold'>
              {' '}
              Spend analysis{' '}
            </h3>
            <div className='grid grid-cols-2 items-center gap-y-4 gap-x-9 capitalize'>
              <div className='flex gap-x-7 text-sm'>
                <div className='flex flex-col items-start'>
                  <div> subscription </div>
                  <div>
                    <BarChart
                      width={15}
                      height={40}
                      data={subscription}
                      className='rotate-90 ml-2'
                    >
                      <Bar dataKey='uv' fill='#943993' />
                    </BarChart>
                  </div>
                </div>{' '}
                <span>N67,300</span>
              </div>
              <div className='flex gap-x-7 text-sm'>
                <div>
                  sponsorship{' '}
                  <BarChart
                    width={15}
                    height={40}
                    data={sponsorship}
                    className='rotate-90 ml-2'
                  >
                    <Bar dataKey='uv' fill='#97B550' />
                  </BarChart>
                </div>{' '}
                <span>N156,300</span>
              </div>
              <div className='flex gap-x-7 text-sm'>
                <div>
                  {' '}
                  upgrade{' '}
                  <BarChart
                    width={15}
                    height={40}
                    data={upgrade}
                    className='rotate-90 ml-2'
                  >
                    <Bar dataKey='uv' fill='#E16D38' />
                  </BarChart>
                </div>{' '}
                <span>N1,456,300</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute top-28'>
        <FundWallet />
      </div>
    </section>
  );
};

export default Boxes;
