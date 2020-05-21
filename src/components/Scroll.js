import React from 'react';

const Scroll = (props) => {

	return (
		<div style={{overflowY: "scroll" , height: "500px", border: "3px solid midnightblue"}}>
			{props.children}
		</div>
	);

}



export default Scroll;
