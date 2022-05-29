import Boxes from "./Boxes";
import Table from "./Table";
import RecentPayments from "./RecentPayments";
import QuickAction from "./QuickAction";

const Payments = function () {
  return (
    <section>
      <div className="grid grid-cols-3 gap-x-12">
        <div className="col-span-2">
          <Boxes />
        </div>
        <div  className="col-span-1" >
          <RecentPayments/>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-12 pt-14">
          <div className="col-span-2">
        <Table />
  </div>
        <div  className="col-span-1" >
        <QuickAction />
           </div>
      </div>
    </section>
  );
};

export default Payments;
