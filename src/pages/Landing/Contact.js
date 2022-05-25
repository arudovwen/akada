import * as React from "react";
function Contact() {
  return (
    <section className="bg-gray-100 py-14 lg:py-0">
      <main className="grid grid-cols-1 justify-center   md:flex container md:gap-x-32 md:py-32 items-start text-left mx-auto">
        <div className="w-full lg:w-1/3">
          <h3 className="text-3xl lg:text-5xl text-black text-left font-bold mb-4 capitalize ">
            contact us
          </h3>
          <p className="text-sm md:text-base mb-6 lg:mb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
            nisi maiores reiciendis, consectetur illum omnis molestias maxime
            magnam earum. Debitis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Inventore modi ipsam beatae ex corrupti expedita
            officia quod earum aspernatur odio.
          </p>
        </div>
        <div className="w-full lg:w-2/3">
          <form action=" "
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
              <div className="">
                <label htmlFor="" className="capitalize">
                  name
                </label>
                <input
                  type="text"
                  className="block border-b bg-gray-100 border-black w-full  h-10 text-xl font-medium "
                />
              </div>
              <div className="">
                <label htmlFor="" className="capitalize">
                  email
                </label>
                <input
                  type="text"
                  className="block border-b bg-gray-100 border-black w-full  h-10 text-xl font-medium "
                />
              </div>
            </div>

            <div className="mb-20">
              <label htmlFor="" className="capitalize">
                message
              </label>
              <input
                type="text"
                className="block border-b bg-gray-100 border-black w-full h-10 text-xl font-medium "
              />
            </div>
            <button className="border-2 border-black text-center w-full py-4 lg:py-5 uppercase font-bold text-lg lg:text-xl">
              send
            </button>
          </form>
        </div>
      </main>
    </section>
  );
}

export default Contact;
