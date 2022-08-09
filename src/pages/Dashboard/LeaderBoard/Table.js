
import * as React from "react";
import {
  XIcon,
} from "@heroicons/react/outline";

import CustomModal from "../../../components/Modal";
import Pagination from "../../../components/Pagination";
import candidate from "../../../images/candidate.png";
import StudentDetail from "../../Dashboard/StudentDetails/Details";
import {
  getSponsoredStudents,
  getUnsponsoredStudents,
} from "../../../services/sponsorservices";
import { useAuth } from "../../../hooks/useAuth";

const Table = function ({ toggleDetailsModal }) {
  const { user } = useAuth();
  let [isOpen, setIsOpen] = React.useState(false);
  const [students, setStudents] = React.useState(null);
  let [pageNumber, setPageNumber] = React.useState(1);
  const [student, setStudent] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [active, setActive] = React.useState(1);
  const [query, setQuery] = React.useState("");
  const [meta, setMeta] = React.useState({})
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + user.token,
    },
  };

  React.useEffect(() => {
    getSponsored();
  }, []);

  function getSponsored() {
    setLoading(true);
    getSponsoredStudents({ pageNumber, query }, config)
      .then((response) => {
        setStudents(response.data.data);
        setMeta(response.data.meta)
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }
  function getUnSponsored() {
    setLoading(true);
    getUnsponsoredStudents({ pageNumber, query }, config)
      .then((response) => {
      setStudents(response.data.data);
      setMeta(response.data.meta);
      setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function next() {
    setPageNumber(pageNumber +  1);
  }

  function prev() {
    setPageNumber(pageNumber - 1);
  }

  React.useEffect(() => {
    if (active === 1) {
      getSponsored();
    } else {
      getUnSponsored();
    }
  }, [pageNumber, active]);
  return (
    <div className=" container pb-20 mx-auto">
      <div className="flex flex-col lg:flex-row gap-5 items-center justify-between mb-12">
        <div className="w-full flex gap-x-6 justify-between lg:justify-start items-center">
          {" "}
          <h1 className="font-semibold text-lg">Leader board</h1>
          <select
            onChange={(e) => {
              setActive(e.target.value);
            }}
            className="text-primary bg-transparent border-0 outline-0 text-sm"
          >
            <option value="1">Sponsored</option>
            <option value="2">Unsponsored</option>
          </select>
        </div>
        <div className="flex gap-x-8 items-center justify-end w-full">
          {" "}
          <div className="text-primary flex items-center gap-x-1 text-sm">
            <span>By</span>
            <select
              onChange={(e) => setActive(e.target.value)}
              className="text-primary bg-transparent  border-0 outline-0 text-sm"
            >
              <option value="1">Subjects</option>
              <option value="2">Date</option>
              <option value="2">Email</option>
              <option value="2">Name</option>
              <option value="2">Gender</option>
            </select>
          </div>
          <select
            onChange={(e) => setActive(e.target.value)}
            className="text-gray-600 text-sm bg-transparent min-w-[250px border border-gray-200 rounded-lg py-1 px-3 h-10 focus:outline-primary"
          >
            <option value="1">Agriculture</option>
          </select>
        </div>
      </div>
      {!loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-4">
          {students &&
            students.map((n, i) => (
              <div className="bg-white rounded-lg shadow-lg p-6" key={i}>
                <div className="mb-4 mx-auto w-28 h-28">
                  <img
                    src={candidate}
                    className="w-full h-full rounded-full"
                    alt="img"
                  />
                </div>
                <table className="w-full">
                  <tbody>
                    <tr>
                      <td className="py-0 px-0 bg-white">Name :</td>
                      <td className="py-0 px-0 bg-white pl-2 font-medium capitalize text-left">
                        {n.first_name} {n.last_name}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-0 px-0 bg-white">School :</td>
                      <td className="py-0 px-0 bg-white pl-2 font-medium  text-left capitalize">
                        {n.school.name}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-0 px-0 bg-white">Cummulative :</td>

                      <td className="py-0 px-0 bg-white text-primary pl-2 font-medium  text-left">
                        95%
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex gap-3 flex-col lg:flex-row items-center mt-4">
                  <button className="w-full bg-primary border primary text-white px-2 py-2 text-xs rounded">
                    Sponsor
                  </button>
                  <button
                    onClick={() => {
                      setStudent(n);
                      toggleModal();
                    }}
                    className="w-full bg-transparent text-primary border border-primary text-white px-2 py-2 text-xs rounded"
                  >
                    View details
                  </button>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="p-10 my-40 text-center">
          {" "}
          <i className="fa fa-spinner fa-spin text-6xl" aria-hidden="true"></i>
        </div>
      )}
      <Pagination
        meta={meta}
        next={next}
        prev={prev}

      />
      <CustomModal isOpen={isOpen} closeModal={() => toggleModal()}>
        <div className="relative">
          <span
            className="absolute top-4 right-4  z-40 cursor-pointer"
            onClick={() => toggleModal()}
          >
            <XIcon className="w-6 h-6 z-40" />
          </span>
          <StudentDetail student={student} />
        </div>
      </CustomModal>
    </div>
  );
};

export default Table;
