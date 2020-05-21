import React from 'react';


const Searchbox = ({searchChange}) => {

	return (

		<div className='ma4'>
			<input onChange={searchChange} type='text' placeholder='Search Robocops' />
		</div>

	);

}


export default Searchbox;
