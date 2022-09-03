import Header from "../Navigation/Header";
import BottomNav from "../Navigation/BottomNav";
import SponsorCart from "./SponsorCart.js";
import Budget from "./Budget";
import Table from "./Table";
import Summary from "./Summary";
import * as React from "react";
import { useCart } from "../../../hooks/useCart";

const Cart = function () {
  const { cart, setToCart, clearCart } = useCart();
  const [cartData, setCartData] = React.useState(cart);
  const [extraInfo, setExtraInfo] = React.useState({
    perks: [],
    budget: 0,
    apply: "",
  });
  const [fees, setFees] = React.useState(0);
  const [commission, setCommission] = React.useState(0);
  const [subtotal, setSubTotal] = React.useState(() => {
    return cartData
      .map((i) => i.amount)
      .reduce((a, b) => {
        return Number(a) + Number(b);
      }, 0);
  });
  const [total, setTotal] = React.useState(() => {
    return subtotal + commission + fees;
  });
  function updateCart(data) {
    setCartData(data);
    setToCart(data);
  }
  function updateInfo(data) {
    setExtraInfo(data);
  }
  function clearcart(){
    clearCart()
    updateCart([]);
  }
  React.useEffect(() => {
    setCartData(cart)
    setSubTotal(
      cartData
        .map((i) => i.amount)
        .reduce((a, b) => {
          return Number(a) + Number(b);
        }, 0)
    );
    setTotal(subtotal + commission + fees);
    setFees(subtotal * 0.25);
  }, [cart, cartData, commission, fees, subtotal]);
  return (
    <section>
      <Header />
      <SponsorCart cartData={cartData} setCartData={updateCart} />
      <div className="lg:grid lg:grid-cols-4 container mx-auto gap-8 pb-28 lg:pb-0">
        <div className="hidden lg:inline">
          <Budget
            extraInfo={extraInfo}
            updateInfo={updateInfo}
            total={total}
            subtotal={subtotal}
            commission={commission}
            fees={fees}
          />
        </div>

        <div className="lg:col-span-2">
          <Table cartData={cartData} updateCart={updateCart} />
        </div>

        <Summary
          extraInfo={extraInfo}
          total={total}
          subtotal={subtotal}
          commission={commission}
          fees={fees}
          clearcart={clearcart}
        />
      </div>
      <div className="lg:hidden fixed w-full bottom-0 z-[30] shadow-lg border-t">
        <BottomNav />
      </div>
    </section>
  );
};
export default Cart;
