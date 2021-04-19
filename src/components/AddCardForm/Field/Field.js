import React, { useState, useEffect } from 'react';
import './Field.css';
const Field = (props) => {
	const [ selectedPosition, setSelectedPosition ] = useState('');
	const teamSelectHandler = (position) => {
		setSelectedPosition(position);

		props.handleFieldChange(position);
		props.handleUpdateData('position', position);
	};

	useEffect(
		() => {
			if (props.position) {
				setSelectedPosition(props.position);
			}
		},
		[ props ]
	);

	return (
		<div className="baseball-field-container">
			<svg
				className="baseball-field"
				xmlns="http://www.w3.org/2000/svg"
				// xmlns="http://www.w3.org/1999/xlink"
				viewBox="0 0 406 398"
			>
				<g data-name="Field">
					<path
						data-name="Warning Track"
						className="sand"
						d="M203.47747,0C407.60906,0,406.95492,203.47745,406.95492,203.47745l-189.256,189.256a20.11213,20.11213,0,0,1-28.44284,0L0,203.47745S-.66263,0,203.47747,0Z"
					/>
					<path
						className="dark-grass"
						d="M396.45849,213.97386c-.16877-7.59739-6.19474-201.84874-192.90143-201.84874-191.10739,0-192.89085,197.41523-192.906,202.00339L189.256,392.73344a20.11216,20.11216,0,0,0,28.44287,0Z"
					/>
					<g>
						<path
							className="light-grass"
							d="M26.75321,131.76968,136.804,21.719C74.1664,41.59252,42.63105,88.98461,26.75321,131.76968Z"
						/>
						<path
							className="light-grass"
							d="M301.6748,35.85441a166.45374,166.45374,0,0,0-27.4682-12.52628L47.0287,250.506l19.99724,19.99724Z"
						/>
						<path
							className="light-grass"
							d="M203.55707,12.1251q-8.21349,0-15.95763.48459l-174.68985,174.69a214.82751,214.82751,0,0,0-2.25848,26.82878l7.71188,7.71188L226.99092,13.21261C219.51193,12.50341,211.71065,12.1251,203.55707,12.1251Z"
						/>
						<path
							className="light-grass"
							d="M384.77329,147.40725a245.74453,245.74453,0,0,0-10.93381-29.06085L144.35407,347.83146l19.9975,19.99746Z"
						/>
						<path
							className="light-grass"
							d="M217.699,392.73342l178.7595-178.75958c-.02969-1.33887-.243-8.48007-1.59334-19.328L193.52319,395.98776A20.11693,20.11693,0,0,0,217.699,392.73342Z"
						/>
						<path
							className="light-grass"
							d="M352.82748,82.02733a173.06713,173.06713,0,0,0-18.53129-21.46315L95.69139,299.16877l19.99737,19.99733Z"
						/>
					</g>
					<path
						data-name="Infield"
						className="sand"
						d="M203.47745,347.4514l90.93874-90.93874a91.554,91.554,0,0,0-181.87743,0Z"
					/>
					<g>
						<circle
							data-name="Home Plate Sand"
							className="sand"
							cx="203.47747"
							cy="347.00459"
							r="12.82958"
						/>
						<circle data-name="Home Plate" className="white" cx="203.47747" cy="347.00459" r="4.45968" />
					</g>
					<path
						data-name="Foul Lines"
						className="white"
						d="M203.4775,348.95105,389.12894,163.29961q-.14544-.60106-.29434-1.20588l-.7495-.7495L203.4775,345.95183,18.47531,160.94964l-.74972.74972q-.14447.60844-.286,1.21377Z"
					/>
					<rect
						className="dark-grass"
						x="159.65524"
						y="223.28515"
						width="87.64446"
						height="87.64446"
						transform="translate(158.48433 599.86113) rotate(-135)"
					/>
					<g>
						<circle data-name="2nd Base Sand" className="sand" cx="203.47747" cy="205.13339" r="7.08924" />
						<circle data-name="2nd Base" className="white" cx="203.47747" cy="205.13339" r="2.46428" />
					</g>
					<g>
						<circle data-name="1st Base Sand" className="sand" cx="265.22208" cy="266.878" r="7.08924" />
						<circle data-name="1st Base" className="white" cx="265.22208" cy="266.878" r="2.46428" />
					</g>
					<g>
						<circle data-name="3rd Base Sand" className="sand" cx="141.70047" cy="266.878" r="7.08924" />
						<circle data-name="3rd Base" className="white" cx="141.70047" cy="266.878" r="2.46428" />
					</g>
					<circle data-name="Mound" className="sand" cx="203.47747" cy="267.10738" r="7.59631" />
				</g>
			</svg>
			<span
				onClick={() => teamSelectHandler('Pitcher')}
				data-position="Pitcher"
				className={`position-btn ${selectedPosition === 'Pitcher' && 'position-btn--active'}`}
				id="pitcher"
			>
				P
			</span>
			<span
				onClick={() => teamSelectHandler('Catcher')}
				data-position="Catcher"
				className={`position-btn ${selectedPosition === 'Catcher' && 'position-btn--active'}`}
				id="catcher"
			>
				C
			</span>
			<span
				onClick={() => teamSelectHandler('1st Base')}
				data-position="1st Base"
				className={`position-btn ${selectedPosition === '1st Base' && 'position-btn--active'}`}
				id="first-base"
			>
				1B
			</span>
			<span
				onClick={() => teamSelectHandler('2nd Base')}
				data-position="2nd Base"
				className={`position-btn ${selectedPosition === '2nd Base' && 'position-btn--active'}`}
				id="second-base"
			>
				2B
			</span>
			<span
				onClick={() => teamSelectHandler('3rd Base')}
				data-position="3rd Base"
				className={`position-btn ${selectedPosition === '3rd Base' && 'position-btn--active'}`}
				id="third-base"
			>
				3B
			</span>
			<span
				onClick={() => teamSelectHandler('Short Stop')}
				data-position="Short Stop"
				className={`position-btn ${selectedPosition === 'Short Stop' && 'position-btn--active'}`}
				id="short-stop"
			>
				SS
			</span>
			<span
				onClick={() => teamSelectHandler('Left Field')}
				data-position="Left Field"
				className={`position-btn ${selectedPosition === 'Left Field' && 'position-btn--active'}`}
				id="left-field"
			>
				LF
			</span>
			<span
				onClick={() => teamSelectHandler('Center Field')}
				data-position="Center Field"
				className={`position-btn ${selectedPosition === 'Center Field' && 'position-btn--active'}`}
				id="center-field"
			>
				CF
			</span>
			<span
				onClick={() => teamSelectHandler('Right Field')}
				data-position="Right Field"
				className={`position-btn ${selectedPosition === 'Right Field' && 'position-btn--active'}`}
				id="right-field"
			>
				RF
			</span>
		</div>
	);
};

export default Field;
