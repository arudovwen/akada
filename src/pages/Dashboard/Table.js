const Table = function () {
  return (
    <section className='absolute left-[20.6rem] top-[23rem]'>
      <div className='flex capitalize gap-x-5'>
        <div className='font-bold'>leader board</div>
        {/* <div className='text-text-color font-bold'>By subject</div> */}

        <div>
          {' '}
          <select className=' text-text-color font-bold'>
            <option>By Subject</option>
            <option value='Date'>Date</option>
            <option value='Email'>Email</option>
            <option value='Sector'>Sector</option>
            <option value='Gender'> Gender</option>
          </select>
        </div>
        <div>
          {' '}
          <select className=' text-gray-400 border px-3 w-40 py-0.5'>
            <option>Agriculture</option>
            <option value='Date'>Date</option>
            <option value='Email'>Email</option>
            <option value='Sector'>Sector</option>
            <option value='Gender'> Gender</option>
          </select>
        </div>
      </div>

      <table className='w-[65rem] capitalize h-[20rem] table-auto border-separate'>
        <tr className='text-left'>
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

        <tr className='bg-gray-100'>
          <td className=''>odunated taiwo</td>
          <td>u-lesson</td>
          <td>Germany</td>
          <td>male</td>
          <td>monthly</td>
          <td>corona school</td>
          <td>A+</td>
          <td>private</td>
          <td>view all</td>
          <td>action</td>
        </tr>

        <tr className='bg-gray-100'>
          <td>odunated taiwo</td>
          <td>u-lesson</td>
          <td>Germany</td>
          <td>male</td>
          <td>monthly</td>
          <td>corona school</td>
          <td>A+</td>
          <td>private</td>
          <td>view all</td>
          <td>action</td>
        </tr>

        <tr className='bg-gray-100'>
          <td>odunated taiwo</td>
          <td>u-lesson</td>
          <td>Germany</td>
          <td>male</td>
          <td>monthly</td>
          <td>corona school</td>
          <td>A+</td>
          <td>private</td>
          <td>view all</td>
          <td>action</td>
        </tr>

        <tr className='bg-gray-100'>
          <td>odunated taiwo</td>
          <td>u-lesson</td>
          <td>Germany</td>
          <td>male</td>
          <td>monthly</td>
          <td>corona school</td>
          <td>A+</td>
          <td>private</td>
          <td>view all</td>
          <td>action</td>
        </tr>

        <tr className='bg-gray-100'>
          <td>odunated taiwo</td>
          <td>u-lesson</td>
          <td>Germany</td>
          <td>male</td>
          <td>monthly</td>
          <td>corona school</td>
          <td>A+</td>
          <td>private</td>
          <td>view all</td>
          <td>action</td>
        </tr>

        <tr className='bg-gray-100'>
          <td>odunated taiwo</td>
          <td>u-lesson</td>
          <td>Germany</td>
          <td>male</td>
          <td>monthly</td>
          <td>corona school</td>
          <td>A+</td>
          <td>private</td>
          <td>view all</td>
          <td>action</td>
        </tr>
      </table>
    </section>
  );
};

export default Table;
