import customer1 from '../../../images/customer1.png';
import eye from '../../../images/eye.png';
import brow from '../../../images/brow.png';
import * as React from 'react';
import {
  DotsVerticalIcon,
  ChevronDownIcon,
  XIcon,
} from '@heroicons/react/outline';
import { Menu, Transition } from '@headlessui/react';
import CustomModal from '../../../components/Modal';
// import Pagination from '../../../components/Pagination';
import StudentDetail from '../../Dashboard/StudentDetails/Details';

const Table = function () {
  return (
    <section className='w-full  rounded-xl bg-white shadow-2xl'>
      <div className=''>
        <div className='overflow-x-auto '>
          <table className='capitalize table-auto text-dashboardgray text-sm w-full'>
            <thead>
              <tr className='text-left'>
                <th>Name</th>
                <th>Platform</th>
                <th>Subscription</th>
                <th>school</th>

                <th>grade</th>

                <th>amount</th>
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
                  <td>u-lesson</td>
                  <td>Monthly</td>

                  <td>corona school</td>
                  <td>A+</td>
                  <td>50,000</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Table;
