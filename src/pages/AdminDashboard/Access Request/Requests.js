import React from 'react'
import { RiChat3Line } from "react-icons/ri";
import bg from "../../../images/bg.png";
import sponsor from "../../../images/lastSponsor.png";
import CustomModal from "../../../components/Modal";
import Approved from './Approved'
import RequestConfirmation from './RequestConfirmation'
import {
  XIcon
} from "@heroicons/react/outline";

const requests = [
  {
    id: 1,
    title: "Approval to Join Akada Platform",
    heading: "the sponsor foundation",
    image: bg,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam explicabo modi reprehenderit esse obcaecati blanditiis praesentium, doloribus nemo rem error? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi ea, ex minima voluptate provident animi vel inventore veniam sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi ea, ex minima voluptate provident animi vel inventore veniam sint.",
    time: "1H ago",
  },
  {
    id: 2,
    title: "Approval to Join Akada Platform",
    heading: "the sponsor foundation",
    image: bg,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam explicabo modi reprehenderit esse obcaecati blanditiis praesentium, doloribus nemo rem error? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi ea, ex minima voluptate provident animi vel inventore veniam sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi ea, ex minima voluptate provident animi vel inventore veniam sint.",
    time: "3H ago",
  },
];

const lastThreeApprovals = [
  {
    id: 1,
    name: "taiwo odunadde",
    image: sponsor,
  },

  {
    id: 2,
    name: "taiwo odunadde",
    image: sponsor,
  },

  {
    id: 3,
    name: "taiwo odunadde",
    image: sponsor,
  },
];

const Requests = function () {
   let [isOpen, setIsOpen] = React.useState(false);
   const [isShowing, setIsShowing] = React.useState("requests");
   function toggleModal(val) {

     setIsOpen(!isOpen);
   }
   function switchVal(val){
 setIsShowing(val);
   }
  return (
    <section className="w-full">
      <div className="capitalize flex py-3  gap-x-6 items-center font-semibold pt-7   lg:w-2/4 mb-4 mt-6">
        <div className="text-primary">all Requests</div>
        <div>approved requests</div>
        <div>pending requests</div>
      </div>
      <div className="grid grid-cols-4 gap-x-7">
        <div className="w-full lg:max-h-[80vh] overflow-auto lg:pr-8 pb-16 col-span-3">
          {requests.map((item) => (
            <div
              key={item.id}
              className="shadow lg:shadow-lg border border-gray-200 mb-6 rounded-sm px-5 pt-5 pb-8 bg-white"
            >
              <div className="flex items-center gap-x-1 mb-2">
                <img src={item.image} alt={item} className="w-14 h-14" />
                <div>
                  <h3 className="capitalize text-dashboardgray text-base font-semibold">
                    {item.heading}
                  </h3>
                  <span
                    className="text-sm text-[#5B5B5B]
"
                  >
                    {item.time}
                  </span>
                </div>
              </div>
              <div className=" mb-2">
                <div className="text-black font-bold text-lg flex-1">
                  {item.title}
                </div>
              </div>
              <div className="text-xs lg:text-sm mb-4">{item.content}</div>

              <div className="flex items-center gap-x-2">
                <button
                  className="bg-primary text-white w-44 py-3 uppercase rounded"
                  onClick={()=>toggleModal("requests")}
                >
                  grant accesss
                </button>
                <button className="text-primary bg-white w-44 py-3  border border-primary uppercase rounded">
                  decline
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white shadow-2xl rounded-2xl h-[16rem] py-4 col-span-1 px-3">
          <h4 className="text-black mb-4 font-semibold">Last 3 Approvals</h4>
          <ul>
            {lastThreeApprovals.map((approval) => {
              return (
                <li className="flex items-center gap-x-2 capitalize text-sm mb-2">
                  <img src={approval.image} alt={approval.name} />{" "}
                  {approval.name}{" "}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <CustomModal isOpen={isOpen} closeModal={() => toggleModal()}>
        <div className="relative">
          <span
            className="absolute top-4 right-4 z-40 cursor-pointer"
            onClick={() => toggleModal()}
          >
            <XIcon className="w-6 h-6 " />
          </span>
          {isShowing === "requests" ? (
            <RequestConfirmation switchVal={switchVal} />
          ) : (
            <Approved />
          )}
        </div>
      </CustomModal>
    </section>
  );
};

export default Requests;

//
