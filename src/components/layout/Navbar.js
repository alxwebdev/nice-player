import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-container'>
        <div className='nav-menu'>
          <h1>Nice Audio Player</h1>
          <ul>
            <li>
              Music: <a href='https://www.bensound.com/'>Bensound.com</a>
            </li>
            <li>
              Images: <a href='https://unsplash.com/'>Unsplash.com</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
