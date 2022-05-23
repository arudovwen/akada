import SideBar from './SideBar';
import Header from './Header';
import UpdateProfile from './UpdateProfile';

const EditProfile = function () {
  return (
    <section>
      <Header />
      <div className='flex  container gap-x-32'>
        <SideBar />
        <UpdateProfile />
      </div>
    </section>
  );
};

export default EditProfile;
