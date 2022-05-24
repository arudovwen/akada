import * as React from "react";
import akada from "../../../images/akada-logo.png";
import home from "../../../images/home.png";
import taiwo from "../../../images/taiwo.png";

import { NavLink } from "react-router-dom";
import {
  ShoppingBagIcon,
  BellIcon,
  SearchIcon,
  CalendarIcon,
  KeyIcon,
  PresentationChartLineIcon,
  ViewGridIcon,
  UserIcon,
  CreditCardIcon,
  XIcon,
} from "@heroicons/react/outline";
const sideBar = [
  {
    id: 1,
    title: "overview",
    url: "/dashboard",
  },

  {
    id: 2,
    title: "add user",
    url: "/add-user",
  },

  {
    id: 3,
    title: "payments",
    url: "/payments",
  },

  {
    id: 4,
    title: "leader board",
    url: "/leader-board",
  },

  {
    id: 5,
    title: "roles & permission",
    url: "/roles",
  },

  {
    id: 6,
    title: "profile",
    url: "/profile",
  },
];

const Header = function () {
  const [status, setStatus] = React.useState(false);
  function handleChange(e) {
    setStatus(e.target.checked);
  }
  return (
    <section className="bg-[#FAFAFA] w-full mb-6 px-4 lg:px-8 shadow lg:shadow-none z-40">
      <nav className="flex lg:grid lg:grid-cols-4 py-5 items-center justify-between">
        <div className="col-span-1 z-40">
          <img src={akada} alt="logo" className="w-[100px] h-auto z-40" />
        </div>

        <div className="col-span-2  z-30 mr-6 hidden lg:inline">
          <div className="flex">
            <div className="bg-white py-2 px-6 rounded-3xl mr-6 flex items-center">
              {" "}
              <img src={home} alt="icon" className="h-4 w-4 mr-1" />
              <span className="mx-2 text-gray-400">|</span>
              <span>Overview</span>
            </div>
            <div className="flex items-center flex-1 relative">
              <input
                type="text"
                placeholder="Search"
                className=" rounded-full pl-6 py-2 flex-1"
              />
              <SearchIcon className="w-4 h-4 absolute right-5" />
            </div>
          </div>
        </div>
        <div className="col-span-1 items-center justify-between  hidden lg:flex">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-5 relative">
              <span className="bg-red-500 w-2 h-2 rounded-full absolute top-3 right-2"></span>
              <ShoppingBagIcon className="w-5 h-5 relative" />
            </div>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center relative">
              <span className="bg-red-500 w-2 h-2 rounded-full absolute top-3 right-2"></span>
              <BellIcon className="w-5 h-5" />
            </div>
          </div>

          <div className="text-right flex gap-x-2 items-center h-10 bg-white rounded-full px-4">
            <img src={taiwo} alt="taiwo" />
            <p>Taiwo Odunade</p>
          </div>
        </div>
        {!status && (
          <label htmlFor="check" className="flex lg:hidden menu z-40">
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
        )}
      </nav>
      {status && (
        <aside className="w-full bg-gray-800/80 h-screen fixed left-0 top-0 z-[999] ease-in-out transition duration-500">
          <div className="w-[250px] h-full bg-white pl-6 py-6 relative slide-in-left transition duration-500">
            <XIcon
              className="w-6 h-6 top-2 right-2 absolute cursor-pointer"
              onClick={() => setStatus(false)}
            />
            <img
              src={akada}
              alt="logo"
              className="w-[160px] h-auto z-40 mb-8"
            />
            <nav>
              {sideBar.map((item) => (
                <NavLink
                  to={item.url}
                  key={item.id}
                  className="py-4 capitalize flex gap-x-5  hover:text-primary"
                >
                  {item.id === 1 && <ViewGridIcon className="w-6 h-6" />}
                  {item.id === 3 && <CreditCardIcon className="w-6 h-6" />}
                  {item.id === 2 && <CalendarIcon className="w-6 h-6" />}
                  {item.id === 5 && <KeyIcon className="w-6 h-6" />}
                  {item.id === 4 && (
                    <PresentationChartLineIcon className="w-6 h-6" />
                  )}
                  {item.id === 6 && <UserIcon className="w-6 h-6" />}
                  <div> {item.title} </div>
                </NavLink>
              ))}
            </nav>
          </div>
        </aside>
      )}
    </section>
  );
};
export default Header;
