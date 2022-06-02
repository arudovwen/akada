import sponsor from '../../../images/sponsor2.png';
import action from '../../../images/computer.png';
import upgrade from '../../../images/upgrade.png';

const payments = [
  {
    id: 1,
    title: 'sponsorship',
    date: '22 september 2020',
    icon: sponsor,
  },

  {
    id: 2,
    title: 'sponsorship',
    date: '18 september 2020',
    icon: sponsor,
  },

  {
    id: 3,
    title: 'annual subscription',
    date: '18 september 2020',
    icon: sponsor,
  },
];

const RecentPayments = function () {
  return (
    <section>
      <div className="shadow-mb rounded-2xl py-10 px-6 h-full mb-5 bg-white">
        <h3 className="font-semibold mb-3 text-primary">Recent payments</h3>
        {payments.map((item) => {
          return (
            <div
              key={item.id}
              className="flex items-center gap-x-2  capitalize mb-6"
            >
              <div className="w-10 h-10 rounded-full bg-[#F6F8FD] flex items-center justify-center mr-5">
                <img src={item.icon} alt="icon" className="w-5 h-5" />
              </div>
              <div className=" capitalize">
                <div className="font-semibold text-dashboardgray">
                  {item.title}
                </div>

                <div className="text-[#A3AED0] text-sm">{item.date}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RecentPayments;
