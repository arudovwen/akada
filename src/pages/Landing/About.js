import * as React from "react";
import bulb from "../../images/bulb.png";
function About() {
  const categories = [
    {
      id: 1,
      title: "Sponsorship",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
    },
    {
      id: 1,
      img: "",
      title: "Manage sponorship",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
    },
    {
      id: 1,
      img: "",
      title: "Gamification",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
    },
    {
      id: 1,
      img: "",
      title: "Sponsorship",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
    },
  ];
  return (
    <div className=" py-24 relative">
      <div className=" text-center">
        <h2 className="text-5xl font-black mb-4">About Us</h2>
        <p className="mx-auto lg:w-[35%] px-8 text-lg font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida ipsum
          tempor nec auctor. Mauris vel mauris sed cursus eget id venenatis.
        </p>

        <div
          className="h-[400px]"
          style={{
            backgroundImage: `url(${bulb})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          <div className="grid grid-cols-4 gap-2 mt-8  mx-auto relative h-full transition duration-500">
            {categories.map((item) => (
              <div className="duration-300 group bg-black/30 h-full grid items-end py-10 text-left px-5">
                <div className="h-50 mt-auto">
                  <h5 className="text-xl font-bold text-white mb-2">{item.title}</h5>
                  <p className="text-sm hidden group-hover:block text-white transtion group-hover:slide-in-bottom duration-500" >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
