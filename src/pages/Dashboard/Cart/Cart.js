import Header from '../Navigation/Header';
import BottomNav from "../Navigation/BottomNav";
import SponsorCart from './SponsorCart.js';
import Budget from './Budget';
import Table from './Table';
import Summary from './Summary';

const Cart = function () {
  return (
    <section>
      <Header />
      <SponsorCart />
      <div className="lg:grid lg:grid-cols-4 container mx-auto gap-8 pb-28 lg:pb-0">
        <div className="hidden lg:inline">
          <Budget />
        </div>

        <div className="lg:col-span-2">
          <Table />
        </div>

        <Summary />
      </div>
      <div className="lg:hidden fixed w-full bottom-0 z-[30] shadow-lg border-t">
        <BottomNav />
      </div>
    </section>
  );
};
export default Cart;
