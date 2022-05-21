import * as React from 'react';
import star from '../../images/star.png';
import blocks from '../../images/blocks.svg';
import Sponsorship from '../../images/Sponsorship.svg';
import gradient from '../../images/gradient.png';
import rec from '../../images/rec.svg';
import coin from '../../images/coin.png';
const categories = [
  {
    id: 1,
    img: Sponsorship,
    title: 'Sponsorship',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ',
  },
  {
    id: 1,
    img: '',
    title: 'Manage sponorship',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ',
  },
  {
    id: 1,
    img: '',
    title: 'Gamification',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ',
  },
  {
    id: 1,
    img: '',
    title: 'Sponsorship',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ',
  },
];
function Features() {
  return (
    <div className='bg-[#f8f8f8] py-16 relative'>
      <div className='container text-center'>
        <h5 className='text-xl text-gray-600 uppercase'>Features</h5>
        <h2 className='text-5xl font-black mb-8'>Stand -out Features</h2>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 lg:w-[80%] mx-auto relative'>
          {categories.map((item) => (
            <div className=' z-20 hover:shadow-lg hover:bg-white px-6 py-8 rounded-3xl transition ease-in-out delay-300 duration-300'>
              <div className='p-5 bg-[#FFF1DA] rounded-t-8 rounded-b-8 w-12 h-12 flex items-center justify-center mx-auto mb-4'>
                {' '}
                <img src={item.img} className='w-8 h-8 mx-auto' />
              </div>
              <h5 className='text-xl font-bold text-[#7A6D7B]'>{item.title}</h5>
              <p className='text-sm'>{item.text}</p>
            </div>
          ))}
          <img
            src={rec}
            alt='star'
            className='w-[100px] h-[100px] mx-auto absolute left-[20%] bottom-0'
          />
        </div>
      </div>
      <img
        src={star}
        alt='star'
        className='w-[150px] h-[160px] mx-auto absolute right-0 -top-8'
      />
      <img src={gradient} alt='star' className=' absolute left-0 top-0' />
      <img
        src={coin}
        alt='star'
        className=' absolute left-[30%] -top-6 w-12 h-12'
      />
      <img
        src={coin}
        alt='star'
        className=' absolute left-[10%] -bottom-6 w-12 h-12'
      />
      <img
        src={blocks}
        alt='star'
        className='w-[100px] h-[100px] absolute right-16 -bottom-8'
      />
    </div>
  );
}

export default Features;
