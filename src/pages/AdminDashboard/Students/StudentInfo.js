import { XIcon } from '@heroicons/react/outline';
import candidate from '../../../images/candidate.png';

const StudentInfo = function () {
  return (
    <section className='bg-white shadow-2xl rounded-2xl px-14 py-7 w-[43rem] mb-7 relative'>
      <div className='flex gap-x-5 items-center pt-20 pb-10 text-dashboardgray'>
        <div className='bg-primary pt-16 pb-7 w-[18rem] relative '>
          <h3 className='bg-white pl-2 mx-auto w-[14rem] capitalize mb-4 h-10 py-2'>
            odunaade taiwo
          </h3>
          <h2 className='bg-white  pl-2 mx-auto w-[14rem] h-10 py-2'>SS2</h2>
          <img
            src={candidate}
            alt={candidate}
            className='absolute -top-28 left-14'
          />
        </div>

        <div className='capitalize w-[18rem]'>
          <div className='flex mb-4   justify-between'>
            <h3>location</h3>
            <p>lagos</p>
          </div>
          <div className='flex   mb-4  justify-between'>
            <span>Platform</span>
            <p>Gradely</p>
          </div>
          <div className='flex  mb-4    justify-between'>
            <span>Total Sponsorship</span>
            <p>3</p>
          </div>
          <div className='flex  mb-4   justify-between'>
            <span>value</span>
            <p>500,000</p>
          </div>
          <div className='flex   justify-between'>
            <span>year</span>
            <p>2020, 2021, 2022</p>
          </div>
        </div>
      </div>
  
    </section>
  );
};
export default StudentInfo;
