import { RiChat3Line } from 'react-icons/ri';
const message = [
  {
    id: 1,
    title: 'invoice expiration',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam explicabo modi reprehenderit esse obcaecati blanditiis praesentium, doloribus nemo rem error? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi ea, ex minima voluptate provident animi vel inventore veniam sint.',
    time: '1H ago',
  },
  {
    id: 2,
    title: 'invoice expiration',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam explicabo modi reprehenderit esse obcaecati blanditiis praesentium, doloribus nemo rem error? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi ea, ex minima voluptate provident animi vel inventore veniam sint.',
    time: '3H ago',
  },

  {
    id: 3,
    title: 'latest update on the akada platform',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam explicabo modi reprehenderit esse obcaecati blanditiis praesentium, doloribus nemo rem error? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi ea, ex minima voluptate provident animi vel inventore veniam sint.',
    time: 'yesterday',
  },
];

const Messages = function () {
  return (
    <section className='w-[17rem]'>
      <div className='capitalize flex py-3 px-4 gap-x-4 items-center bg-white shadow-lg rounded-lg'>
        <div className='bg-primary px-8 rounded-lg py-1 text-white'>all</div>
        <div>recent</div>
        <div>opened</div>
      </div>

      <div>
        {message.map((item) => {
          return (
            <div
              key={item.id}
              className='shadow-lg mb-5 rounded-sm px-5 pt-5 pb-8 w-[35rem]'
            >
              <div className='flex justify-between mb-2'>
                <div className='text-primary font-bold '>{item.title}</div>

                {item.time}
              </div>
              <div>{item.content}</div>

              <div className=' text-[#E16D38] flex justify-end'>
                <RiChat3Line />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Messages;

//
