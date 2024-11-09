import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "/assets/logo.svg"
const Navbar = () => {

const navitems =<>
<li><Link to={'/'}>Home</Link></li>
<li><Link to={'/about'}>About</Link></li>
<li><Link to={'/Services'}>Services</Link></li>
<li><Link to={'/blog'}>Blog</Link></li>
<li><Link to={'/contact'}>Contact</Link></li>

</>

    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
{navitems}
            </ul>
          </div>
         <Link to={'/'} className='text-lg lg:text-xl'>
         <img className=' w-16 h-12' src={logo} alt="" />
         </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
{navitems}
          </ul>
        </div>
        <div className="navbar-end">
          <button className='btn btn-outline btn-secondary'>Appoinment</button>
        </div>
      </div>
    );
};

export default Navbar;