import Boxes from "./Boxes";
import Table from "./Table";
import RecentPayments from "./RecentPayments";
import QuickAction from "./QuickAction";

const Payments = function () {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
        <div className="lg:col-span-4">
          <Boxes />
        </div>
        <div  className="lg:col-span-2" >
          <RecentPayments/>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 pt-14">
          <div className="lg:col-span-4">
        <Table />
  </div>
        <div  className="lg:col-span-2" >
        <QuickAction />
           </div>
      </div>
    </section>
  );
};

export default Payments;
