import * as React from "react";
import star from "../../images/star.png";
import blocks from "../../images/blocks.svg";
import Sponsorship from "../../images/sponsor.png";
import gradient from "../../images/gradient.png";
import rec from "../../images/rec.svg";
import coin from "../../images/coin.png";
import Consultancy from "../../images/consultancy.png";
import Subscribe from "../../images/subscribe.png";
import Sponsor from "../../images/hand.png";

const categories = [
  {
    id: 1,
    img: Sponsor,
    title: "Sponsorship",
    text: "Reward academic excellence, award scholarships and provide aid to select schools. ",
  },
  {
    id: 1,
    img: Sponsorship,
    title: "Manage sponorship",
    text: "Track the activities of student/school beneficiaries and generate statistical reports. ",
  },
  {
    id: 1,
    img: Consultancy,
    title: "Consultancy",
    text: "Let’s discuss your CSR goals and help you shape your innovative educational ideas.  ",
  },
  {
    id: 1,
    img: Subscribe,
    title: "Subscribe",
    text: "Brands subscription to Akadapay gives you access to academic data from E-learning platforms for sponsorship. ",
  },
];
function Features() {
  return (
    <div className="bg-[#f8f8f8] py-24 relative">
      <div className="container text-center mx-auto">
        <h5 className="text-xl text-gray-600 uppercase mb-3">Features</h5>
        <h2 className="text-5xl font-black mb-12">Stand -out Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 lg:w-[80%] mx-auto relative">
          {categories.map((item,index) => (
            <div
              key={index}
              className=" z-20 shadow-none hover:shadow-lg bg-white lg:bg-transparent hover:bg-white px-6 py-12 rounded-3xl transition ease-in-out delay-300 duration-300"
            >
              <div className="bg-[#FFF1DA]  rounded-bl-2xl rounded-tr-2xl w-12 h-12 flex items-center justify-center mx-auto mb-4">
                {" "}
                <img src={item.img} className="w-8 h-8" alt="features" />
              </div>
              <h5 className="text-lg font-bold text-[#7A6D7B] mb-2">
                {item.title}
              </h5>
              <p className="text-sm">{item.text}</p>
            </div>
          ))}
          <img
            src={rec}
            alt="star"
            className="w-[100px] h-[100px] mx-auto absolute left-[20%] -bottom-8"
          />
        </div>
      </div>
      <img
        src={star}
        alt="star"
        className="w-[150px] h-[160px] mx-auto absolute right-0 -top-8"
      />
      <img src={gradient} alt="star" className=" absolute left-0 top-0" />
      <img
        src={coin}
        alt="star"
        className=" absolute left-[30%] -top-6 w-12 h-12"
      />
      <img
        src={coin}
        alt="star"
        className=" absolute left-[10%] -bottom-6 w-12 h-12"
      />
      <img
        src={blocks}
        alt="star"
        className="w-[100px] h-[100px] absolute right-16 -bottom-8"
      />
    </div>
  );
}

export default Features;
