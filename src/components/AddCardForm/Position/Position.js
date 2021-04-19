import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import Field from '../Field/Field';
import './Position.css';
const Position = (props) => {
	const [ position, setPosition ] = useState();
	const positionRef = useRef();
	const handlePositionChange = () => {
		setPosition(positionRef.current.value);
		props.handleUpdateData('position', positionRef.current.value);
	};

	const handleFieldChange = (position) => {
		positionRef.current.value = position;
	};

	const positionDropDown = (
		<select ref={positionRef} onChange={handlePositionChange} name="" id="position-dropdown">
			<option dsiabled value="">
				-Choose Position-
			</option>
			<option value="Pitcher">Pitcher</option>
			<option value="Catcher">Catcher</option>
			<option value="1st Base">1st Base</option>
			<option value="2nd Base">2nd Base</option>
			<option value="3rd Base">3rd Base</option>
			<option value="Short Stop">Short Stop</option>
			<option value="Left Field">Left Field</option>
			<option value="Center Field">Center Field</option>
			<option value="Right Field">Right Field</option>
		</select>
	);

	return (
		<div className="position-container">
			<div id="position" className="input-field-wrapper">
				<label>{props.label}</label>
				{positionDropDown}
			</div>
			<div className="field-wrapper">
				<Field
					position={position}
					handleFieldChange={handleFieldChange}
					handleUpdateData={props.handleUpdateData}
				/>
			</div>
		</div>
	);
};

export default Position;
