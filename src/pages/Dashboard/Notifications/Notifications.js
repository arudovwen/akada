
import Messages from "./Messages";
import RecentNotifications from "./RecentNotifications";
const Notifications = function () {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-2">
      <div className="col-span-2">

        <Messages />
      </div>

      <div className="col-span-1 hidden lg:inline">
        <RecentNotifications />
      </div>
    </section>
  );
};

export default Notifications;
