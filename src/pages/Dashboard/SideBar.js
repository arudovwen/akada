import bg from '../../images/bg.png';
import richie from '../../images/richieimage.png';
import icon3 from '../../images/icon3.png';
import icon4 from '../../images/icon4.png';
import icon5 from '../../images/icon5.png';

const sideBar = [
  {
    id: 1,
    title: 'overview',
    icon: icon3,
  },

  {
    id: 2,
    title: 'add user',
    icon: icon3,
  },

  {
    id: 3,
    title: 'payments',
    icon: icon3,
  },

  {
    id: 4,
    title: 'leader board',
    icon: icon4,
  },

  {
    id: 5,
    title: 'roles and permission',
    icon: icon5,
  },

  {
    id: 6,
    title: 'profile',
    icon: icon5,
  },
];

const SideBar = function () {
  return (
    <section className=''>
      <div className=''>
        <div className=' bg-white shadow-2xl h-[20rem] w-[15rem] p-5 rounded-xl  mb-20'>
          {sideBar.map((item) => {
            return (
              <div className='mb-7 capitalize flex gap-x-5  '>
                <img src={item.icon} alt='sidebar icon' />
                <div> {item.title} </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className='rounded-xl bg-[#FFEBE2] relative h-56 max-h-52 flex justify-center'>
        <img
          src={richie}
          alt='richie'
          className='h-56 mx-auto  z-10 absolute -top-8'
        />
        <button className='py-3  rounded-full shadow-2xl text-[#909096] bg-white px-8 z-20  absolute -bottom-6 whitespace-nowrap '>
          Good morning <span className='absolute top-0 right-6'>&#128521;</span>
        </button>
      </div>
    </section>
  );
};

export default SideBar;
