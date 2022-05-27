import ProfilePicture from './ProfilePicture';
import { Link } from 'react-router-dom';
const UpdateProfile = function () {
  return (
    <section className="w-full ">
      <ProfilePicture />
      <div className="flex justify-between  py-14 px-8 lg:px-12 profile-card">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[15rem]">
          <div className="mb-6">
            <p className="text-[#C4C4C4] capitalize  mb-3 text-xs lg:text-sm">name</p>
            <span className="block text-sm lg:text-lg text-[#5B5B5B] font-medium capitalize ">
              Andrew John
            </span>
          </div>

          <div className="mb-6">
            <p className="text-[#C4C4C4] capitalize  mb-3 text-xs lg:text-sm">gender</p>
            <span className="block text-sm lg:text-lg text-[#5B5B5B] font-medium capitalize ">
              male
            </span>
          </div>

          <div className="mb-6">
            <p className="text-[#C4C4C4] capitalize  mb-3 text-xs lg:text-sm">email</p>
            <span className="block text-sm lg:text-lg ">andrewjohn@gmail.com</span>
          </div>

          <div className="mb-6">
            <p className="text-[#C4C4C4] capitalize  mb-3 text-xs lg:text-sm">location</p>
            <span className="block text-sm lg:text-lg text-[#5B5B5B] font-medium capitalize ">
              lagos
            </span>
          </div>
          <div className="mb-6">
            <p className="text-[#C4C4C4] capitalize  mb-3 text-xs lg:text-sm">phone</p>
            <span className="block text-sm lg:text-lg text-[#5B5B5B] font-medium capitalize ">
              08033957829
            </span>
          </div>

          <div className="mb-6">
            <p className="text-[#C4C4C4] capitalize  mb-3  text-xs lg:text-sm">role</p>
            <span className="block text-sm lg:text-lg text-[#5B5B5B] font-medium capitalize ">
              admin
            </span>
          </div>
        </div>

        <div>
          <Link to="/profile/edit">
            {" "}
            <button className="bg-primary rounded-lg md:uppercase text-center  py-3 px-3 text-xs md:text-sm text-white capitalize">
              edit profile
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default UpdateProfile;
