import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Backdrop from '../../../shared/components/UIElements/Backdrop/Backdrop';
import { CSSTransition } from 'react-transition-group';
// import { ReactComponent as MlbLogo } from '../../../icons/mlbLogo.svg';
import { ReactComponent as Times } from '../../../shared/icons/times.svg';
import './CardPreview.css';
const CardPreviewOverlay = (props) => {
	const content = (
		<div className="card-preview-modal" style={props.style}>
			<div onClick={props.onCancel} className="exit-btn-wrapper">
				<Times />
			</div>
			<div className="modal__body">{props.children}</div>
		</div>
	);

	return ReactDOM.createPortal(content, document.getElementById('card-preview-hook'));
};

const CardPreview = (props) => {
	const { show, onCancel } = props;

	return (
		<React.Fragment>
			{show && <Backdrop onClick={onCancel} />}
			<CSSTransition in={show} timeout={1400} classNames="card-preview" mountOnEnter unmountOnExit>
				<CardPreviewOverlay {...props} />
			</CSSTransition>
		</React.Fragment>
	);
};

export default CardPreview;
