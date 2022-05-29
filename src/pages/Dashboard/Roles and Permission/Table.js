import customer1 from '../../../images/customer1.png';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { DotsVerticalIcon, XIcon } from '@heroicons/react/outline';
import { Menu, Transition } from '@headlessui/react';
import CustomModal from '../../../components/Modal';
import StudentDetail from '../../Dashboard/StudentDetails/Details';
import Pagination from '../../../components/Pagination';
import Button from '../../../components/Button';
import AssignRole from '../Forms/AssignRole';
import { IoMdCheckmark } from 'react-icons/io';
const Table = function () {
  let [isOpen, setIsOpen] = React.useState(false);
  let [assignOpen, setAssignOpen] = React.useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const assignToggle = () => {
    setAssignOpen(!assignOpen);
  };
  return (
    <div className=' container pb-20 relative'>
      <div className='text-right mb-5'>
        <Button
          className='bg-primary px-8 rounded uppercase text-sm py-2 text-white ml-auto'
          onClick={() => assignToggle(true)}
        >
          Assign role
        </Button>
      </div>
      <div className='overflow-x-auto w-full'>
        <table className='capitalize table-auto text-dashboardgray text-sm w-full'>
          <thead>
            <tr className='text-left'>
              <th>Name</th>
              <th>roles</th>

              <th className='text-right px-5'>action</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(6)].map((e, i) => (
              <tr className='' key={i}>
                <td className='flex items-center'>
                  {' '}
                  <img
                    src={customer1}
                    className='w-8 h-8 rounded-lg mr-2'
                    alt='cusotmer'
                  />{' '}
                  odunated taiwo
                </td>

                <td>admin</td>

                <td className='text-right px-8'>
                  <Menu as='div'>
                    <Menu.Button>
                      <DotsVerticalIcon className='w-6 h-6' />
                    </Menu.Button>
                    <Transition
                      as={React.Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'
                    >
                      <Menu.Items className='absolute right-4 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-40'>
                        <Menu.Item>
                          <div
                            className='rounded-md px-4 py-3 text-sm text-center'
                            onClick={() => setIsOpen(true)}
                          >
                            Unassign
                          </div>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination />
      </div>
      <CustomModal isOpen={isOpen} closeModal={() => toggleModal()}>
        <div className='relative'>
          <span
            className='absolute top-4 right-4  z-40 cursor-pointer'
            onClick={() => toggleModal()}
          >
            <XIcon className='w-6 h-6 z-40 cursor-pointer' />
          </span>
          <StudentDetail />
        </div>
      </CustomModal>
      <AssignRole />
      <div className='bg-white translate-x-2/4 w-[331px]  border rounded-xl pt-4 absolute top-[200px] right-1/2 text-center'>
        <div className='text-white text-[52px] bg-text-color w-20 h-20 rounded-full text-center top-[-3rem] mx-auto absolute inset-x-0 flex items-center justify-center'>
          <IoMdCheckmark />
        </div>

        <div className='px-16'>
          <h3 className='text-center text-text-color font-semibold capitalize mb-1 mt-6 text-lg'>
            success!
          </h3>
          <p className='text-[#8D8D8D] text-sm text-center text-ligh mb-4'>
            {' '}
            Yay! User role assigned successfully
          </p>
        </div>

        <div className='text-center bg-[#E4E5E3] text-sm rounded-br-xl rounded-bl-xl    flex items-center justify-center w-full py-4 mt-8  font-bold uppercase text-text-color'>
          {' '}
          <Link to='/dashboard'>go to dashboard</Link>
        </div>
      </div>
    </div>
  );
};

export default Table;
