import Dashboard from '../Home';
import Header from '../Navigation/Header';
import SideBar from '../Navigation/SideBar';
import AddUser from '../Forms/AddUser';

const Add = function () {
  return (
    <section>
      <Dashboard />

      <AddUser />
    </section>
  );
};

export default Add;
