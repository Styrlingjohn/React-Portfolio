import React from 'react';

export default function Nav({currentPage, handlePageChange}) {
  const linkStyle = { border: '1px black', padding: '5px' };

  return (
    <nav className="main-header-menu">
      <ul
        style={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
        }}
      >
        <li style={linkStyle} className = 'nav-tab'>
          <a 
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          
          >
            About
          </a>
        </li>
        <li style={linkStyle} className = 'nav-tab'>
          <a 
            href="#home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </a>
        </li>

{/* 
        <li style={linkStyle} className = 'nav-tab'>
          <a href="https://github.com/Styrlingjohn">Github</a>
        </li>
        <li style={linkStyle} className = 'nav-tab'>
          <a href="https://www.linkedin.com/in/styrlingmorris/">LinkedIn</a>
        </li>
        <li style={linkStyle} className = 'nav-tab'>
          <a href="">Resume</a>
        </li>
        <li style={linkStyle} className = 'nav-tab'>
          <a href="#">Contact</a>
        </li> */}
      </ul>
    </nav>
  );
}