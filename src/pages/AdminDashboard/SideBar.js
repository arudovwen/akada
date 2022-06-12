// import richie from '../../../images/richieimage.png';
import richie from '../../images/richieimage.png';
import josh from '../../images/josh.png';
import icon3 from '../../images/icon3.png';
import icon4 from '../../images/icon4.png';
import icon5 from '../../images/icon5.png';
import { NavLink } from 'react-router-dom';
// import SideModal from '../../../components/SideModal';
import { useState } from 'react';
//import AddUser from '../../Dashboard/Forms/AddUser';
import { XIcon } from '@heroicons/react/outline';
import akada from '../../images/akada-logo.png';
import {
  CalendarIcon,
  KeyIcon,
  AcademicCapIcon,
  PlayIcon,
  PresentationChartLineIcon,
  ViewGridIcon,
  CreditCardIcon,
  UserIcon,
  UsersIcon,
} from '@heroicons/react/outline';
const sideBar = [
  {
    id: 1,
    title: 'overview',
    icon: icon3,
    url: '/overview',
  },

  {
    id: 3,
    title: 'students',
    icon: icon3,
    url: '/students',
  },

  {
    id: 4,
    title: 'access requests',
    icon: icon4,
    url: '/access-requests',
  },

  {
    id: 5,
    title: 'payments',
    icon: icon5,
    url: '/admin-payments',
  },

  {
    id: 6,
    title: 'approvals',
    icon: icon5,
    url: '/approvals',
  },
  {
    id: 7,
    title: 'roles and permissions',
    icon: icon5,
    url: '/roles-permissions',
  },

  {
    id: 8,
    title: 'manage partners',
    icon: icon5,
    url: '/manage-partners',
  },

  {
    id: 9,
    title: 'manage sponsors',
    icon: icon3,
    url: '/manage-sponsors',
  },
];
const currentHour = new Date().getHours();

const greetingMessage =
  currentHour >= 0 && currentHour < 12 // after 4:00AM and before 12:00PM
    ? 'Good morning.'
    : currentHour >= 12 && currentHour <= 17 // after 12:00PM and before 6:00pm
    ? 'Good afternoon.'
    : currentHour > 17 || currentHour < 0 // after 5:59pm or before 4:00AM (to accommodate night owls)
    ? 'Good evening.' // if for some reason the calculation didn't work
    : 'Welcome';

const SideBar = function () {
  let [isSideOpen, setIsSideOpen] = useState(false);
  function toggleSideModal() {
    setIsSideOpen(!isSideOpen);
  }

  return (
    <section className="bg-white h-screen py-6">
      <div className="mb-5 px-5">
        <img src={akada} alt="logo" className="w-[100px] h-auto z-40" />
      </div>

      <nav className="p-5 mb-20">
        {sideBar.map((item) => (
          <NavLink
            to={item.url}
            key={item.id}
            className="py-3 capitalize flex gap-x-5  hover:text-primary"
          >
            {item.id === 1 && <ViewGridIcon className="w-6 h-6" />}
            {item.id === 2 && <CalendarIcon className="w-6 h-6" />}
            {item.id === 3 && <AcademicCapIcon className="w-6 h-6" />}
            {item.id === 4 && <PlayIcon className="w-6 h-6" />}
            {item.id === 5 && <CreditCardIcon className="w-6 h-6" />}
            {item.id === 6 && <CalendarIcon className="w-6 h-6" />}
            {item.id === 7 && <KeyIcon className="w-6 h-6" />}
            {item.id === 8 && <UserIcon className="w-6 h-6" />}
            {item.id === 9 && <UsersIcon className="w-6 h-6" />}
            <div> {item.title} </div>
          </NavLink>
        ))}
        <hr style={{ borderColor: "#fafafa" }} />
        {/* <span
          className='py-3 capitalize flex gap-x-5  hover:text-primary max-w-max cursor-pointer'
          onClick={() => toggleSideModal()}
        >
          <CalendarIcon className='w-6 h-6' /> Add user
        </span> */}
      </nav>

      {/* <div className='rounded-xl bg-[#FFEBE2] relative h-56 max-h-52 flex justify-center'>
        <img
          src={currentHour > 17 ? josh : richie}
          alt='richie'
          className='h-56 mx-auto  z-10 absolute -top-8'
        />
        <button className='py-3  rounded-full shadow-2xl text-[#909096] bg-white px-8 z-20  absolute -bottom-6 whitespace-nowrap '>
          {greetingMessage}{' '}
          <span className='absolute top-0 right-6'>&#128521;</span>
        </button>
      </div> */}
      {/* Add user starts */}
      {/* <SideModal isSideOpen={isSideOpen} closeModal={() => toggleSideModal()}>
        <div className='p-8'>
          <span
            className='absolute top-4 right-4  z-40 cursor-pointer'
            onClick={() => toggleSideModal()}
          >
            <XIcon className='w-6 h-6' />
          </span>
          <AddUser />
        </div>
      </SideModal> */}
    </section>
  );
};

export default SideBar;
