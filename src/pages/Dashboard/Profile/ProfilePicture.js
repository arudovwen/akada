import admin from "../../../images/admin.png";
import icon5 from "../../../images/icon5.png";
import { CameraIcon } from "@heroicons/react/solid";
const ProfilePicture = function () {
  return (
    <div className="pb-6 pt-4 lg:pt-12 text-white mb-20 relative h-[8rem] md:h-[10rem]  rounded-xl profile-bg w-full">
      <div className="flex items-center gap-5 ml-8 md:ml-12 ">
        <div className="relative">
          <img
            src={admin}
            alt="admin"
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-auto md:h-auto"
          />
          <div className="bottom-0 right-0 absolute bg-primary h-6 w-6 sm:h-8 sm:w-8 ring-2 ring-white rounded-full flex items-center justify-center">
            {" "}
            <CameraIcon className="h-4 w-4 sm:w-5 sm:h-5 text-white" />
          </div>
        </div>
        <div>
          <p className="text-sm md:text-lg">Taiwo Odunade</p>
          <p className="font-light text-xs md:text-base">Admin Account</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicture;
