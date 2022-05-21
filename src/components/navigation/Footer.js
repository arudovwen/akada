import * as React from 'react';
import akadaLogo from '../../images/akada-logo.png';
import { ImFacebook, ImTwitter } from 'react-icons/im';
import { IoLogoInstagram } from 'react-icons/io';

const footerIcons = [
  {
    id: 1,
    link: "f",
    icon: <ImFacebook />,
  },

  {
    id: 2,
    link: "",
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
    <section className="container pt-7 pb-4 lg:py-14 text-center ">
      <img src={akadaLogo} alt="akada-logo " className="mb-3 mx-auto md:mx-0" />
      <div className="grid grid-cols-1 lg:grid-cols-3  lg:gap-x-8 ">
        <div className="">
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
            dolorem consequatur blanditiis ducimus eveniet ratione cumque quas
            adipisci suscipit dignissimos!
          </p>
        </div>
        <div className="flex gap-x-20 lg:gap-x-56 mb-5 lg:mb-0 justify-center">
          <div className="capitalize  ">
            <div className="mb-5 lg:mb-10">features</div>
            <div>pricing</div>
          </div>
          <div className="capitalize  ">
            <div className="mb-5 lg:mb-10">resources</div>
            <div>blog</div>
          </div>
        </div>
        <div className="flex gap-x-5 mb-5 lg:mb-0 lg:gap-x-14 justify-center lg:justify-end">
          {footerIcons.map((item) => {
            return (
              <a key={item.id} className="text-gray-600 text-2xl" href="/facebook">
                {item.icon}
              </a>
            );
          })}
        </div>
      </div>
      <div className="capitalize text-gray-600 text-xs md:text-base">
        copyright © 2022 akada. All rights reserved.
      </div>
    </section>
  );
}

export default Footer;
