import Header from '../Navigation/Header';
import SponsorCart from './SponsorCart.js';
import Budget from './Budget';
import Table from './Table';
import Summary from './Summary';

const Cart = function () {
  return (
    <section>
      <Header />
      <SponsorCart />
      <div className="lg:grid lg:grid-cols-4 container mx-auto gap-8">
        <div className="hidden lg:inline">
          <Budget />
        </div>

        <div className="lg:col-span-2">
          <Table />
        </div>

        <Summary />
      </div>
    </section>
  );
};
export default Cart;
