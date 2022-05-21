import * as React from "react";
import akadaLogo from "../../images/akada-logo.png";
import { ImFacebook, ImTwitter } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io";

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
    link: "",
    icon: <IoLogoInstagram />,
  },
];
function Footer() {
  return (
    <section className="container pt-7 lg:py-14  ">
      <img src={akadaLogo} alt="akada-logo " className="mb-3" />
      <div className="grid grid-cols-1 lg:flex  lg:gap-x-8 ">
        <div className="w-full lg:w-[35%] ">
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
            dolorem consequatur blanditiis ducimus eveniet ratione cumque quas
            adipisci suscipit dignissimos!
          </p>
        </div>
        <div className="flex gap-x-20 lg:gap-x-56 w-[35%] mb-5 lg:mb-0">
          <div className="capitalize  ">
            <div className="mb-5 lg:mb-10">features</div>
            <div>pricing</div>
          </div>
          <div className="capitalize  ">
            <div className="mb-5 lg:mb-10">resources</div>
            <div>blog</div>
          </div>
        </div>
        <div className="flex gap-x-5 mb-3 lg:mb-0 lg:gap-x-14 ">
          {footerIcons.map((item) => {
            return (
              <a className="text-gray-600 text-2xl" href="">
                {item.icon}
              </a>
            );
          })}
        </div>
        <div className="capitalize text-gray-600">
          copyright © 2022 akada. All rights reserved.
        </div>
      </div>
    </section>
  );
}

export default Footer;
