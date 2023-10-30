import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Styles.css';

const Navbar: React.FC = () => {
  return (
    <nav className='navbar'>
      <div>
        <Link className='single-navbar-item' to='/'>Pitwall F1</Link>
      </div>
      <div>
        <ul className='navbar-items'>
          <li><Link className='single-navbar-item' to='/constructors'>Constructors</Link></li>
          <li><Link className='single-navbar-item' to='/drivers'>Drivers</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
