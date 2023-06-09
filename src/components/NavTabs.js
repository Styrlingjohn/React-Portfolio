import React from 'react';

function Nav({ currentPage, handlePageChange }) {
  const linkStyle = { border: '1px black', padding: '5px' };


  return (
    <header className='header' >
      <nav className="main-header-menu">
        <ul
          style={{
            display: 'flex',
            fontFamily: 'Cantarell',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            textDecorationStyle: 'none',
          }}
          className="list-unstyled"
        >
          <li style={linkStyle} className='nav-tab'>
            <a
              href="#about"
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}

            >
              About
            </a>
          </li>
          <li style={linkStyle} className='nav-tab'>
            <a
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </a>
          </li>

          <li style={linkStyle} className='nav-tab'>
            <a
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;