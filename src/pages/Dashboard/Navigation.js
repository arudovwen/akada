import logo from '../../images/akada-logo.png';

const Navigation = function () {
  return (
    <nav className='container flex'>
      <div className='w-1/4'>
        <img src={logo} alt='' className='w-[6rem] h-[2rem]' />{' '}
      </div>
      <div className='w-full flex justify-between'>
        <div>overviewamd search</div>
        <div>shop icons</div>
        <div>avi</div>
      </div>
    </nav>
  );
};

export default Navigation;
