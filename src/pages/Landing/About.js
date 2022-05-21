import * as React from 'react';
import bulb from '../../images/bulb.png';
function About() {
  const categories = [
    {
      id: 1,
      title: "our vision",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
    },
    {
      id: 1,
      img: "",
      title: "our mission",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.  ",
    },
    {
      id: 1,
      img: "",
      title: "what we do",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
    },
    {
      id: 1,
      img: "",
      title: "our values",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
    },
  ];
  return (
    <div className=" py-24 relative">
      <div className=" text-center">
        <h2 className="text-3xl lg:text-5xl font-black mb-4">About Us</h2>
        <p className="mx-auto lg:w-[35%] px-8 text-base md:text-lg font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida ipsum
          tempor nec auctor. Mauris vel mauris sed cursus eget id venenatis.
        </p>

        <div
          className="h-[600px]"
          style={{
            backgroundImage: `url(${bulb})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-8  mx-auto relative h-full transition duration-500">
            {categories.map((item) => (
              <div key={item.title} className="duration-300 group bg-black/30 h-full grid items-end py-10 text-left px-5">
                <div className="h-50 mt-auto">
                  <h5 className="text-xl lg:text-3xl font-bold text-white mb-2 capitalize">
                    {item.title}
                  </h5>
                  <p className="text-sm lg:text-lg md:hidden group-hover:block text-white transtion slide-in-bottom duration-300 pr-6">
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
