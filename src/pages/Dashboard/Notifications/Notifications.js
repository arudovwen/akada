import Header from './Navigation/Header';
import SideBar from '../Navigation/SideBar';
import Messages from './Messages';
import RecentNotifications from './Navigation/RecentNotifications';
const Notifications = function () {
  return (
    <section>
      <Header />
      <div className='flex justify-between mb-6 px-4 lg:px-8'>
        <div className='flex gap-x-12 '>
          <SideBar />
          <Messages />
        </div>
        <RecentNotifications />
      </div>
    </section>
  );
};

export default Notifications;
