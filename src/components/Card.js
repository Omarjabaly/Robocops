import React from 'react';

const Card = ({ id, name, email }) => {

	
	return (

		<div className="tc w5 h10 ma2 ba bw1 b--purple br3 shadow-3 grow">
			    <img src={`https://robohash.org/${id}.jpg?bgset=bg1`} alt="Robocop" />
			    <h1 className="f3">{name}</h1>
			    <h2 className="f6 normal">{email}</h2>
		</div>
	);

}



export default Card;
