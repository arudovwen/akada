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
    <section>
      <div className="bg-white w-full lg:w-[63rem] border rounded-xl p-8 lg:p-24 grid grid-cols-3 gap-8 items-center">
        <div className="col-span-1"></div>
        <div className=" col-span-2 grid grid-cols-1 lg:grid-cols-3 gap-16 ">
          {subjects.map((item) => (
            <div className="gap-12 mb-3 capitalize  text-dashboardgray flex justify-start">
              <div className="relative px-6">
                <div className="w-2 h-2 rounded-full bg-green-500 absolute left-2 top-4"></div>
                <div> {item.subject} </div>
                <div> {item.grade} </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Boxes;
