import bg from '../../images/bg.png';
import richie from '../../images/richieimage.png';

const sideBar = [
  {
    id: 1,
    title: 'overview',
    icon: 'icon',
  },

  {
    id: 2,
    title: 'add user',
    icon: 'icon',
  },

  {
    id: 3,
    title: 'payments',
    icon: 'icon',
  },

  {
    id: 4,
    title: 'leader board',
    icon: 'icon',
  },

  {
    id: 5,
    title: 'roles and permission',
    icon: 'icon',
  },

  {
    id: 6,
    title: 'profile',
    icon: 'icon',
  },
];

const Box = function () {
  return (
    <section className='flex container pt-14 gap-x-14 '>
      <div className='w-1/5 bg-white shadow-2xl h-[20rem] p-5 rounded-xl  '>
        {sideBar.map((item) => {
          return <div className='mb-7 capitalize  '>{item.title}</div>;
        })}
        <div>
          <img src={richie} alt='richie' className='h-[9rem]' />
        </div>
      </div>

      <div className='w-full grid grid-cols-6 gap-x-40'>
        <div className='bg-[#E16D38] w-[11rem] h-[11.5rem] rounded text-center  py-12'>
          <span className='text-white text-4xl mb-5'>75%</span>
          <p className='text-gray-100 font-thin text-sm'>Average grade</p>
        </div>
        <div className='bg-[#943993] w-[11rem] h-[11.5rem] rounded text-center  py-12'>
          <span className='text-white text-4xl mb-5'>125</span>
          <p className='text-gray-100 font-thin text-sm'>
            No of students sponsored
          </p>
        </div>
        <div className='bg-[#97B550] w-[11rem] h-[11.5rem] rounded text-center  py-12'>
          <span className='text-black text-4xl mb-5'>125</span>
          <p className='text-black font-thin text-sm'>
            Best matched candidates
          </p>
        </div>
        <div className='bg-[#7A6D7B] w-[11rem] h-[11.5rem] rounded text-center  py-12'>
          <span className='text-white text-4xl mb-5'>125</span>
          <p className='text-gray-100 font-thin text-sm'>
            No of students sponsored
          </p>
        </div>
        <div className='bg-[#943993] w-[16rem] h-[11.5rem] rounded-xl pl-7'>
          <p className='text-gray-100 text-lg'>Statistics</p>
        </div>
      </div>
    </section>
  );
};

export default Box;
