import * as React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <main>
        <div></div>
        {/* <nav className='flex'>
          <img src={akadaLogo} alt='akada logo' />

          <div>
            <div className='text-6xl'>log in</div>
            <div>get started</div>
          </div>
        </nav> */}
      </main>
      <nav>
        <Link to='/about'>About</Link>
      </nav>
    </>
  );
}

export default Home;
