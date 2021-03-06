
import taiwo from "../../../images/taiwo.png";
import {
  ShoppingBagIcon,
  BellIcon,
  HomeIcon,
} from "@heroicons/react/solid";
import {Link} from "react-router-dom"

const Header = function () {
  return (
    <section className="bg-fuchsia-100 w-full px-0 shadow-lg">
      <nav className="grid grid-cols-4 py-3 items-center justify-around">
        <Link to="/" className="w-10 h-10 rounded-full bg-white flex items-center justify-center relative mx-auto">
          <span className="bg-red-500 w-2 h-2 rounded-full absolute top-3 right-2 z-10"></span>
          <HomeIcon className="w-8 h-8 relative text-primary" />
        </Link>

        <Link to="/cart" className="w-10 h-10 rounded-full bg-white flex items-center justify-center relative mx-auto">
          <span className="bg-red-500 w-2 h-2 rounded-full absolute top-3 right-2  z-10"></span>
          <ShoppingBagIcon className="w-8 h-8 relative text-primary" />
        </Link>
        <Link to="/notifications" className="w-10 h-10 rounded-full bg-white flex items-center justify-center relative mx-auto">
          <span className="bg-red-500 w-2  h-2 rounded-full absolute top-3 right-2  z-10"></span>
          <BellIcon className="w-8 h-8 text-primary" />
        </Link>

        <Link to="/profile" className=" h-10 w-10 bg-white rounded-full flex items-center justify-center mx-auto">
          <img src={taiwo} alt="taiwo" className="w-8 h-8" />
        </Link>
      </nav>
    </section>
  );
};
export default Header;
