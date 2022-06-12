import { useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import Table from '../../Dashboard/components/Table';
import Modal from '../../../components/Modal';
import { XIcon } from '@heroicons/react/outline';
import StudentDetails from '../../Dashboard/StudentDetails/StudentStats';
import sponsor from '../../../images/lastSponsor.png';
import StudentInfo from './StudentInfo';
import Approved from './Approved';
import RequestConfirmation from './RequestConfirmation';

const lastFiveSponsors = [
  {
    id: 1,
    name: 'taiwo odunadde',
    image: sponsor,
  },

  {
    id: 2,
    name: 'taiwo odunadde',
    image: sponsor,
  },

  {
    id: 3,
    name: 'taiwo odunadde',
    image: sponsor,
  },

  {
    id: 4,
    name: 'taiwo odunadde',
    image: sponsor,
  },

  {
    id: 5,
    name: 'taiwo odunadde',
    image: sponsor,
  },
];

const Students = function () {
  let [isOpen, setisOpen] = useState(false);
  const data = [
    { name: 'Male', value: 60 },
    { name: 'Female', value: 40 },
  ];
  const data02 = [{ name: 'A1', value: 100 }];
  const COLORS = ['#E16D38', '#97B550'];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill='#fafafa'
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  function toggleModal() {
    setisOpen(!isOpen);
  }
  return (
    <section>
      <div className='container mb-12 mx-auto'>
        <div className=' w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3 mb-3'>
          <div className='bg-[#E16D38]  rounded-lg text-center px-4 lg:px-8  py-8 lg:py-12 flex items-center justify-center'>
            <div>
              <p className='text-white text-4xl mb-5'>75</p>
              <p className='text-gray-100 font-thin text-sm'>Male Students</p>
            </div>
          </div>
          <div className='bg-[#943993]  rounded-lg text-center   px-4 lg:px-8  py-8 lg:py-12 flex items-center justify-center'>
            <div>
              <p className='text-white text-4xl mb-5'>125</p>
              <p className='text-gray-100 font-thin text-sm'>Female Students</p>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-4 gap-x-7 '>
          <div className='col-span-3 bg-white rounded-2xl shadow-xl p-5 py-8 lg:py-12'>
            <div className='flex justify-between'>
              <h2>monthly sponsorship</h2>
              <span>2022</span>
            </div>
            <div>
              <span className='text-dashboardgray text-2xl font-semibold'>
                1645
              </span>
            </div>
          </div>

          <div className='bg-white shadow-2xl  lg:col-span-1 rounded-2xl p-4 '>
            <h4 className='text-black mb-4 font-semibold'>Last 5 Sponsors</h4>
            <ul>
              {lastFiveSponsors.map((sponsor) => {
                return (
                  <li className='flex items-center gap-x-2 capitalize text-sm mb-2'>
                    <img src={sponsor.image} alt={sponsor.name} />{' '}
                    {sponsor.name}{' '}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <Table toggleDetailsModal={toggleModal} />
      {/* View user stats */}
      <Modal isOpen={isOpen} closeModal={() => toggleModal()}>
        <div className=''>
          <span
            className='absolute top-4 right-4  z-40 cursor-pointer'
            onClick={() => toggleModal()}
          >
            <XIcon className='w-6 h-6 text-white z-40' />
          </span>
          <StudentDetails />
        </div>
      </Modal>
      <StudentInfo />
      <Approved />
      <RequestConfirmation />
    </section>
  );
};

export default Students;
