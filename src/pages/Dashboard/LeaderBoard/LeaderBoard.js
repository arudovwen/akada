import Table from './Table';
import Button from './Button';
import Modal from "../../../components/Modal";
import { useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import StudentDetails from "../StudentDetails/StudentStats";

const LeaderBoard = function () {
  let [isOpen, setisOpen] = useState(false);

  function toggleModal() {
    setisOpen(!isOpen);
  }

  return (
    <>
      <section className="mb-10">
        <Table toggleDetailsModal={toggleModal} />
        {/* View user stats */}
        <Modal isOpen={isOpen} closeModal={() => toggleModal()}>
          <div className="">
            <span
              className="absolute top-4 right-4"
              onClick={() => toggleModal()}
            >
              <XIcon className="w-6 h-6 text-white" />
            </span>
            <StudentDetails />
          </div>
        </Modal>
      </section>
    </>
  );
};

export default LeaderBoard;
