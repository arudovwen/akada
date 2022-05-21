import * as React from "react";
import star from "../../images/star.png";
import blocks from "../../images/blocks.svg";
import Sponsorship from "../../images/sponsor.png";
import Game from "../../images/gamecontroller.png";
import gradient from "../../images/gradient.png";
import rec from "../../images/rec.svg";
import coin from "../../images/coin.png";
const categories = [
  {
    id: 1,
    img: Sponsorship,
    title: "Sponsorship",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
  },
  {
    id: 1,
    img: Sponsorship,
    title: "Manage Sponsorship",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
  },
  {
    id: 1,
    img: Game,
    title: "Gamification",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
  },
  {
    id: 1,
    img: Sponsorship,
    title: "Sponsorship",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
  },
];
function Features() {
  return (
    <div className="bg-[#f8f8f8] py-24 relative">
      <div className="container text-center">
        <h5 className="text-lg md:text-xl text-gray-600 uppercase mb-3">Features</h5>
        <h2 className=" text-3xl lg:text-5xl font-black mb-12">
          Stand -out Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 lg:w-[80%] mx-auto relative">
          {categories.map((item) => (
            <div key={item.title} className=" z-20 bg-white md:bg-transparent md:hover:shadow-lg md:hover:bg-white px-6 py-12 rounded-3xl transition ease-in-out delay-300 duration-300">
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
            className="w-[100px] h-[100px] mx-auto absolute left-[20%] -bottom-8 hidden md:block"
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
