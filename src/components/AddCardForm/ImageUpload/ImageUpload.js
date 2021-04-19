import React, { useEffect, useState, useRef } from 'react';
import Input from '../Input/Input';
import { ReactComponent as Upload } from '../upload.svg';
import './ImageUpload.css';
const ImageUpload = (props) => {
	const [ file, setFile ] = useState();
	const [ previewUrl, setPreviewUrl ] = useState('preview');
	const [ isValid, setIsValid ] = useState(false);

	const filePickerRef = useRef();

	const pickedHandler = (e) => {
		//ensures we actually have files
		let pickedFile;
		let fileIsValid;
		if (e.target.files || e.target.files.length !== 0) {
			pickedFile = e.target.files[0];
			setFile(pickedFile);
			setIsValid(true);
			fileIsValid = true;
		} else {
			setIsValid(false);
			fileIsValid = false;
		}
	};

	useEffect(
		() => {
			if (!file) {
				return;
			}
			const fileReader = new FileReader();
			fileReader.onload = () => {
				setPreviewUrl(fileReader.result);
				props.handleUpdateData('playerImg', fileReader.result);
			};
			fileReader.readAsDataURL(file);
		},
		[ file ]
	);

	useEffect(
		() => {
			setPreviewUrl(props.value);
		},
		[ props ]
	);

	return (
		<div className="image-upload-wrapper">
			<Input
				label={'Enter Image URL'}
				value={previewUrl}
				placeholder="Image url"
				id="image-url"
				inputName="playerImg"
				onChange={props.handleUpdateData}
			/>
			<div className="divider-wrapper">
				<span>Or</span>
			</div>
			<div className="input-field-wrapper">
				<label>Upload Your Own Photo</label>
				<div onClick={() => filePickerRef.current.click()} className="image-upload-container">
					<span>Upload Image</span>
					<button id="image-upload-btn">
						<Upload />
					</button>
				</div>
			</div>
			<input
				ref={filePickerRef}
				id={props.id}
				style={{ display: 'none' }}
				onChange={pickedHandler}
				accept=".jpg, .png, .jpeg"
				type="file"
			/>
		</div>
	);
};

export default ImageUpload;
