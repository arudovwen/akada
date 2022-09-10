import candidate from "../../../images/candidate.png";
import { useCart } from "../../../hooks/useCart";

const Boxes = function ({ student }) {
  const { cartItems, addToCart } = useCart();
  function isInCart(id) {
    return cartItems.some(
      (item) => `${item.first_name} ${item.last_name}` === id
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-16 bg-white rounded-2xl mx-auto p-6 md:p-12 w-[85vw] sm:w-[auto] max-h-[90vh] sm:max-h-full overflow-y-auto">
      <div className="">
        <div className="capitalize rounded-3xl md:shadow-lg md:px-8 py-6 w-full mt-10">
          <img
            src={candidate}
            alt="candidate"
            className="md:mx-auto w-20 h-20 md:w-full md:h-full"
          />
          <table className="w-full">
            <tbody>
              <tr className=" bg-transparent">
                <td className=" bg-transparent text-[#5B5B5B] py-[.1rem] px-2">
                  name:
                </td>
                <td className=" bg-transparent text-[#5B5B5B] py-[.1rem] px-2 capitalize">
                  {student.first_name} {student.last_name}
                </td>
              </tr>
              <tr className="bg-transparent">
                <td className=" bg-transparent text-[#5B5B5B] py-[.1rem] px-2">
                  school:
                </td>
                <td className=" bg-transparent text-[#5B5B5B] capitalize py-[.1rem] px-2">
                  {student.school.name}
                </td>
              </tr>
              <tr className=" bg-transparent">
                <td className=" bg-transparent text-[#5B5B5B] py-[.1rem] px-2">
                  location:
                </td>
                <td className=" bg-transparent text-[#5B5B5B] py-[.1rem] px-2">
                  lagos, nigeria
                </td>
              </tr>

              <tr className="bg-transparent ">
                <td className=" bg-transparent text-[#5B5B5B] py-[.1rem] px-2">
                  platform:
                </td>
                <td className=" bg-transparent text-[#5B5B5B] py-[.1rem] px-2">
                  u-lesson
                </td>
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
            {student.email}
          </p>
        </div>

        <h4 className=" mb-3 text-primary capitalize font-semibold text-sm px-2">
          grade
        </h4>
        <table className="w-full">
          <tbody>
            {student.subjects.map((item, index) => {
              return (
                <tr
                  className="capitalize  text-dashboardgray bg-transparent"
                  key={index}
                >
                  <td className=" bg-transparent text-[#5B5B5B] py-[.1rem] px-2">
                    {" "}
                    {item.subject}{" "}
                  </td>
                  <td className=" bg-transparent text-[#5B5B5B] py-[.1rem] px-2">
                    {" "}
                    {item.score}{" "}
                  </td>
                </tr>
              );
            })}
            {/* <tr className=" bg-transparent capitalize ">
              <td className=" bg-transparent text-dashboardgray py-[.1rem] px-2">
                master:
              </td>
              <td
                href="#"
                className="bg-transparent py-[.1rem] px-2 text-primary"
              >
                view
              </td>
            </tr> */}
          </tbody>
        </table>
        {isInCart(`${student.first_name} ${student.last_name}`) ? (
          <button className="w-full bg-primary border primary text-white px-2 py-2 text-xs rounded opacity-60">
            In cart
          </button>
        ) : (
          <button
            onClick={() => addToCart(student)}
            className="uppercase bg-text-color w-full text-white border-white py-4 text-base font-medium rounded-md mb-4 tracking-wider mt-5"
          >
            Sponsor
          </button>
        )}
      </div>
    </div>
  );
};

export default Boxes;
