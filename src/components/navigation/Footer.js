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
    <section className="container pt-6 lg:py-14 mx-auto ">
      <img src={akadaLogo} alt="akada-logo " className="mb-3 mx-auto lg:mx-0" />
      <div className="grid grid-cols-1 lg:flex  lg:gap-x-8 text-center lg:text-left">
        <div className="w-full lg:w-[35%] ">
          <p className="mb-5">
          Akadaplay is a one-stop solution to rewarding and incentivising academic excellence among primary and secondary school kids. We do this by highlighting the profile of exceptional children from leading educational learning platforms and providing this information to FSTE brands for sponsorships.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full lg:w-[35%] mb-5 justify-center lg:justify-start">
          <div className="capitalize">features</div>
          {/* <div className="capitalize">pricing</div> */}

          {/* <div className="capitalize">resources</div> */}
          {/* <div className="capitalize">blog</div> */}
        </div>
        <div className="flex gap-x-5 mb-3 lg:mb-0 lg:gap-x-14 justify-center lg:justify-start">
          {footerIcons.map((item) => {
            return (
              <a className="text-gray-600 text-2xl" href="#" key={item.icon}>
                {item.icon}
              </a>
            );
          })}
        </div>
      </div>
      <div className="capitalize text-gray-600 text-center lg:text-left">
        copyright © 2022 akada. All rights reserved.
      </div>
    </section>
  );
}

export default Footer;
