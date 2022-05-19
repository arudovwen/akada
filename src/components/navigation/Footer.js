import * as React from 'react';
import akadaLogo from '../../images/akada-logo.png';
import { ImFacebook, ImTwitter } from 'react-icons/im';
import { IoLogoInstagram } from 'react-icons/io';

const footerIcons = [
  {
    id: 1,
    link: 'f',
    icon: <ImFacebook />,
  },

  {
    id: 2,
    link: '',
    icon: <ImTwitter />,
  },

  {
    id: 3,
    link: '',
    icon: <IoLogoInstagram />,
  },
];
function Footer() {
  return (
    <section className='container py-14 '>
      <img src={akadaLogo} alt='akada-logo ' className='mb-3' />
      <div className='flex gap-x-32 '>
        <div className='w-[35%] '>
          <p className='mb-5'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
            dolorem consequatur blanditiis ducimus eveniet ratione cumque quas
            adipisci suscipit dignissimos!
          </p>
          <div className='capitalize text-gray-600'>
            copyright © 2022 akada. All rights reserved.
          </div>
        </div>
        <div className='flex gap-x-56 w-[35%]'>
          <div className='capitalize  '>
            <div className='mb-10'>features</div>
            <div>pricing</div>
          </div>
          <div className='capitalize  '>
            <div className='mb-10'>resources</div>
            <div>blog</div>
          </div>
        </div>
        <div className='flex gap-x-14 '>
          {footerIcons.map((item) => {
            return (
              <a className='text-gray-600 text-2xl' href=''>
                {item.icon}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Footer;
