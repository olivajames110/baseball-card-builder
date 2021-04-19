import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import CardPreview from './CardPreview/CardPreview';
import { CSSTransition } from 'react-transition-group';
import './Binder.css';

const Binder = (props) => {
	const [ modalIsActive, setModalIsActive ] = useState(false);
	const [ cardPreview, setCardPreview ] = useState({});

	const previewCardHandler = (card) => {
		console.log('preview');
		setCardPreview(card);
		setModalIsActive(true);
	};

	const closePreview = () => {
		setCardPreview({});
		setModalIsActive(false);
	};

	const cardList = (
		<React.Fragment>
			{props.cards.map((card) => {
				return (
					<div onClick={() => previewCardHandler(card)} className="card-wrapper">
						<CSSTransition
							in={card.playerImg !== cardPreview.playerImg}
							timeout={1000}
							classNames="binder-card"
							mountOnEnter
							unmountOnExit
						>
							<Card
								playerImg={card.playerImg}
								teamImg={card.teamImg}
								team={card.team}
								position={card.position}
								color={card.color}
								firstName={card.firstName}
								lastName={card.lastName}
							/>
						</CSSTransition>
					</div>
				);
			})}
		</React.Fragment>
	);

	return (
		<React.Fragment>
			<CardPreview show={modalIsActive} onCancel={closePreview}>
				<Card
					playerImg={cardPreview.playerImg}
					teamImg={cardPreview.teamImg}
					team={cardPreview.team}
					position={cardPreview.position}
					color={cardPreview.color}
					firstName={cardPreview.firstName}
					lastName={cardPreview.lastName}
				/>
			</CardPreview>

			<div className="binder-container">
				<div className="punch-hole-wrapper">
					<div className="punch-hole" />
					<div className="punch-hole" />
					<div className="punch-hole" />
				</div>
				<div className="card-sleeve-container">
					{cardList}
					{props.cards.length <= 1 && <div style={{ cursor: 'initial' }} className="card-wrapper" />}
					{props.cards.length <= 2 && <div style={{ cursor: 'initial' }} className="card-wrapper" />}
					{props.cards.length <= 3 && <div style={{ cursor: 'initial' }} className="card-wrapper" />}
					{props.cards.length <= 4 && <div style={{ cursor: 'initial' }} className="card-wrapper" />}
					{props.cards.length <= 5 && <div style={{ cursor: 'initial' }} className="card-wrapper" />}
					{props.cards.length <= 6 && <div style={{ cursor: 'initial' }} className="card-wrapper" />}
					{props.cards.length <= 7 && <div style={{ cursor: 'initial' }} className="card-wrapper" />}
					{props.cards.length <= 8 && <div style={{ cursor: 'initial' }} className="card-wrapper" />}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Binder;
// <Card
// playerImg={'https://s.hdnux.com/photos/65/03/23/13907147/3/920x920.jpg'}
// teamImg={Teamassets.mets.url}
// team={Teamassets.mets.name}
// position={'position'}
// color={Teamassets.mets.color}
// firstName={'Jimmy'}
// lastName={'Oliva'}
// />
