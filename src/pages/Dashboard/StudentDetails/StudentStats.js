import Form from "../Student/Form";
import { IoMdCheckmark } from "react-icons/io";
import { Link } from "react-router-dom";
import candidate from "../../../images/candidate.png";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";


const subjects = [
  {
    id: 1,
    subject: "english",
    grade: 95,
    color: "#3890E1",
  },

  {
    id: 2,
    subject: "mathematics",
    grade: 95,
    color: "#943993",
  },

  {
    id: 3,
    subject: "biology",
    grade: 95,
    color: "#9AB3F5",
  },

  {
    id: 4,
    subject: "geography",
    grade: 95,
    color: "#E16D38",
  },

  {
    id: 5,
    subject: "physics",
    grade: 95,
    color: "#F4C534",
  },

  {
    id: 6,
    subject: "chemistry",
    grade: 95,
    color: "#97B550",
  },

  {
    id: 7,
    subject: "agricultural science",
    grade: 95,
    color: "#AB41FF",
  },

  {
    id: 8,
    subject: "economics",
    grade: 95,
    color: "#EB00FF",
  },

  {
    id: 9,
    subject: "yoruba",
    grade: 95,
    color: "#0088FE",
  },
];
const COLORS = subjects.map((item=>item.color));
const style = {
  height:300,

}
const Boxes = function () {
  return (
    <section>
      <div className="bg-white w-full lg:w-[63rem] border rounded-xl p-4 md:p-8 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
        <div
          className="col-span-1 relative w-full h-[100px] md:h-[200px] lg:h-[300px]"
          style={style}
        >
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={subjects}
                innerRadius={90}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="grade"
              >
                {subjects.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <span className="text-center absolute -translate-y-1/2 -translate-x-1/2 left-1/2 top-1/2">
            <span className="text-xs text-gray-500">Average</span>
            <br />
            <span className="text-3xl lg:text-5xl font-light text-[#943993]">
              92%
            </span>
          </span>
        </div>
        <div className=" col-span-1 grid grid-cols-2 md:grid-cols-3 gap-4 md-gap-8 lg:gap-16 ">
          {subjects.map((item, i) => (
            <div key={i} className="gap-4 md:gap-8 lg:gap-12 capitalize  text-dashboardgray flex justify-start">
              <div className="relative px-4 lg:px-6 flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2" style={{ backgroundColor:item.color }}></div>
                <div>
                  <div className="text-sm lg:text-base"> {item.subject} </div>
                  <div className="text-sm lg:text-base"> {item.grade} </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Boxes;
