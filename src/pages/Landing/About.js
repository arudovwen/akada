import * as React from 'react';
import bulb from '../../images/bulb.png';
function About() {
  const categories = [
    {
      id: 1,
      title: "our vision",
      text: "To give children across Africa, access to opportunities that will enable them achieve their dreams. ",
    },
    {
      id: 2,
      img: "",
      title: "our mission",
      text: "To provide verifiable and trusted access to exceptional children in primary and secondary levels for FSTE brands. ",
    },
    {
      id: 3,
      img: "",
      title: "what we do",
      text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
    },
    {
      id: 4,
      img: "",
      title: "our values",
      text1: "Integrity : We provide trusted verifiable and reliable data. We stand for transparency and integrity. ",
      text2: "People-oriented: Social impact and people are at the very heart of what we do.",
      text3: "Team-work: To deliver results that impact, partnerships and collaborative efforts are important ingredients. We imbibe this in our work interactions.",
    },
  ];
  return (
    <div className=" pt-24 relative">
      <div className=" text-center">
        <h2 className="text-3xl lg:text-5xl font-black mb-4">About Us</h2>
        <p className="mx-auto lg:w-[65%] px-8 text-base md:text-lg font-light">
          The key to ensuring change, and securing the future of every society
          is educating its children.
        </p>
        <p className="mx-auto lg:w-[65%] px-8 text-base md:text-lg font-light">
          With 10.5 million kids on the street without education in Africa, how
          do we change the narrative?{" "}
        </p>

        <p className="mx-auto lg:w-[65%] px-8 text-base md:text-lg font-light">
          Akadaplay is a one-stop solution to rewarding and incentivising
          academic excellence among primary and secondary school kids. We do
          this by highlighting the profile of exceptional children from leading
          educational learning platforms and providing this information to FSTE
          brands for sponsorships.{" "}
        </p>

        <div
          className="lg:h-[600px]"
          style={{
            backgroundImage: `url(${bulb})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="grid grid-cols-1 md-grid-cols-2 lg:grid-cols-4 lg:gap-2 mt-8  mx-auto relative h-full transition duration-500">
            {categories.map((item, index) => (
              <div
                key={index}
                className="duration-300 group bg-black/50 lg:bg-black/30 h-full grid items-end py-10 text-left px-5"
              >
                <div className="h-50 mt-auto">
                  <h5 className="text-xl font-bold text-white mb-2 capitalize">
                    {item.title}
                  </h5>
                  <p className="text-sm lg:text-lg md:hidden group-hover:block text-white transtion slide-in-bottom duration-300 pr-6">
                    {item.text1}
                  </p>
                {
                  item.text2 &&
                  (  <p  className="text-sm lg:text-lg md:hidden group-hover:block text-white transtion slide-in-bottom duration-300 pr-6">
                    {item.text2}
                  </p>)
                }
                  {
                  item.text3 &&
                  (  <p  className="text-sm lg:text-lg md:hidden group-hover:block text-white transtion slide-in-bottom duration-300 pr-6">
                    {item.text3}
                  </p>)
                }

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
