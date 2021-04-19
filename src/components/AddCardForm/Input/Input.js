import React, { useEffect, useState, useRef } from 'react';
import './Input.css';
const Input = (props) => {
	const inputRef = useRef();
	return (
		<div className="input-field-wrapper">
			<label>{props.label}</label>
			<input
				onChange={() => props.onChange(props.inputName, inputRef.current.value)}
				ref={inputRef}
				id={props.id}
				type="text"
				placeholder={props.placeholder}
				value={props.playerImg}
			/>
		</div>
	);
};

export default Input;
