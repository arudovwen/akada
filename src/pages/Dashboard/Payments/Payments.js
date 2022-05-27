import Boxes from './Boxes';
import Table from './Table';
import RecentPayments from './RecentPayments';
import QuickAction from './QuickAction';

const Payments = function () {
  return (
    <section>
      <div className='flex gap-x-7'>
        <Boxes />

        <RecentPayments />
      </div>
      <div className='flex  gap-x-7 pt-14'>
        <Table />
        <QuickAction />
      </div>
    </section>
  );
};

export default Payments;
