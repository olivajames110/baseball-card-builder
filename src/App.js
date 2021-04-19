import React, { useState } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import Binder from './components/Binder/Binder';
import { Teamassets } from './shared/assets/assets';

const App = () => {
	const [ cardList, setCardList ] = useState([
		{
			playerImg :
				'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQM34hnLaNoqqlqU922woVe3RHxFGh0tkBxaw&usqp=CAU',
			teamImg   : 'mets',
			team      : Teamassets['mets'].name,
			color     : Teamassets['mets'].color,
			position  : 'Pitcher',
			firstName : 'Jacob',
			lastName  : 'deGrom'
		}
	]);

	const addCardHandler = (card) => {
		let list = [ ...cardList, card ];
		setCardList(list);
	};
	return (
		<div className="outer-wrapper">
			<Toolbar addCardHandler={addCardHandler} />
			<Binder cards={cardList} />
		</div>
	);
};

export default App;
