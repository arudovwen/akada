import Form from "../Student/Form";
import { IoMdCheckmark } from "react-icons/io";
import { Link } from "react-router-dom";
import candidate from "../../../images/candidate.png";

const subjects = [
  {
    id: 1,
    subject: "english",
    grade: 95,
  },

  {
    id: 2,
    subject: "mathematics",
    grade: 95,
  },

  {
    id: 3,
    subject: "biology",
    grade: 95,
  },

  {
    id: 4,
    subject: "geography",
    grade: 95,
  },

  {
    id: 5,
    subject: "physics",
    grade: 95,
  },

  {
    id: 6,
    subject: "chemistry",
    grade: 95,
  },

  {
    id: 7,
    subject: "agricultural science",
    grade: 95,
  },

  {
    id: 8,
    subject: "economics",
    grade: 95,
  },

  {
    id: 9,
    subject: "yoruba",
    grade: 95,
  },
];

const Boxes = function () {
  return (
    <div className="grid grid-cols-3 gap-16 bg-white rounded-2xl mx-auto p-12">
      <div className="">
        <div className="capitalize rounded-3xl shadow-lg px-8 py-6 w-full translate-y-1/2 mt-[-35%]">
          <img src={candidate} alt="candidate" className="mx-auto" />
          <table>
            <tbody>
              <tr className=" bg-transparent">
                <td className="text-[#5B5B5B] py-[.1rem] px-2">name:</td>
                <td className="text-[#5B5B5B] py-[.1rem] px-2">Odunade Taiwo</td>
              </tr>
              <tr className="bg-transparent">
                <td className="text-[#5B5B5B] py-[.1rem] px-2">school:</td>
                <td className="text-[#5B5B5B] py-[.1rem] px-2">The Kings College</td>
              </tr>
              <tr className=" bg-transparent">
                <td className="text-[#5B5B5B] py-[.1rem] px-2">location:</td>
                <td className="text-[#5B5B5B] py-[.1rem] px-2">lagos, nigeria</td>
              </tr>

              <tr className="bg-transparent ">
                <td className="text-[#5B5B5B] py-[.1rem] px-2">platform:</td>
                <td className="text-[#5B5B5B] py-[.1rem] px-2">u-lesson</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="col-span-2">
        <div className=" mb-3 px-2">
          <h3 className="text-primary capitalize font-semibold text-xl">
            candidate's details
          </h3>
          <p
            className="text-sm text-[#E16D38]
"
          >
            odunadetiawo@gmail.com
          </p>
        </div>

        <h4 className=" mb-3 text-primary capitalize font-semibold text-sm px-2">
          grade
        </h4>
        <table className="w-full">
          <tbody>
            {subjects.map((item) => {
              return (
                <tr className="capitalize  text-dashboardgray bg-transparent">
                  <td className="text-[#5B5B5B] py-[.1rem] px-2"> {item.subject} </td>
                  <td className="text-[#5B5B5B] py-[.1rem] px-2"> {item.grade} </td>
                </tr>
              );
            })}
            <tr className=" bg-transparent capitalize ">
              <td className="text-dashboardgray py-[.1rem] px-2">master:</td>
              <td href="#" className=" py-[.1rem] px-2 text-primary">
                view
              </td>
            </tr>
          </tbody>
        </table>

        <button className="uppercase bg-text-color w-full text-white border-white py-4 text-base lg:text-lg font-bold rounded-md mb-4 tracking-wider mt-5">
          <Link to="/verify-account">Sponsor</Link>
        </button>
      </div>
    </div>
  );
};

export default Boxes;
