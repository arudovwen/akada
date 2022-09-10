import customer1 from '../../../images/customer1.png';
import { VscEye } from "react-icons/vsc";

const Table = function () {
  return (
    <section className="w-full">
      <div className='pb-10 lg:pb-20'>
        <div className=''>
          <div className='flex justify-between'>
            <div className='font-semibold mb-4'>Sponsored list</div>
            <div className='text-[#97B550] underline capitalize'>view all</div>
          </div>
<div className="overflow-x-auto ">
          <table className='capitalize table-auto text-dashboardgray text-sm w-full'>
            <thead>
              <tr className='text-left'>
                <th>Name</th>
                <th>Platform</th>
                <th>Country</th>
                <th>Status</th>

                <th>school</th>
                <th>grade</th>

                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(6)].map((e, i) => (
                <tr className='' key={i}>
                  <td className='flex items-center'>
                    {' '}
                    <img
                      src={customer1}
                      className='w-8 h-8 rounded-lg mr-2'
                      alt='cusotmer'
                    />{' '}
                    odunated taiwo
                  </td>
                  <td>u-lesson</td>
                  <td>Turkey</td>
                  <td className='text-[#97B550]'>Sponsored</td>

                  <td>corona school</td>
                  <td>A+</td>

                  <td>
                    <VscEye  className="text-lg"/>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          {/* PAGINATION STARTS HERE    */}
        </div>
        {/* <CustomModal isOpen={isOpen} closeModal={() => toggleModal()}>
          <div className='relative'>
            <span
              className='absolute top-4 right-4'
              onClick={() => toggleModal()}
            >
              <XIcon className='w-6 h-6' />
            </span>
            <StudentDetail />
          </div>
        </CustomModal> */}
      </div>
    </section>
  );
};

export default Table;
