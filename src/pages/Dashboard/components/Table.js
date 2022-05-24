import customer1 from "../../../images/customer1.png";

import customer2 from "../../../images/customer2.png";
import { DotsVerticalIcon } from "@heroicons/react/outline";
const Table = function () {
  return (
    <div className=" container">
      <div className="flex capitalize gap-x-5 items-center">
        <div className="font-bold whitespace-nowrap">leader board</div>
        {/* <div className='text-text-color font-bold'>By subject</div> */}

        <div>
          {" "}
          <select className=" text-text-color font-semibold">
            <option>By Subject</option>
            <option value="Date">Date</option>
            <option value="Email">Email</option>
            <option value="Sector">Sector</option>
            <option value="Gender"> Gender</option>
          </select>
        </div>
        <div>
          {" "}
          <select className=" text-gray-400 border px-3 w-40 py-2 rounded-lg border-gray-200">
            <option>Agriculture</option>
            <option value="Date">Date</option>
            <option value="Email">Email</option>
            <option value="Sector">Sector</option>
            <option value="Gender"> Gender</option>
          </select>
        </div>
      </div>

      <div className="overflow-x">
        <table className="capitalize table-auto text-dashboardgray text-sm w-full">
          <thead>
            <tr className="text-left">
              <th>Name</th>
              <th>form</th>
              <th>Country</th>
              <th>gender</th>
              <th>subscription</th>
              <th>school</th>
              <th>grade</th>
              <th>section</th>

              <th>subjects</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">

              <td className="flex items-center"> <img src={customer1} className="w-8 h-8 rounded-lg mr-2" alt="cusotmer" />{" "} odunated taiwo</td>
              <td>u-lesson</td>
              <td>Germany</td>
              <td>male</td>
              <td>monthly</td>
              <td>corona school</td>
              <td>A+</td>
              <td>private</td>
              <td className="text-sm  ">view all</td>
              <td>
                <DotsVerticalIcon className="w-6 h-6" />
              </td>
            </tr>

            <tr className="">
              <td className="flex items-center"> <img src={customer1} className="w-8 h-8 rounded-lg mr-2" alt="cusotmer" />{" "} odunated taiwo</td>
              <td>u-lesson</td>
              <td>Germany</td>
              <td>male</td>
              <td>monthly</td>
              <td>corona school</td>
              <td>A+</td>
              <td>private</td>
              <td className="text-sm  ">view all</td>
              <td>
                <DotsVerticalIcon className="w-6 h-6" />
              </td>
            </tr>

            <tr className="">
              <td className="flex items-center"> <img src={customer1} className="w-8 h-8 rounded-lg mr-2" alt="cusotmer" />{" "} odunated taiwo</td>
              <td>u-lesson</td>
              <td>Germany</td>
              <td>male</td>
              <td>monthly</td>
              <td>corona school</td>
              <td>A+</td>
              <td>private</td>
              <td className="text-sm  ">view all</td>
              <td>
                <DotsVerticalIcon className="w-6 h-6" />
              </td>
            </tr>

            <tr className="">
              <td className="flex items-center"> <img src={customer1} className="w-8 h-8 rounded-lg mr-2" alt="cusotmer" />{" "} odunated taiwo</td>
              <td>u-lesson</td>
              <td>Germany</td>
              <td>male</td>
              <td>monthly</td>
              <td>corona school</td>
              <td>A+</td>
              <td>private</td>
              <td className="text-sm  ">view all</td>
              <td>
                <DotsVerticalIcon className="w-6 h-6" />
              </td>
            </tr>

            <tr className="">
              <td className="flex items-center"> <img src={customer1} className="w-8 h-8 rounded-lg mr-2" alt="cusotmer" />{" "} odunated taiwo</td>
              <td>u-lesson</td>
              <td>Germany</td>
              <td>male</td>
              <td>monthly</td>
              <td>corona school</td>
              <td>A+</td>
              <td>private</td>
              <td className="text-sm  ">view all</td>
              <td>
                <DotsVerticalIcon className="w-6 h-6" />
              </td>
            </tr>

            <tr className="">
              <td className="flex items-center"> <img src={customer1} className="w-8 h-8 rounded-lg mr-2" alt="cusotmer" />{" "} odunated taiwo</td>
              <td>u-lesson</td>
              <td>Germany</td>
              <td>male</td>
              <td>monthly</td>
              <td>corona school</td>
              <td>A+</td>
              <td>private</td>
              <td className="text-sm  ">view all</td>
              <td>
                <DotsVerticalIcon className="w-6 h-6" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
