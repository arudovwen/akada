import admin from '../../images/admin.png';
import icon5 from '../../images/icon5.png';

const ProfilePicture = function () {
  return (
    <div className='bg-primary pb-6  pt-12 text-white mb-20 relative h-[10rem]  rounded-xl '>
      <div className='flex items-center gap-3 absolute top-[3rem] left-[3rem]'>
        <img src={admin} alt='admin' />
        <div>
          <p>Taiwo Odunade</p>
          <p>Admin Account</p>
        </div>
        <div className='top-[7.5rem] left-[6rem] absolute bg-primary h-8 w-8 rounded-full p-1.5'>
          {' '}
          <img src={icon5} alt='camera' className='mx-auto' />
        </div>
      </div>
    </div>
  );
};

export default ProfilePicture;
