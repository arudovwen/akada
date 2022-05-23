import SideBar from './SideBar';
import Header from './Header';
import UpdateProfile2 from './UpdateProfile2';

const EditProfile2 = function () {
  return (
    <section>
      <Header />
      <div className='flex  container gap-x-32'>
        <SideBar />
        <UpdateProfile2 />
      </div>
    </section>
  );
};

export default EditProfile2;
