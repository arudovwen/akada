import * as React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import Button from '../Button';
import './Header.css';
function Header() {
  const [status, setStatus] = React.useState(false);
  function handleChange(e) {
    setStatus(e.target.checked);
  }
  return (
    <div className="py-4 relative bg-white top-0">
      <nav className="flex justify-between container mx-auto">
        <div className="logo">
          <img
            alt="akada logo"
            src={logo}
            className="w-[120px] md:w-[180px] h-auto"
          />
        </div>
        <div className="items-center hidden lg:flex">
          <Link to="/login" className="text-[#333] mr-4 text-bold text-lg">
            Log in
          </Link>
          <Button
            pill
            className="bg-transparent border text-[#943993] border-[#943993] uppercase text-sm font-bold px-5 border-primary hover:bg-primary hover:border-primary hover:text-white"
          >
            <Link to="/register">get started </Link>
          </Button>
        </div>

        <label htmlFor="check" className="flex lg:hidden menu">
          <input
            type="checkbox"
            id="check"
            value={status}
            onChange={(e) => handleChange(e)}
          />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </nav>
      {status && (
        <div className="z-40 text-center mx-auto lg:hidden grid grid-row-2 gap-4 justify-center p-4 rounded-lg shadow-lg absolute w-[90%] bg-[#943993] ml-[4%] mt-4 scale-in-center">
          <Link to="/login" className="text-white mr-3 text-bold">
            Log in
          </Link>
          <Link to="/register" className="text-white mr-3 text-bold">
            <Button
              pill
              className=" border text-[#943993] bg-white border-white uppercase text-sm font-bolder px-5"
            >
              Get started
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
