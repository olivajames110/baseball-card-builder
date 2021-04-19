import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Backdrop from '../Backdrop/Backdrop';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as MlbLogo } from '../../../icons/mlbLogo.svg';
import { ReactComponent as Times } from '../../../icons/times.svg';
import './Modal.css';
const ModalOverlay = (props) => {
	const content = (
		<div className="modal" style={props.style}>
			<div className="modal__header">
				<MlbLogo />
				<h1>Create Your Card</h1>
				<div onClick={props.onCancel} className="exit-btn-wrapper">
					<Times />
				</div>
			</div>
			<div className="modal__body">{props.children}</div>
		</div>
	);

	return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = (props) => {
	const { show, onCancel } = props;

	return (
		<React.Fragment>
			{show && <Backdrop onClick={onCancel} />}
			<CSSTransition in={show} timeout={200} classNames="fade-in" mountOnEnter unmountOnExit>
				<ModalOverlay {...props} />
			</CSSTransition>
		</React.Fragment>
	);
};

export default Modal;
