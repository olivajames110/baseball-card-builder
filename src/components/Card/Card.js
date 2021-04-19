import React, { useEffect, useState, useRef } from 'react';
import './Card.css';

import { Teamassets, al, nl } from '../../shared/assets/assets';

const Card = (props) => {
	const [ cardWidth, setCardWidth ] = useState();
	// const [ cardHeight, setCardHeight ] = useState(3);
	const heightRatio = 1.35;
	const cardWidthRef = useRef(null);
	const teamImgRef = useRef(null);
	const setHeightHandler = () => {
		// console.log('resize', cardWidthRef.current.offsetWidth);
		let h = cardWidthRef * heightRatio;
		// setCardHeight(h);
		setCardWidth(cardWidthRef.current.offsetWidth);
	};
	useEffect(() => {
		window.addEventListener('resize', setHeightHandler);
		setHeightHandler();
		return () => window.removeEventListener('resize', setHeightHandler);
	}, []);
	return (
		<div style={{ height: cardWidth * heightRatio }} ref={cardWidthRef} className="baseball-card-wrapper">
			<img className="player" src={props.playerImg} alt="player" />
			<div className="player-details-bar">
				<div className="player-details">
					<div className="last-name">{props.lastName}</div>
					<div style={{ backgroundColor: props.color }} className="first-name">
						{props.firstName}
					</div>
					{(props.position || props.team) && (
						<div className="position-and-team-container">
							<div className="position"> {props.position}</div>
							<div className="team-name">{props.team}</div>
						</div>
					)}
				</div>
				<div className="team-img-wrapper">
					{props.teamImg && (
						<div style={{ border: '1px solid' + props.color }} className="team-img">
							<img
								ref={teamImgRef}
								style={{ height: teamImgRef }}
								src={Teamassets[props.teamImg].url}
								alt="player"
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Card;
