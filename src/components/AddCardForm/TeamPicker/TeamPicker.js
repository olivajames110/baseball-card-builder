import React, { useEffect, useState, useRef } from 'react';
import { Teamassets, al, nl } from '../../../shared/assets/assets';
import './TeamPicker.css';
const TeamPicker = (props) => {
	const [ isNl, setIsNl ] = useState('nl');
	const [ division, setDivision ] = useState('central');
	const [ teams, setTeams ] = useState([]);
	const [ selectedTeam, setSelectedTeam ] = useState();

	const handleSelectedTeam = (team) => {
		let data = {
			color   : team.color,
			team    : team.name,
			teamImg : team.teamImg,
			id      : team.id
		};
		setSelectedTeam(team.name);
		props.handleUpdateTeamData(data);
	};

	useEffect(
		() => {
			let teamList;
			if (isNl === 'nl') {
				teamList = nl[division];
			} else {
				teamList = al[division];
			}
			setTeams(teamList);
		},
		[ isNl, division ]
	);
	return (
		<div id="team-name" className="input-field-wrapper">
			<label>{props.label}</label>
			<div className="team-picker-container">
				<div className="leages-divisions-wrapper">
					<div className="leagues ">
						<button
							onClick={() => setIsNl('nl')}
							className={`league btn ${isNl === 'nl' && 'item-active'}`}
						>
							National League
						</button>
						<button
							onClick={() => setIsNl('al')}
							className={`league btn ${isNl === 'al' && 'item-active'}`}
						>
							American League
						</button>
					</div>
					{isNl && (
						<div className="division-container">
							<button
								onClick={() => setDivision('west')}
								className={`division btn ${division === 'west' && 'item-active'}`}
							>
								West
							</button>

							<button
								onClick={() => setDivision('central')}
								className={`division btn ${division === 'central' && 'item-active'}`}
							>
								Central
							</button>
							<button
								onClick={() => setDivision('east')}
								className={`division btn ${division === 'east' && 'item-active'}`}
							>
								East
							</button>
						</div>
					)}
				</div>
				{division &&
				teams && (
					<div className="teams-container">
						{teams.map((team) => (
							<div
								onClick={() => handleSelectedTeam(team)}
								className={`team-wrapper ${selectedTeam === team.name && 'item-active'}`}
							>
								<img src={team.url} alt="" srcset="" />
								<span>{team.name}</span>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default TeamPicker;
