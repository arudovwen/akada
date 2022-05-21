import Table from './Table';
import Navigation from './Navigation';
import SideNav from './SideNav';
import Boxes from './Boxes';

const Dashboard = function () {
  return (
    <section>
      <Navigation />
      <div className='flex'>
        <SideNav />
        <Boxes />
      </div>

      <Table />
    </section>
  );
};

export default Dashboard;
