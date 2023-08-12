import React from 'react';
import './style.css'; 

function Nav({ currentPage, handlePageChange }) {
  return (
    <div className='navcontainer sidenav'>

         {/* <div className='resumebtn'>
       <button>
        {/* <img src={download} /> */}
        {/*Download Resume</button>
      </div> */}
      
      <div>
    <ul className="nav">
      <li className="nav-item hover-2">
        <a href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a>
      </li>
      <li className="nav-item hover-2">
        <a href="#projects" onClick={() => handlePageChange('Projects')} className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'} >Projects</a>
      </li>
      <li className="nav-item hover-2">
        <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
      </li>
    </ul>
    </div>
    </div>
  );
}

export default Nav;
