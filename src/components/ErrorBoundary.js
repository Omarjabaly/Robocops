import React, { Component } from 'react';


class ErrorBoundary extends Component {

	constructor() {
		super();
		this.state = {
			hasError: false
		};
	}

	componentDidCatch(error, errorInfo) {
		this.setState({ hasError: true })
	}

	render() {

		if (this.state.hasError) {
			
			return (

				<h1 className = 'tc'>OOOOOOPPPPPPSSSSSS.....Something Went Wrong..</h1>

				);
		}   return this.props.children
		
	}

}


export default ErrorBoundary;
