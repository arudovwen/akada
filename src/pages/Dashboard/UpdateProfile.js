import ProfilePicture from './ProfilePicture';

const UpdateProfile = function () {
  return (
    <section className='w-full '>
      <ProfilePicture />
      <div className='flex justify-between shadow-lg py-14 pl-20 pr-7 rounded-xl'>
        <div className='grid grid-cols-2 gap-x-[15rem]'>
          <div className='mb-6'>
            <p className='text-gray-400 capitalize  mb-3'>name</p>
            <span className='block text-lg capitalize '>Andrew John</span>
          </div>

          <div className='mb-6'>
            <p className='text-gray-400 capitalize  mb-3'>gender</p>
            <span className='block text-lg capitalize '>male</span>
          </div>

          <div className='mb-6'>
            <p className='text-gray-400 capitalize  mb-3'>email</p>
            <span className='block text-lg '>andrewjohn@gmail.com</span>
          </div>

          <div className='mb-6'>
            <p className='text-gray-400 capitalize  mb-3'>location</p>
            <span className='block text-lg capitalize '>lagos</span>
          </div>
          <div className='mb-6'>
            <p className='text-gray-400 capitalize  mb-3'>phone</p>
            <span className='block text-lg capitalize '>08033957829</span>
          </div>

          <div className='mb-6'>
            <p className='text-gray-400 capitalize  mb-3'>role</p>
            <span className='block text-lg capitalize '>admin</span>
          </div>
        </div>

        <div>
          <button className='bg-primary rounded-lg py-3 px-3 text-white capitalize'>
            edit profile
          </button>
        </div>
      </div>
    </section>
  );
};
export default UpdateProfile;
