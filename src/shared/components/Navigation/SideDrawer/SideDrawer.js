import React from 'react';
import ReactDOM from 'react-dom';
import {CSSTransition} from 'react-transition-group';
import {ReactComponent as CrossIcon} from '../../../icons/times.svg';
import {ReactComponent as Logo} from '../../../icons/logo.svg';
import './SideDrawer.css';

const SideDrawer = (props) => {
   const content = (
      <CSSTransition
         in={props.show}
         timeout={200}
         classNames="alert"
         mountOnEnter
         unmountOnExit>
         <aside className="side-drawer" onClick={props.onClick}>
            <div id="cross-wrapper"/>
            <div className="mobile-header">
               <Logo/>
            </div>
            {props.children}
         </aside>
      </CSSTransition>
   );
   return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;
