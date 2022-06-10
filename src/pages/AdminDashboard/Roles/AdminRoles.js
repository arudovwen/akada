import Table from './Table';
import AssignRole from './AssignRole';
import SuccessRole from './SuccessRole';

const AdminRoles = function () {
  return (
    <section>
      <Table />
      <AssignRole />
      <SuccessRole />
    </section>
  );
};

export default AdminRoles;
