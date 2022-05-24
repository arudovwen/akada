import admin from '../../../images/admin.png';
import icon5 from '../../../images/icon5.png';
import { CameraIcon } from "@heroicons/react/solid";
const ProfilePicture = function () {
  return (
    <div className='pb-6  pt-12 text-white mb-20 relative h-[10rem]  rounded-xl profile-bg w-full'>
      <div className='flex items-center gap-3 absolute top-[3rem] left-[3rem]'>
        <img src={admin} alt='admin' />
        <div>
          <p>Taiwo Odunade</p>
          <p className="font-light">Admin Account</p>
        </div>
        <div className='top-[7.5rem] left-[6rem] absolute bg-primary h-8 w-8 ring-2 ring-white rounded-full flex items-center justify-center'>
          {' '}
       <CameraIcon className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePicture;
