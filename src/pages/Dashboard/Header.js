import akada from '../../images/akada-logo.png';
import home from '../../images/home.png';
import taiwo from '../../images/taiwo.png';
import bag from '../../images/bag.png';

const Header = function () {
  return (
    <section className=' bg-[#FAFAFA]'>
      <nav className='flex py-5 container gap-x-14'>
        <div className='w-1/5'>
          <img src={akada} alt='logo' className='w-20 h-7' />
        </div>

        <div className='w-full grid grid-cols-3   '>
          <div className='flex gap-x-5 w-'>
            <div className='bg-white py-2 px-6 rounded-3xl'>
              {' '}
              {/* <img src={home} alt='icon' className='h-2 w-2' />  */}
              overview
            </div>
            <input
              type='text'
              placeholder='Search'
              className='w-[10rem] rounded-2xl pl-6 py-2 '
            />
          </div>

          <div className='flex ml-64 '>
            <div>icon</div>
            <div>icon</div>
          </div>

          <div className='text-right'>
            <img src='' alt='' />
            <p>taiwo odunadde</p>
          </div>
        </div>
      </nav>
    </section>
  );
};
export default Header;
