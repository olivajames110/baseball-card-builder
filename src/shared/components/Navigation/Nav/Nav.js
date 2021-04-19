import React from 'react';
import './Nav.css';

const Navigation = (props) => {
   return (
      <nav id={props.id || 'nav'} className={props.className || 'nav-container'}>
         {props.children}
      </nav>
   );
};

export default Navigation;
