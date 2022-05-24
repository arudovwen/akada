import notificationImage from '../../../../images/notification.png';

const recent = [
  {
    id: 1,
    title: 'invoice expiration',
    content: 'hello kindly note that the invoice generated for...',
    time: '30min ago',
  },

  {
    id: 2,
    title: 'invoice expiration',
    content: 'hello kindly note that the invoice generated for...',
    time: '30min ago',
  },

  {
    id: 3,
    title: 'invoice expiration',
    content: 'hello kindly note that the invoice generated for...',
    time: '30min ago',
  },

  {
    id: 4,
    title: 'invoice expiration',
    content: 'hello kindly note that the invoice generated for...',
    time: '30min ago',
  },

  {
    id: 5,
    title: 'invoice expiration',
    content: 'hello kindly note that the invoice generated for...',
    time: '30min ago',
  },

  {
    id: 6,
    title: 'invoice expiration',
    content: 'hello kindly note that the invoice generated for...',
    time: '30min ago',
  },

  {
    id: 7,
    title: 'invoice expiration',
    content: 'hello kindly note that the invoice generated for...',
    time: '30min ago',
  },

  {
    id: 8,
    title: 'invoice expiration',
    content: 'hello kindly note that the invoice generated for...',
    time: '30min ago',
  },
];

const RecentNotifications = function () {
  return (
    <section className=' rounded-lg py-10 px-4 border border-gray-200 w-[25rem] '>
      <h3 className='capitalize text-primary font-semibold mb-7 text-lg'>
        recent notifications
      </h3>
      <div>
        {recent.map((item) => {
          return (
            <div key={item.id} className='mb-6'>
              <div className='flex mb-2'>
                <img
                  src={notificationImage}
                  alt='noti icon'
                  className='mr-3 '
                />
                <div className='mr-28 capitalize font-semibold'>
                  {item.title}
                </div>
                <div>{item.time}</div>
              </div>
              <div className='pr-28 text-[#5B5B5B]'>{item.content}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default RecentNotifications;
