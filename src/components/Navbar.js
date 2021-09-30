import React from 'react';
import { NavLink } from 'react-router-dom';
import { ImUser } from 'react-icons/im'

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];
  return (
    <nav className="flex-box">
      <h1>Bookstore CMS</h1>
      <ul className="flex-box">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} activeClassName="active-link" exact>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="prof-pic flex-box"><ImUser /></div>
    </nav>
  );
};

export default Navbar;
