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
    <section>
      <div className=' container pb-20'>
        <div className='overflow-x-auto w-[43rem]'>
          <div className='flex justify-between'>
            <div className='font-semibold mb-4'>Sponsored list</div>
            <div className='text-[#97B550] underline capitalize'>view all</div>
          </div>

          <table className='capitalize table-auto text-dashboardgray text-sm '>
            <thead>
              <tr className='text-left'>
                <th>Name</th>
                <th>Platform</th>
                <th>Country</th>
                <th>Status</th>

                <th>school</th>
                <th>grade</th>

                <th>action</th>
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
                  <td>Turkey</td>
                  <td className='text-[#97B550]'>Sponsored</td>

                  <td>corona school</td>
                  <td>A+</td>

                  <td>
                    <img src={brow} alt='brow' />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* PAGINATION STARTS HERE    */}
        </div>
        {/* <CustomModal isOpen={isOpen} closeModal={() => toggleModal()}>
          <div className='relative'>
            <span
              className='absolute top-4 right-4'
              onClick={() => toggleModal()}
            >
              <XIcon className='w-6 h-6' />
            </span>
            <StudentDetail />
          </div>
        </CustomModal> */}
      </div>
    </section>
  );
};

export default Table;
