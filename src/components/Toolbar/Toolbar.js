import React, { useState } from 'react';
import Modal from '../../shared/components/UIElements/Modal/Modal';
import AddCardForm from '../AddCardForm/AddCardForm';
import { ReactComponent as MlbLogo } from '../../shared/icons/mlbLogo.svg';
import { ReactComponent as Times } from '../../shared/icons/times.svg';
import './Toolbar.css';
const Toolbar = (props) => {
	const [ modalIsActive, setModalIsActive ] = useState(false);
	return (
		<React.Fragment>
			<Modal show={modalIsActive} onCancel={() => setModalIsActive(false)}>
				<AddCardForm setModalIsActive={setModalIsActive} addCardHandler={props.addCardHandler} />
			</Modal>
			<div className="toolbar-container">
				<div className="logo-wrapper">
					<MlbLogo />
				</div>
				<h1>Baseball Card Builder</h1>
				<div className="add-card-button-wrapper">
					<button onClick={() => setModalIsActive(true)}>
						<span>ADD NEW CARD</span> <Times />
					</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Toolbar;
