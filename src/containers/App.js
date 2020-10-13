import React, { useState, useEffect } from 'react';
import Cardlist from '../components/Cardlist';
import 'tachyons';
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

//class App extends Component {

// replacing Class by function:

function App() {

//	constructor() {
//		super();
//		this.state = {
//			robots: [],
//			searchfield: ''
//		}
//	}

//Adding useState hooks:

	const [robots, setRobots] = useState([]);
	const [searchfield, setSearchfield] = useState('');


//	componentDidMount() {
//		fetch('https://jsonplaceholder.typicode.com/users')
//		.then(response => response.json())
//		.then(users => {this.setState({ robots: users }) } )
//	}

//  Adjusted lifecycle to hooks usage:

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => setRobots(users))
	},[]);

 
//	onSearchChange = (event) => {
//			this.setState({ searchfield: event.target.value })
//		}

//  Adjusted function to hooks usage:

	const onSearchChange = (event) => {setSearchfield(event.target.value)}

//	render() {

//		const { robots, searchfield } = this.state;

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
							<ErrorBoundary>
								<Scroll>
									<Cardlist robots={filteredRobots} />
								</Scroll>
							</ErrorBoundary>
			 			</div>
				}

			</div>
		);				

//	}
}

export default App;
