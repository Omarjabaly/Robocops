import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cardlist from '../components/Cardlist';
import 'tachyons';
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField, getRobots } from '../actions.js';
import { requestRobots, searchRobots } from '../reducers.js';


const mapStateToProps = (state) => {
	return { 
		searchField: state.searchRobots.searchField,
		isPending: state.requestRobots.isPending,
		robots: state.requestRobots.robots,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => { dispatch(setSearchField(event.target.value)) },
		onGetRobots: () => { dispatch(getRobots()) }
	}
}

class App extends Component {


	componentDidMount() {

		this.props.onGetRobots();
		// fetch('https://jsonplaceholder.typicode.com/users')
		// .then(response => response.json())
		// .then(users => {this.setState({ robots: users }) } )
	}

	// onSearchChange = (event) => {
	// 		this.setState({ searchfield: event.target.value })
	// 	}


	render() {

		const { searchField, onSearchChange, robots } = this.props;


		var filteredRobots = robots.filter((robot) => {
				return robot.name.toLowerCase().includes(searchField.toLowerCase()) 
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
							<ErrorBoundary>
								<Searchbox searchChange={onSearchChange} />
								<Scroll>
									<Cardlist robots={filteredRobots} />
								</Scroll>
							</ErrorBoundary>
			 			</div>
				}

			</div>
		);				

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
