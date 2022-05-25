import customer1 from '../../../images/customer1.png';
import * as React from 'react';
import {
  DotsVerticalIcon,
  ChevronDownIcon,
  XIcon,
} from '@heroicons/react/outline';
import { Menu, Transition } from '@headlessui/react';
import CustomModal from '../../../components/Modal';
import StudentDetail from '../../Dashboard/StudentDetails/Details';
const Table = function () {
  let [isOpen, setIsOpen] = React.useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <div className=' container pb-20'>
      <div className='overflow-x'>
        <table className='capitalize table-auto text-dashboardgray text-sm w-full'>
          <thead>
            <tr className='text-left'>
              <th>Name</th>
              <th>roles</th>

              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((e, i) => (
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

                <td>
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
                            View
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
      </div>
      <CustomModal isOpen={isOpen} closeModal={() => toggleModal()}>
        <div className='relative'>
          <span
            className='absolute top-4 right-4'
            onClick={() => toggleModal()}
          >
            <XIcon className='w-6 h-6' />
          </span>
          <StudentDetail />
        </div>
      </CustomModal>
    </div>
  );
};

export default Table;