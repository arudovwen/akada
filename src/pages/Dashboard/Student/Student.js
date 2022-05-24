import Header from '../Navigation/Header';
import SideBar from '../Navigation/SideBar';
import Boxes from './Boxes';

const Student = function () {
  return (
    <section>
      <Header />
      <div className='flex px-4 lg:px-8'>
        <SideBar />
        <Boxes />
      </div>
    </section>
  );
};

export default Student;
