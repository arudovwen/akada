import Boxes from './Boxes';
import Table from './Table';
import RecentPayments from './RecentPayments';

const Payments = function () {
  return (
    <section>
      <div className='flex gap-x-7'>
        <Boxes />

        <RecentPayments />
      </div>
      {/* <Table /> */}
    </section>
  );
};

export default Payments;
