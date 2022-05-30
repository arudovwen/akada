import Header from '../Navigation/Header';
import SponsorCart from './SponsorCart';
import Budget from './Budget';
import Table from './Table';
import Summary from './Summary';

const Cart = function () {
  return (
    <section>
      <Header />
      <SponsorCart />
      <div className='grid grid-cols-4 container mx-auto gap-x-3'>
        <Budget />
        <div className='col-span-2'>
          <Table />
        </div>

        <Summary />
      </div>
    </section>
  );
};
export default Cart;
