import richie from "../../../images/richieimage.png";
import icon3 from "../../../images/icon3.png";
import icon4 from "../../../images/icon4.png";
import icon5 from "../../../images/icon5.png";
import { NavLink } from "react-router-dom";
import SideModal from "../../../components/SideModal";
import { useState } from "react";
import AddUser from "../../Dashboard/Forms/AddUser";
import { XIcon } from "@heroicons/react/outline";
import {
  CalendarIcon,
  KeyIcon,
  PresentationChartLineIcon,
  ViewGridIcon,
  UserIcon,
  CreditCardIcon,
} from "@heroicons/react/outline";
const sideBar = [
  {
    id: 1,
    title: "overview",
    icon: icon3,
    url: "/dashboard",
  },

  {
    id: 3,
    title: "payments",
    icon: icon3,
    url: "/payments",
  },

  {
    id: 4,
    title: "leader board",
    icon: icon4,
    url: "/leader-board",
  },

  {
    id: 5,
    title: "roles & permission",
    icon: icon5,
    url: "/roles",
  },

  {
    id: 6,
    title: "profile",
    icon: icon5,
    url: "/profile",
  },
];

const SideBar = function () {
  let [isSideOpen, setIsSideOpen] = useState(false);

  function toggleSideModal() {
    setIsSideOpen(!isSideOpen);
  }

  return (
    <section className="">
      <nav className=" bg-white shadow-2xl min-h-[20rem] w-[15rem] p-5 rounded-xl  mb-20">
        {sideBar.map((item) => (
          <NavLink
            to={item.url}
            key={item.id}
            className="py-4 capitalize flex gap-x-5  hover:text-primary"
          >
            {item.id === 1 && <ViewGridIcon className="w-6 h-6" />}
            {item.id === 3 && <CreditCardIcon className="w-6 h-6" />}
            {/* {item.id === 2 && <CalendarIcon className="w-6 h-6" />} */}
            {item.id === 5 && <KeyIcon className="w-6 h-6" />}
            {item.id === 4 && <PresentationChartLineIcon className="w-6 h-6" />}
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

      <div className="rounded-xl bg-[#FFEBE2] relative h-56 max-h-52 flex justify-center">
        <img
          src={richie}
          alt="richie"
          className="h-56 mx-auto  z-10 absolute -top-8"
        />
        <button className="py-3  rounded-full shadow-2xl text-[#909096] bg-white px-8 z-20  absolute -bottom-6 whitespace-nowrap ">
          Good morning <span className="absolute top-0 right-6">&#128521;</span>
        </button>
      </div>
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

export default SideBar;
