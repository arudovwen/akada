import customer1 from '../../../images/customer1.png';
import * as React from 'react';
import {
  DotsVerticalIcon,
  ChevronDownIcon,
  XIcon,
  TrashIcon,
} from '@heroicons/react/outline';
import { Menu, Transition } from '@headlessui/react';
import CustomModal from '../../../components/Modal';
// import StudentDetail from '../../Dashboard/StudentDetails/Details';
import StudentDetail from '../../Dashboard/StudentDetails/Details';
import StudentStats from '../../Dashboard/StudentDetails/StudentStats';
import Button from '../../../components/Button';
import Pagination from '../../../components/Pagination';

// import StudentStats from '../StudentDetails/StudentStats';
const Table = function () {
  let [isOpen, setIsOpen] = React.useState(false);
  const [isShowing, setIsShowing] = React.useState('details');
  function toggleModal(val) {
    setIsShowing(val);
    setIsOpen(!isOpen);
  }
  return (
    <div className=' container pb-20 mx-auto pt-7'>
      <div className='capitalize '>
        <div className='font-bold whitespace-nowrap'>
          <h3>Recent Transactions</h3>
        </div>
      </div>

      <div className='overflow-x-auto w-full approvals'>
        <table className='capitalize table-auto text-dashboardgray text-sm w-full'>
          <thead>
            <tr className='text-left'>
              <th>name</th>
              <th>organization</th>
              <th>Date</th>
              <th>amount</th>
              <th>purpose</th>

              <th>status</th>

              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(4)].map((e, i) => (
              <tr className='' key={i}>
                <td className='flex items-center'>
                  {' '}
                  <img
                    src={customer1}
                    className='w-8 h-8 rounded-lg mr-2'
                    alt='cusotmer'
                  />{' '}
                  taiwo odunade
                </td>
                <td>access bank</td>
                <td>23-Jun-2022</td>
                <td>N200000</td>
                <td>sponsorship</td>
                <td>active</td>

                <td>
                  <Menu as='div'>
                    <Menu.Button>
                      <TrashIcon className='w-4 h-4' />
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
                            onClick={() => toggleModal('details')}
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
        <Pagination />
      </div>
      <CustomModal isOpen={isOpen} closeModal={() => toggleModal()}>
        <div className='relative'>
          <span
            className='absolute top-4 right-4 z-40 cursor-pointer'
            onClick={() => toggleModal()}
          >
            <XIcon className='w-6 h-6 ' />
          </span>
          {isShowing === 'details' ? <StudentDetail /> : <StudentStats />}
        </div>
      </CustomModal>
    </div>
  );
};

export default Table;
