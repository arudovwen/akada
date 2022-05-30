import MakePayment from './MakePayment';
import * as React from 'react';

import { DotsVerticalIcon, XIcon } from '@heroicons/react/outline';
import { Menu, Transition } from '@headlessui/react';
import CustomModal from '../../../components/Modal';

const summary = [
  {
    id: 1,
    title: 'subtotal',
    amount: 400000,
  },

  {
    id: 2,
    title: 'platform fees',
    amount: 400000,
  },

  {
    id: 3,
    title: 'commission',
    amount: 400000,
  },
];

const Summary = function () {
  let [isOpen, setIsOpen] = React.useState(false);
  const [isShowing, setIsShowing] = React.useState('');
  function toggleModal(val) {
    setIsShowing(val);
    setIsOpen(!isOpen);
  }
  return (
    <section className='bg-[#F9FAFB] p-3 capitalize text-dashboardgray'>
      <div>
        <h3 className='font-semibold text-lg mb-5'>summary</h3>
        {summary.map((item) => {
          return (
            <div className='flex justify-between mb-4'>
              <p> {item.title}</p>
              <span className='font-semibold'>NGN {item.amount}</span>
            </div>
          );
        })}
        <div>Total</div>
        <button
          type='button'
          className='uppercase bg-text-color w-full text-white rounded py-3 text-lg font-bold rounded-md mb-4 tracking-wider mt-5'
        >
          <span onClick={() => toggleModal('checkout')}>checkout</span>
        </button>
      </div>

      <CustomModal isOpen={isOpen} closeModal={() => toggleModal()}>
        <div className='relative'>
          <span
            className='absolute top-4 right-4  z-40 cursor-pointer'
            onClick={() => toggleModal()}
          >
            <XIcon className='w-6 h-6 z-40 cursor-pointer' />
          </span>
          {isShowing === 'checkout' && <MakePayment />}
        </div>
      </CustomModal>
    </section>
  );
};

export default Summary;
