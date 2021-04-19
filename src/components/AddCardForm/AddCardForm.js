import React, { useEffect, useState, useRef } from 'react';
import { ReactComponent as Arrow } from '../../shared/icons/arrow.svg';
import Card from '../Card/Card';
import './AddCardForm.css';
import Position from './Position/Position';
import Input from './Input/Input';
import ImageUpload from './ImageUpload/ImageUpload';
import TeamPicker from './TeamPicker/TeamPicker';
const AddCardForm = (props) => {
	const [ cardData, setCardData ] = useState({
		playerImg : 'https://digitalmarketing.blob.core.windows.net/10042/images/items/image675306.jpg',
		teamImg   : '',
		team      : '',
		color     : '',
		position  : '',
		firstName : '',
		lastName  : ''
	});

	const [ page, setPage ] = useState(1);
	const [ sectionTitle, setSectionTitle ] = useState('Player Info');

	const handleUpdateData = (key, data) => {
		const updatedData = { ...cardData };
		updatedData[key] = data;
		setCardData(updatedData);
	};
	const submitCardHandler = () => {
		props.addCardHandler(cardData);
		props.setModalIsActive(false);
	};

	const handleUpdateTeamData = (data) => {
		const updatedData = { ...cardData };
		updatedData.color = data.color;
		updatedData.team = data.team;
		updatedData.teamImg = data.id;
		setCardData(updatedData);
	};

	const resetHandler = () => {
		let card = {
			playerImg : 'https://digitalmarketing.blob.core.windows.net/10042/images/items/image675306.jpg',
			teamImg   : '',
			team      : '',
			color     : '',
			position  : '',
			firstName : '',
			lastName  : ''
		};
		setCardData(card);
	};

	const getTitleSection = () => {
		let title;

		switch (page) {
			case 0:
				title = 'Player Info';
				break;
			case 1:
				title = 'Player Image';
				break;
			case 2:
				title = 'Player Team';
				break;

			default:
				break;
		}

		return title;
	};

	const pageUpHandler = () => {
		if (page === 3) {
			submitCardHandler();
		} else {
			setPage((p) => p + 1);
		}

		let title = getTitleSection();
		setSectionTitle(title);
	};
	const pageDownHandler = () => {
		if (page !== 1) {
			setPage((p) => p - 1);
		}
		let title = getTitleSection();
		setSectionTitle(title);
	};

	//--------------------

	const playerInfoSection = (
		<div className="player-fields__player-info">
			<div className="names-container">
				<Input label="First Name" id="first-name" inputName="firstName" onChange={handleUpdateData} />
				<Input label="Last Name" id="last-name" inputName="lastName" onChange={handleUpdateData} />
				<Position label="Choose Your Position" handleUpdateData={handleUpdateData} />
			</div>
		</div>
	);

	const playerImageSection = (
		<div className="player-fields__image">
			<ImageUpload
				label="Player Picture"
				placeholder="Image url"
				value={cardData.playerImg}
				id="image-url"
				inputName="playerImg"
				handleUpdateData={handleUpdateData}
			/>
		</div>
	);

	const playerTeamSection = (
		<div className="player-fields__team">
			<TeamPicker label="Baseball Card Team" handleUpdateTeamData={handleUpdateTeamData} />
		</div>
	);

	const resetButton = (
		<div className="reset-btn-wrapper">
			<button onClick={resetHandler} className="inverse">
				Reset Player
			</button>
		</div>
	);

	return (
		<React.Fragment>
			<div className="add-card__header">
				<div
					style={{
						visibility :

								page !== 1 ? 'visible' :
								'hidden'
					}}
				>
					<button onClick={pageDownHandler} className="footer-btn back-btn">
						<Arrow /> <span>Back</span>
					</button>
				</div>
				<h2 className="section-title">{sectionTitle}</h2>
				<div>
					<button className={`footer-btn next-btn ${cardData.team && 'finish'}`} onClick={pageUpHandler}>
						<span>
							{
								page === 3 ? 'Finish' :
								'Next'}
						</span>
						{page !== 3 && <Arrow />}
					</button>
				</div>
			</div>
			<div className="add-card-container">
				<div className="card-preview">
					<Card
						playerImg={cardData.playerImg}
						teamImg={cardData.teamImg}
						team={cardData.team}
						position={cardData.position}
						color={cardData.color}
						firstName={cardData.firstName || null}
						lastName={cardData.lastName}
					/>
				</div>
				<div className="player-fields">
					{page === 1 && playerInfoSection}
					{page === 2 && playerImageSection}
					{page === 3 && playerTeamSection}
				</div>
			</div>
		</React.Fragment>
	);
};

export default AddCardForm;
