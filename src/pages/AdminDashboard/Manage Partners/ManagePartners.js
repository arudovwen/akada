import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { XIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import Table from './Table';
const ManagePartners = function () {
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
      {' '}
      <div className='grid grid-cols-3 gap-3'>
        <div className='bg-[#E16D38]  rounded-lg text-center px-4 lg:px-8  py-8 lg:py-12 flex items-center justify-center'>
          <div>
            <p className='text-white text-4xl mb-5'>75</p>
            <p className='text-gray-100 font-thin text-sm'>Total Partners</p>
          </div>
        </div>
        <div className='bg-[#943993]  rounded-lg text-center   px-4 lg:px-8  py-8 lg:py-12 flex items-center justify-center'>
          <div>
            <p className='text-white text-4xl mb-5'>125</p>
            <p className='text-gray-100 font-thin text-sm'>Active Partners</p>
          </div>
        </div>
        <div className='bg-[#97B550]  rounded-lg text-center   px-4 lg:px-8  py-8 lg:py-12 flex items-center justify-center'>
          <div>
            <p className='text-white text-4xl mb-5'>125</p>
            <p className='text-gray-100 font-thin text-sm'>Inactive Partners</p>
          </div>
        </div>

        <div className='bg-white col-span-1 lg:col-span-1 rounded-2xl p-4 shadow-2xl'>
          <h4 className='text-dashboardgray text-lg'>Statistics</h4>

          <PieChart width={100} height={140}>
            <Pie
              data={data}
              startAngle={180}
              endAngle={0}
              dataKey='value'
              cx='50%'
              cy='70%'
              innerRadius={60}
              outerRadius={80}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Pie
              data={data02}
              dataKey='value'
              cx='50%'
              cy='70%'
              innerRadius={25}
              outerRadius={30}
              fill='#fff'
            />
            <Pie
              data={data02}
              dataKey='value'
              startAngle={360}
              endAngle={0}
              cx='50%'
              cy='70%'
              outerRadius={25}
              fill='#e4e2e5'
            />
          </PieChart>

          <div className='flex justify-between'>
            <div className='leading-tight'>
              <p className='font-light text-[12px] text-dashboardgray mb-0'>
                Active partners
              </p>
              <p>
                <span className='text-[13px] mr-1 font-semibold text-dashboardgray'>
                  500
                </span>
                <span className='text-[11px] font-light text-dashboardgray'>
                  60%
                </span>
              </p>
            </div>
            <div className='leading-tight'>
              <p className='font-light text-[12px] text-dashboardgray mb-0'>
                In-active Partners
              </p>
              <p>
                <span className='text-[13px] mr-1 font-semibold text-dashboardgray'>
                  500
                </span>
                <span className='text-[11px] font-light text-dashboardgray'>
                  40%
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className='col-span-2 bg-white rounded-2xl shadow-xl p-5'>
          <div className='flex justify-between'>
            <h2>monthly usage</h2>
            <span>2022</span>
          </div>
          <div>
            <span className='text-dashboardgray text-2xl font-semibold'>
              chart
            </span>
          </div>
        </div>
      </div>
      <Table />
    </section>
  );
};

export default ManagePartners;
