import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import 'tachyons';
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';


class App extends Component {

	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {this.setState({ robots: users }) } )
	}

	
	render() {

		const onSearchChange = (event) => {
			this.setState({ searchfield: event.target.value })
		}

		const { robots, searchfield } = this.state;

		var filteredRobots = robots.filter((robot) => {
				return robot.name.toLowerCase().includes(searchfield.toLowerCase()) 
				}
			)

		
		return ( 

 			<div className ='tc'>

 				{ (!robots.length) 
 					? 
 						<div className = 'flex justify-center f4'>
 							<h1>Loading....</h1>  
 						</div>

 					: 	
			 			<div className ='tc'>
							<h3 className='f1 ma3'>Robocops</h3>
							<Searchbox searchChange={onSearchChange}/>
							<Scroll>
								<Cardlist robots={filteredRobots} />
							</Scroll>
			 			</div>
				}

			</div>
		);				

	}
}

export default App;
