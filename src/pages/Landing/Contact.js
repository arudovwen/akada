import * as React from 'react';
function Contact() {
  return (
    <section className='bg-gray-100 '>
      <main className=' flex container gap-x-32 py-32 items-center'>
        <div className='w-1/3'>
          <h3 className='text-5xl text-black font-bold mb-4 capitalize'>
            contact us
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
            nisi maiores reiciendis, consectetur illum omnis molestias maxime
            magnam earum. Debitis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Inventore modi ipsam beatae ex corrupti expedita
            officia quod earum aspernatur odio.
          </p>
        </div>
        <div className='w-2/3'>
          <form
            action='
        '
          >
            <div className='flex space-x-16 mb-20'>
              <div className='w-full'>
                <label htmlFor='' className='capitalize'>
                  name
                </label>
                <input
                  type='text'
                  className='block border-b bg-gray-100 border-black w-full  h-10 text-xl font-medium '
                />
              </div>
              <div className='w-full'>
                <label htmlFor='' className='capitalize'>
                  email
                </label>
                <input
                  type='text'
                  className='block border-b bg-gray-100 border-black w-full  h-10 text-xl font-medium '
                />
              </div>
            </div>

            <div className='mb-20'>
              <label htmlFor='' className='capitalize'>
                message
              </label>
              <input
                type='text'
                className='block border-b bg-gray-100 border-black w-full h-10 text-xl font-medium '
              />
            </div>
            <button className='border-2 border-black text-center w-full py-5 uppercase font-bold text-xl'>
              send
            </button>
          </form>
        </div>
      </main>
    </section>
  );
}

export default Contact;
