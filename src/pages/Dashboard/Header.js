import akada from '../../images/akada-logo.png';
import home from '../../images/home.png';
import taiwo from '../../images/taiwo.png';
import bag from '../../images/bag.png';
import bell from '../../images/bell.png';

const Header = function () {
  return (
    <section className='bg-[#FAFAFA] w-full mb-12'>
      <nav className='grid grid-cols-4 py-5 container '>
        <div className='col-span-1'>
          <img src={akada} alt='logo' className='w-20 h-7' />
        </div>

        <div className='col-span-2  z-30 mr-6'>
          <div className='flex'>
            <div className='bg-white py-2 px-6 rounded-3xl mr-6 flex items-center'>
              {' '}
              <img src={home} alt='icon' className='h-4 w-4 mr-1' />
              <span className='mx-2'>|</span>
              <span>Overview</span>
            </div>
            <input
              type='text'
              placeholder='Search'
              className=' rounded-full pl-6 py-2 flex-1'
            />
          </div>
        </div>
        <div className='col-span-1 flex items-center justify-between'>
          <div className='flex items-center'>
            <div className='w-5 h-5 rounded-full bg-white flex item-center justify-center mr-5'>
              {' '}
              <img src={bag} alt='shopping-bag' />
            </div>
            <div className='w-5 h-5 rounded-full bg-white flex item-center justify-center'>
              <img src={bell} alt='bell' />
            </div>
          </div>

          <div className='text-right flex gap-x-2 items-center h-10 bg-white rounded-full px-4'>
            <img src={taiwo} alt='taiwo' />
            <p>Taiwo Odunade</p>
          </div>
        </div>
      </nav>
    </section>
  );
};
export default Header;
