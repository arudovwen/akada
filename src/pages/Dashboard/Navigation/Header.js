import * as React from "react";
import akada from "../../../images/akada-logo.png";
import home from "../../../images/home.png";
import taiwo from "../../../images/taiwo.png";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import SideModal from "../../../components/SideModal";
import AddUser from "../../Dashboard/Forms/AddUser";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { toast } from "react-toastify";

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
  ChevronDownIcon,
} from "@heroicons/react/outline";
const sideBar = [
  {
    id: 1,
    title: "overview",
    url: "/dashboard",
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
  const { logout, user } = useAuth();

  function LogOut() {
    logout();
    toast.success("Logged out");
  }
  const [status, setStatus] = React.useState(false);
  function handleChange(e) {
    setStatus(e.target.checked);
  }
  let [isSideOpen, setIsSideOpen] = React.useState(false);

  function toggleSideModal() {
    setStatus(false);
    setIsSideOpen(!isSideOpen);
  }
  const location = useLocation();

  React.useEffect(() => {
    setStatus(false);
    setIsSideOpen(false);
  }, [location]);

  return (
    <section className="bg-[#FAFAFA] w-full px-4 lg:px-8 shadow lg:shadow-none z-40">
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
              {/* <span>Overview</span> */}
              <Link to="/overview">Overview </Link>
            </div>
            <div className="flex items-center flex-1 relative">
              <input
                type="text"
                placeholder="Search"
                className=" rounded-full px-4 py-2 flex-1"
              />
              <SearchIcon className="w-4 h-4 absolute right-5" />
            </div>
          </div>
        </div>
        <div className="col-span-1 items-center justify-between  hidden lg:flex">
          <div className="flex items-center">
            <NavLink to="/cart">
              {" "}
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-5 relative cursor-pointer">
                <span className="bg-red-500 w-2 h-2 rounded-full absolute top-3 right-2"></span>
                <ShoppingBagIcon className="w-5 h-5 relative" />
              </div>
            </NavLink>
            <NavLink to="/notifications">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center relative cursor-pointer">
                <span className="bg-red-500 w-2 h-2 rounded-full absolute top-3 right-2"></span>
                <BellIcon className="w-5 h-5" />
              </div>
            </NavLink>
          </div>
          <Menu as="div">
            <Menu.Button>
              {" "}
              <div className="text-right flex gap-x-2 items-center h-10 bg-white rounded-full px-4 cursor-pointer">
                <img src={taiwo} alt="taiwo" />
                <p className="capitalize">{user.name}</p>
                <ChevronDownIcon
                  className="ml-2 -mr-1 h-5 w-5 text-gray-400 hover:text-gray-500"
                  aria-hidden="true"
                />
              </div>
            </Menu.Button>
            <Transition
              as={React.Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-4 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-40">
                <Menu.Item>
                  <div
                    className="rounded-md px-4 py-3 text-sm hover:text-primary cursor-pointer"
                    onClick={() => LogOut()}
                  >
                    Logout
                  </div>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
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
                  onClick={() => toggleSideModal()}
                  className="py-4 capitalize flex gap-x-5  hover:text-primary"
                >
                  {item.id === 1 && <ViewGridIcon className="w-6 h-6" />}
                  {item.id === 3 && <CreditCardIcon className="w-6 h-6" />}
                  {/* {item.id === 2 && <CalendarIcon className="w-6 h-6" />} */}
                  {item.id === 5 && <KeyIcon className="w-6 h-6" />}
                  {item.id === 4 && (
                    <PresentationChartLineIcon className="w-6 h-6" />
                  )}
                  {item.id === 6 && <UserIcon className="w-6 h-6" />}
                  <div> {item.title} </div>
                </NavLink>
              ))}
              <hr style={{ borderColor: "#fafafa" }} />
              <span
                className="py-4 capitalize flex gap-x-5  hover:text-primary max-w-max"
                onClick={() => toggleSideModal()}
              >
                <CalendarIcon className="w-6 h-6" /> Add user
              </span>
            </nav>
          </div>
        </aside>
      )}
      {/* Add user starts */}
      <SideModal isSideOpen={isSideOpen} closeModal={() => toggleSideModal()}>
        <div className="p-8">
          <span
            className="absolute top-4 right-4"
            onClick={() => toggleSideModal()}
          >
            <XIcon className="w-6 h-6" />
          </span>
          <AddUser />
        </div>
      </SideModal>
    </section>
  );
};
export default Header;
