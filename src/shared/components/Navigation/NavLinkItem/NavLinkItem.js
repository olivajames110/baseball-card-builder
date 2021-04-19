import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavLinkItem.css';

const NavLinkItem = (props) => {
   const {activeClassName, to, text} = props;
   return (
      <NavLink activeClassName={!props.children && 'nav-link__active'} to={to}>
         {props.children
            ? props.children
            : <span>{text}</span>}
      </NavLink>
   );
};

export default NavLinkItem;
