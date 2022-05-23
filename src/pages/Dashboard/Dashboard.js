import Table from './Table';
import SideBar from './SideBar';
import Header from './Header';

const Dashboard = function () {
  return (
    <section>
      <Header />
      <div className='flex  container gap-x-14'>
        <SideBar />
        <div className=' w-full grid grid-cols-6 gap-x-40'>
          <div className='bg-[#E16D38] w-[11rem] h-[11.5rem] rounded-lg text-center px-8   px-8  py-12 flex items-center justify-center flex items-center justify-center'>
            <div>
              <p className='text-white text-4xl mb-5'>75%</p>
              <p className='text-gray-100 font-thin text-sm'>Average grade</p>
            </div>
          </div>
          <div className='bg-[#943993] w-[11rem] h-[11.5rem] rounded-lg text-center   px-8  py-12 flex items-center justify-center'>
            <div>
              <p className='text-white text-4xl mb-5'>125</p>
              <p className='text-gray-100 font-thin text-sm'>
                No of students sponsored
              </p>
            </div>
          </div>
          <div className='bg-[#97B550] w-[11rem] h-[11.5rem] rounded-lg text-center   px-8  py-12 flex items-center justify-center'>
            <div>
              <p className='text-black text-4xl mb-5'>125</p>
              <p className='text-black font-thin text-sm'>
                Best matched candidates
              </p>
            </div>
          </div>
          <div className='bg-[#7A6D7B] w-[11rem] h-[11.5rem] rounded-lg text-center   px-8  py-12 flex items-center justify-center'>
            <div>
              <p className='text-white text-4xl mb-5'>125</p>
              <p className='text-gray-100 font-thin text-sm'>
                No of students sponsored
              </p>
            </div>
          </div>
          <div className='bg-[#943993] w-[16rem] h-[11.5rem] rounded-2xl pl-7'>
            <p className='text-gray-100 text-lg'>Statistics</p>
          </div>
        </div>
      </div>

      <Table />
    </section>
  );
};
export default Dashboard;
