import Form from '../Student/Form';
import { IoMdCheckmark } from 'react-icons/io';
import { Link } from 'react-router-dom';
import candidate from '../../../images/candidate.png';

const subjects = [
  {
    id: 1,
    subject: 'english',
    grade: 95,
  },

  {
    id: 2,
    subject: 'mathematics',
    grade: 95,
  },

  {
    id: 3,
    subject: 'biology',
    grade: 95,
  },

  {
    id: 4,
    subject: 'geography',
    grade: 95,
  },

  {
    id: 5,
    subject: 'physics',
    grade: 95,
  },

  {
    id: 6,
    subject: 'chemistry',
    grade: 95,
  },

  {
    id: 7,
    subject: 'agricultural science',
    grade: 95,
  },

  {
    id: 8,
    subject: 'economics',
    grade: 95,
  },

  {
    id: 9,
    subject: 'yoruba',
    grade: 95,
  },
];

const Boxes = function () {
  return (
    <section>
   
      <div className='bg-white translate-x-2/4 w-[63rem] h-[38rem]  border rounded-xl pt-4 absolute top-[120px] right-1/2'>
        <div className='flex items-center pl-28 py-7 gap-x-36 '>
          <div className='capitalize rounded-2xl shadow-lg p-10'>
            <img src={candidate} alt='candidate' />
            <div className='flex gap-x-4 '>
              <label htmlFor=''>name:</label>
              <div>Odunade Taiwo</div>
            </div>
            <div className='flex gap-x-2 '>
              <label htmlFor=''>school:</label>
              <div>The Kings College</div>
            </div>
            <div className='flex gap-x-2 '>
              <label htmlFor=''>location:</label>
              <div>lagos, nigeria</div>
            </div>

            <div className='flex gap-x-2 '>
              <label htmlFor=''>platform:</label>
              <div>u-lesson</div>
            </div>
          </div>
          <div>
            <div className=' mb-3'>
              <h3 className='text-primary capitalize font-semibold text-lg'>
                candidate's details
              </h3>
              <p
                className='text-sm text-[#E16D38]
'
              >
                odunadetiawo@gmail.com
              </p>
            </div>

            <h4 className=' mb-3 text-primary capitalize font-semibold text-sm'>
              grade
            </h4>
            {subjects.map((item) => {
              return (
                <div className='flex justify-between w-[26rem] mb-3 capitalize  text-dashboardgray'>
                  <div> {item.subject} </div>
                  <div> {item.grade} </div>
                </div>
              );
            })}
            <div className='flex justify-between capitalize '>
              <label htmlFor='' className='text-dashboardgray'>
                master:
              </label>
              <a href='' className='border-b border-primary  text-primary'>
                view
              </a>
            </div>
            <button className='uppercase bg-text-color w-full text-white py-3 text-base lg:text-lg font-bold rounded-md mb-4 tracking-wider mt-5'>
              <Link to='/verify-account'>Sponsor</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boxes;
