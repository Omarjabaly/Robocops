import React from 'react';
import Card from './Card'; 


const Cardlist = ({robots}) => {

		return (
		<div className='flex flex-wrap justify-center'>
			{ robots.map( robot => <Card robot={robot} /> ) }
		</div>

	);

}

export default Cardlist;
