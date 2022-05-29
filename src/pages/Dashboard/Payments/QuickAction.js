import sponsor from '../../../images/sponsor2.png';
import action from '../../../images/computer.png';
import upgrade from '../../../images/upgrade.png';

const actions = [
  {
    id: 1,
    title: 'sponsorship',
    icon: action,
  },

  {
    id: 2,
    title: 'annual subscription',
    icon: sponsor,
  },

  {
    id: 3,
    title: 'upgrade subscription',

    icon: upgrade,
  },
];

const QuickAction = function () {
  return (
    <section>
      {" "}
      <div className="shadow-mb rounded-2xl py-10 px-6">
        <h3 className="font-semibold mb-3 text-primary">Quick actions</h3>
        {actions.map((item) => {
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
              </div>
            </div>
          );
        })}
      </div>{" "}
    </section>
  );
};

export default QuickAction;
